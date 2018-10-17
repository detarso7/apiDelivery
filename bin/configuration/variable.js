const variables = {
    Api: {
        port: process.env.port || 3000
    },
    Database:{
        connection: process.env.connection || 'mongodb://detarso7@132:Moscas@132@ds135233.mlab.com:35233/delivery'
    }
}

module.exports = variables;