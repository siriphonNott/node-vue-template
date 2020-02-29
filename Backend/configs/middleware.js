module.exports = (req, res, next) => {
    
    res.error = (ex, status = 400) => {
        res.status(status).send({message: ex.message});
    }

    next()
}