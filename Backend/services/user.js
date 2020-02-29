const connection = require('../configs/database')

const user = {
    getUser(){
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM ls_roles', function (error, results, fields) {
                if (error) return reject(error);
                resolve(results)
            });
        })
    }
}

module.exports = { ...user }