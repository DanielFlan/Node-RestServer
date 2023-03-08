const express = require('express');
const port = (process.env.PORT);
const cors = require('cors');

class Server {
    constructor() {
        this.app = express()
        this.port= process.env.PORT || 3000;
        this.usuariosPath = '/api/usuarios';

        // Middlewears
        this.middlewears();
        // Rutas de la app
        this.routes();
    }

    middlewears() {
        // CORS
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use(express.json());

        // Directorio público
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/user'));

    }

    listen () {
        this.app.listen(port, () => {
            console.log('Servidor activo en el puerto: ', port);
        })
    }
}

module.exports = Server;
