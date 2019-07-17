const amqp = require('amqplib/callback_api');
const config = require('./config');

const queue = 'RabbitMQ Test';

amqp.connect(config.amqp.getURLConnection(), (error, connection) => {
	if (error) throw error;

	connection.createChannel((error, channel) => {
		if (error) throw error;

		channel.assertQueue(queue, { durable: false });
		console.log(
			' [*] Waiting for messages in %s. To exit press CTRL+C',
			queue
		);

		channel.consume(
			queue,
			msg => {
				console.log(' [x] Received %s', msg.content.toString());
			},
			{
				noAck: true
			}
		);
	});
});
