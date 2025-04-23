const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

const moviesRouter = require('./routers/movies');
const serverError = require('./middlewares/serverError');
const error404 = require('./middlewares/error404')

/* Middlewares */
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use(express.json());
app.use(express.static('public'));

/* Routes */
app.get('/', (req, res) => {
    res.send('Welcome on our server')
});

app.use('/api/v1/movies', moviesRouter)

/* Listening */
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);

});

app.post('/register', (req, res) => {

    const data = req.body;
    console.log(data);
    res.json(data)
})

app.post('/login', (req, res) => {

    const data = req.body;
    console.log(data);
    res.json(data)
})

/* Middleware to manage errors */
app.use(serverError)
app.use(error404)