export type SignupPayload = {
	readonly email: string;
	readonly firstName: string;
	readonly lastName: string;
	readonly password: string;
	readonly confirmPassword: string;
};

export type SignupResponse = {
	readonly tokenType: "bearer";
	readonly verificationToken: string;
};
