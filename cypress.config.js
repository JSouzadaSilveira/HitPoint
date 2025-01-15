const { defineConfig } = require("cypress");

module.exports = defineConfig({
	e2e: {
		chromeWebSecurity: false,
		defaultCommandTimeout: 10000,
		viewportWidth: 1280,
		viewportHeight: 720,
		baseUrl: process.env.CYPRESS_BASE_URL || 'http://localhost:3000',
		env: {
			apiUrl: process.env.CYPRESS_API_URL,
			username: process.env.CYPRESS_USERNAME,
			password: process.env.CYPRESS_PASSWORD
		}
	},
});
