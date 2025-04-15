const notFound = (req, res, next) => {
    res.status(404).json("Sorry, that route doesn't exist")
};

module.exports = notFound