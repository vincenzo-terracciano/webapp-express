const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

const moviesRouter = require('./routers/movies');
const serverError = require('./middlewares/serverError');
const error404 = require('./middlewares/error404')

/* Middlewares */
app.use(cors({
    origin: process.env.FRONT_URL
}));

app.use(express.json());
app.use(express.static('public'));

/* Listening */
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);

});

/* Routes */
app.get('/', (req, res) => {
    res.send('Welcome on our server')
});

app.use('/api/v1/movies', moviesRouter)

app.use(serverError)

app.use(error404)