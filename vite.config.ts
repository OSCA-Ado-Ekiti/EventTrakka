import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": resolve(__dirname, "src"),
			"@components": resolve(__dirname, "src/components"),
			"@pages": resolve(__dirname, "src/pages"),
			"@assets": resolve(__dirname, "src/assets"),
		},
	},
});
