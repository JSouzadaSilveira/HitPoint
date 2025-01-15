const { defineConfig } = require("cypress");

module.exports = defineConfig({
	e2e: {
		chromeWebSecurity: false,
		defaultCommandTimeout: 10000,
		viewportWidth: 1280,
		viewportHeight: 720,
	},
});
