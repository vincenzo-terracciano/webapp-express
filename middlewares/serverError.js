const serverError = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('500 Internal Server Error')
}

module.exports = serverError;