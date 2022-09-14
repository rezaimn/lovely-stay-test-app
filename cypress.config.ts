import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },

  e2e: {
    baseUrl: "http://localhost:3000",
    env: {
      serverUrl: "https://api.github.com/"
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
