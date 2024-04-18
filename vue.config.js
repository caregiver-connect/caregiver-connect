const fs = require('fs')

module.exports = {
    devServer: {
        https: {
            key: fs.readFileSync('./app/openssl/certs/cs495-spring2024-09.ua.edu.key'),
            cert: fs.readFileSync('./app/openssl/certs/cs495-spring2024-09.ua.edu.crt'),
        }
    }
}