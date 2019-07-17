const amqp = require('amqplib/callback_api');
const config = require('./config');

const queue = 'RabbitMQ Test';
const msg = 'Hello world';

amqp.connect(config.amqp.getURLConnection(), (error, connection) => {
	if (error) throw error;

	connection.createChannel((error, channel) => {
		if (error) throw error;

		channel.assertQueue(queue, {
			durable: false
		});

		channel.sendToQueue(queue, Buffer.from(msg));
		console.log(' [x] Sent %s', msg);
	});
});
