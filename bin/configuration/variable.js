const variables = {
    Api: {
        port: process.env.port || 3000
    },
    Database:{
        connection: process.env.connection || 'mongodb://administrador:nofood123456@ds135233.mlab.com:35233/delivery'
    },
    security:{
        secretKey: 'd41d8cd98f00b204e9800998ecf8427e|0a7428fb3bee99d45cf34b96e8069adb'
    }
}

module.exports = variables;