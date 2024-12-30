import type { SignupPayload, SignupResponse } from "@/types/backendService.ts";
import axios, { type AxiosInstance } from "axios";
import applyCaseMiddleware from "axios-case-converter";

const BASE_URL: string = "http://localhost:8082/api/v1";

// TODO: The following lines are commented out because when these two
// errors occur, we just redirect to the login, the desired behaviour
// is that `BackendService` class raises these errors and they are handled
// globally to redirect to the login page
// export const ERROR_NO_CACHED_TOKEN_FOUND = new BackendServiceError(
// 	"No cached token found",
// );
// export const ERROR_REFRESH_TOKEN_EXPIRED = new BackendServiceError(
// 	"Refresh token expired",
// );

const TOKENS_KEY = "tokens";
let CACHED_TOKENS: Tokens | null = null;

export type Tokens = {
	tokenType: "bearer"; // For now only bearer tokens are used
	accessToken: string;
	refreshToken: string;
};

enum Routes {
	Attendees = "attendees",
	Auth = "auth",
	Events = "events",
	Organizations = "organizations",
	OrganizationInvites = "organization-invites",
	Users = "users",
}
// TODO: Refactor into smaller services
class BackendService {
	isAuthenticated(): boolean {
		// 	Current assumption is that if tokens are present in the localStorage, the user is authenticated.
		// 	even if the tokens have expired, subsequent api calls will redirect
		const tokens = BackendService.fetchCachedTokens();
		return !!tokens;
	}

	async signUp(payload: SignupPayload): Promise<SignupResponse> | never {
		const client = this.getClient(false);
		return (await client.post(`/${Routes.Auth}/signup/`, payload)).data.data;
	}

	@BackendService.retryIfTokenExpired
	async verifyEmail(verificationToken: string, otp: string) {
		const client = this.getClient(true, verificationToken);
		const response = await client.post(`/${Routes.Auth}/verify-email/`, {
			otp,
		});
		return response.status === axios.HttpStatusCode.Ok;
	}

	@BackendService.retryIfTokenExpired
	async resendVerifyEmail() {}

	async forgotPassword() {
		const client = this.getClient(false);
		return (await client.post(`/${Routes.Auth}/forgot-password/`)).data.data;
	}

	async resetPassword() {
		const client = this.getClient(false);
		return (await client.post(`/${Routes.Auth}/reset-password/`)).data.data;
	}

	@BackendService.retryIfTokenExpired
	async createEvent() {}

	async fetchEventsAsPublic() {}

	@BackendService.retryIfTokenExpired
	async updateEvent() {}

	@BackendService.retryIfTokenExpired
	async deleteEvent() {}

	@BackendService.retryIfTokenExpired
	async fetchAttendees() {}

	@BackendService.retryIfTokenExpired
	async createOrganization() {}

	@BackendService.retryIfTokenExpired
	async fetchOrganizations() {}

	async fetchOrganizationsAsPublic() {}

	@BackendService.retryIfTokenExpired
	async transferOrganizationOwnership() {}

	@BackendService.retryIfTokenExpired
	async inviteMembers() {}

	@BackendService.retryIfTokenExpired
	async updateMembers() {}

	@BackendService.retryIfTokenExpired
	async removeMembers() {}

	@BackendService.retryIfTokenExpired
	async fetchMembershipRequests() {}

	@BackendService.retryIfTokenExpired
	async approveMembershipRequest() {}

	@BackendService.retryIfTokenExpired
	async declineMembershipRequest() {}

	@BackendService.retryIfTokenExpired
	async fetchOrganizationEvents() {}

	@BackendService.retryIfTokenExpired
	async fetchOrganizationInvite() {}

	@BackendService.retryIfTokenExpired
	async approveOrganizationInvite() {}

	@BackendService.retryIfTokenExpired
	async declineOrganizationInvite() {}

	@BackendService.retryIfTokenExpired
	async fetchCurrentUser() {}

