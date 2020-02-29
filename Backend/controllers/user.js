const service  = require('../services/user')

const methods = {
    async get(req, res){
        try {
            let result = await service.getUser()
            res.send(result)
        } catch (error) {
            res.error(error)
        }
    },
    post(req, res){
        res.send({method: 'post', body: req.body});
    },
    delete(req, res){
        res.send({method: 'delete', body: req.body});
    },
    put(req, res){
        res.send({method: 'put', body: req.body});
    },
}

module.exports = { ...methods }