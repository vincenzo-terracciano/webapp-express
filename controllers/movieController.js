const connection = require('../data/db')

function index(req, res) {

    const sql = 'SELECT * FROM movies'

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ message: 'Query failed' })
        console.log(results);
        res.json(results)
    })
}

function show(req, res) {

    const movieId = Number(req.params.id);

    const sql = 'SELECT * FROM movies WHERE id = ?'

    const sqlReviews = 'SELECT * FROM reviews WHERE movie_id = ?'

    connection.query(sql, [movieId], (err, results) => {
        if (err) return res.status(500).json({ message: 'Query failed' })
        if (results.length === 0) return res.status(404).json({ message: 'Movie not found' })

        const movie = results[0];
        console.log(movie);

        connection.query(sqlReviews, [movieId], (err, reviews) => {
            if (err) return res.status(500).json({ message: 'Query failed' })
            movie.reviews = reviews;
            console.log(movie.reviews);
            res.json(movie);

        })
    })
}

function store(req, res) {
    const id = Number(req.params.id);
    const { name, vote, text } = req.body;

    const created_at = new Date().toISOString().slice(0, 19).replace('T', ' ')
    const updated_at = created_at

    const insertSql = 'INSERT INTO reviews (movie_id, name, vote, text, created_at, updated_at) VALUES (?, ?, ?, ?, ? ,?)'
    const values = [id, name, vote, text, created_at, updated_at]

    connection.query(insertSql, values, (err, results) => {
        if (err) return res.status(500).json({ error: err.message })

        console.log(results);
        res.status(201).json({ message: 'Review added successfully', reviewId: results.insertId })
    })
}

module.exports = {
    index,
    show,
    store
}