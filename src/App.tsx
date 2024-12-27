import BackendService from "@/backendService.ts";
import ProtectedRoute from "@components/ProtectedRoute.tsx";
import About from "@pages/About/About.tsx";
import Communities from "@pages/Communities.tsx";
import Gdsceksu from "@pages/Communities/Gdsceksu.tsx";
import Dashboard from "@pages/Dashboard.tsx";
import EventDetail from "@pages/EventDetail.tsx";
import EventList from "@pages/EventList.tsx";
import Home from "@pages/Home.tsx";
import Login from "@pages/Login.tsx";
import Register from "@pages/Register.tsx";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

export default function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		setIsAuthenticated(BackendService.isAuthenticated());
	}, []);

	return (
		<div className="font-pop">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route
					path="/dashboard"
					element={
						<ProtectedRoute isAuthenticated={isAuthenticated}>
							<Dashboard />
						</ProtectedRoute>
					}
				/>
				<Route path="/about" element={<About />} />
				<Route path="/view" element={<EventDetail />} />
				<Route path="/events" element={<EventList />} />
				<Route path="/signup" element={<Register />} />
				<Route path="/communities" element={<Communities />} />
				<Route path="/communities/gdsceksu" element={<Gdsceksu />} />
			</Routes>
		</div>
	);
}
