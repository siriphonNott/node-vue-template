const mysql = require('mysql')

const connection  = mysql.createPool({
    connectionLimit : 10,
    host            : '103.30.127.29',
    user            : 'nottdev_api',
    password        : 'nottdev_api@2020',
    database        : 'nottdev_api'
});
 
module.exports = connection