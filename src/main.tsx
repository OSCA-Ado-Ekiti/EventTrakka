import App from "@/App.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "@/index.css";

createRoot(document.getElementById("root") as HTMLDivElement).render(
	<StrictMode>
		<Router>
			<App />
		</Router>
	</StrictMode>,
);
