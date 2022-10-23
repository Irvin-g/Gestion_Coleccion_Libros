const express = require('express');
var cors = require('cors');

const connect = require('./services/database').connect;

class Server {

    constructor(){
        this.app = express();

        this.port = 3000;
        this.middlewares();
        this.app.use( express.json({limit: '50mb'}) ); //Parse body
        this.app.use( express.static('public'));

        this.app.use('/api', require('../endpoints'));
        
        connect();
    }

    middlewares(){
        //CORS
        this.app.use(cors());

    }

    listen(){

        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ', this.port);
        });
    }

}


module.exports = Server;