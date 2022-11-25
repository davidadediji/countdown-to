const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const { dbConnect } = require('./utils/connect');
const countdown = require('./routes/countdownRoute');
const linkRoute = require('./routes/linkRoute');

dotenv.config();

const options = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'County API docs',
			version: '0.1.0',
		},
		servers: [
			{
				url: 'https://countdown-events.onrender.com/',
				description: 'production server',
			},
		],
	},
	apis: ['./src/routes/countdownRoute.js'],
};

const specs = swaggerJSDoc(options);

const app = express();

const port = process.env.PORT || 5000;
const url = String(process.env.MONGO_URI);
app.use(
	cors()
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/countdown', countdown);
app.use('/api/v1/link', linkRoute);
app.use('/api/v1/countdown/docs', swaggerUi.serve, swaggerUi.setup(specs));


app.get('/', (req, res) => {
	res.send(`testing server`);
});

app.listen(port, () => {
	console.log(`server listening on port ${port}`);
	dbConnect(url);
});
