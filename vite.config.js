import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

export default ({ mode }) => {
  // Load environment variables based on the current mode (development or production)
  const env = dotenv.config({
    path: `./.env.${mode}`,
  }).parsed;

  return defineConfig({
    plugins: [react()],
    define: {
      // Pass the environment variables to the client-side code
      "process.env": JSON.stringify(env),
    },
  });
};
