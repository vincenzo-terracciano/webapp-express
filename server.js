const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

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

/* Index */
app.get('/api/v1/movies', (req, res) => {
    res.json({ message: 'List of movies' })
})

/* Show */
app.get('/api/v1/movies/:id', (req, res) => {
    const { id } = req.params
    res.json({ message: `List of movies with id: ${id}` })
})