import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
	isAuthenticated: boolean;
	children: ReactNode;
};

export default function ProtectedRoute({
	isAuthenticated,
	children,
}: ProtectedRouteProps) {
	return isAuthenticated ? <>{children}</> : <Navigate to={"/login"} />;
}
