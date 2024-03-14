const express = require('express');

const { serverConfig , Logger } = require('./config');
const apiRoutes = require('./routes');
const logger = require('./config/logger-config');

const app = express();

app.use('/api', apiRoutes);

app.listen(serverConfig.PORT, ()=>{
    console.log(`Successfull started the server at ${serverConfig.PORT}`);

    logger.info("Succefully started server", "root", {})
})