const mongoose = require('mongoose');
const colors = require('colors');

const dbConnection = async () => {

    try {
        await mongoose.connect(process.env.MONGODB_CNN,);

        console.log('-Conectado a la base con éxito-'.bgGreen.italic.bold);

    } catch (error){
        console.log(error);
        throw new Error('-Error al conectarse con la base-'.bgRed.italic.bold);
    }
}

module.exports = {
    dbConnection
}