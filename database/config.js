const mongoose = require('mongoose');

const dbConnection = async () => {

    try {
        await mongoose.connect(process.env.MONGODB_CNN,);

        console.log('Si se pudo conectar la base michin');

    } catch (error){
        console.log(error);
        throw new Error('La cagaste we');
    }
}

module.exports = {
    dbConnection
}