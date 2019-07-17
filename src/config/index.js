const dotenv = require('dotenv');
dotenv.config();

module.exports = {
	amqp: {
		host: process.env.AMQP_HOST || 'localhost',
		port: process.env.AMQP_PORT || 8888,
		user: process.env.AMQP_USER || 'guest',
		pass: process.env.AMQP_PASS || 'guest',
		getURLConnection() {
			return `amqp://${this.user}:${this.pass}@${this.host}:${this.port}`;
		}
	}
};