	@BackendService.retryIfTokenExpired
	async updateCurrentUser() {}

	async fetchTokens(email: string, password: string): Promise<Tokens> {
		const client = this.getClient(false);
		const formData = new FormData();
		formData.append("username", email);
		formData.append("password", password);
		const tokens = (
			await client.post(`/${Routes.Auth}/access-token/`, formData)
		).data.data as Tokens;
		BackendService.storeTokens(tokens);
		return tokens;
	}

	static async refreshTokens(): Promise<void> {
		const oldTokens = BackendService.fetchCachedTokens();
		if (!oldTokens) {
			BackendService.redirectToLogin();
			return;
		}
		const client = applyCaseMiddleware(
			axios.create({
				baseURL: BASE_URL,
				headers: {
					Authorization: `${BackendService.capitalize(oldTokens.tokenType)} ${oldTokens.refreshToken}`,
				},
			}),
		);

		try {
			const newTokens = (await client.post(`/${Routes.Auth}/refresh-token/`))
				.data as Tokens;
			BackendService.storeTokens(newTokens);
		} catch (error) {
			if (!axios.isAxiosError(error)) throw error;
			if (error.response?.status === axios.HttpStatusCode.Unauthorized)
				BackendService.redirectToLogin();
			throw error;
		}
	}

	getClient(withAuth = true, customToken: string | null = null): AxiosInstance {
		if (!withAuth)
			return applyCaseMiddleware(axios.create({ baseURL: BASE_URL }));
		if (customToken)
			return applyCaseMiddleware(
				axios.create({
					baseURL: BASE_URL,
					headers: {
						Authorization: `Bearer ${customToken}`,
					},
				}),
			);
		const tokens = BackendService.fetchCachedTokens();
		if (!tokens) {
			BackendService.clearCachedTokens();
			BackendService.redirectToLogin();
			return axios.create(); // TODO: find a better fix, this is just to silent ts warning
		}
		return applyCaseMiddleware(
			axios.create({
				baseURL: BASE_URL,
				headers: {
					Authorization: `${BackendService.capitalize(tokens.tokenType)} ${tokens.accessToken}`,
				},
			}),
		);
	}

	static retryIfTokenExpired(
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		_target: any,
		_propertyKey: string | symbol,
		descriptor: PropertyDescriptor,
	) {
		const original = descriptor.value;
		if (typeof original !== "function")
			throw new BackendServiceError(
				"retryIfTokenExpired can only be applied to methods",
			);
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		descriptor.value = async function (...args: any[]) {
			try {
				return await original.call(this, ...args);
			} catch (error) {
				if (!axios.isAxiosError(error)) throw error;
				if (error.response?.status === axios.HttpStatusCode.Unauthorized) {
					await BackendService.refreshTokens();
					return await original.call(this, ...args);
				}
				throw error;
			}
		};
		return descriptor;
	}

	static storeTokens(tokens: Tokens) {
		CACHED_TOKENS = tokens;
		const serializedTokens = JSON.stringify(tokens);
		localStorage.setItem(TOKENS_KEY, JSON.stringify(serializedTokens));
	}

	static fetchCachedTokens(): Tokens | null {
		if (CACHED_TOKENS) return CACHED_TOKENS;
		const serializedTokens = localStorage.getItem(TOKENS_KEY);
		if (!serializedTokens) return null;
		CACHED_TOKENS = JSON.parse(serializedTokens) as Tokens;
		return CACHED_TOKENS;
	}

	static clearCachedTokens(): void {
		CACHED_TOKENS = null;
		localStorage.removeItem(TOKENS_KEY);
	}

	static capitalize(value: string) {
		return value.charAt(0).toUpperCase() + value.slice(1);
	}

	static redirectToLogin() {
		window.location.href = "/login";
	}
}

export class BackendServiceError extends Error {
	constructor(message: string) {
		super(message);
		this.name = "BackendServiceError";
	}
}

export default new BackendService();
