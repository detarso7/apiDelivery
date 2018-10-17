'use strict'

const app = require('../api/bin/express')
const variables = require('../api/bin/configuration/variable')

app.listen(variables.Api.port, () => {
    console.info(`Servidor levantado na porta ${variables.Api.port}`)
});

