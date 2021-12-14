import express from 'express';
var cors = require('cors')
import apiRouter from './routes';

const app = express();
app.use(cors());
const port = 3000; // default port to listen

app.use(express.json({ strict: false }));
app.use(express.static('public'));

// define a route handler for the default home page
app.use('/', apiRouter);


// start the Express server
app.listen(port, () => {
	console.log(`server started at http://localhost:${port}`);
});
