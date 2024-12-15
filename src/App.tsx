import About from "@pages/About/About.tsx";
import Communities from "@pages/Communities.tsx";
import Gdsceksu from "@pages/Communities/Gdsceksu.tsx";
import Event from "@pages/Event.tsx";
import Home from "@pages/Home.tsx";
import Login from "@pages/Login.tsx";
import SignUpPage from "@pages/Register.tsx";
import View from "@pages/View.tsx";
import { Route, Routes } from "react-router-dom";

export default function App() {
	return (
		<div className="font-pop">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/about" element={<About />} />
				<Route path="/view" element={<View />} />
				<Route path="/events" element={<Event />} />
				<Route path="/signup" element={<SignUpPage />} />
				<Route path="/communities" element={<Communities />} />
				<Route path="/communities/gdsceksu" element={<Gdsceksu />} />
			</Routes>
		</div>
	);
}
