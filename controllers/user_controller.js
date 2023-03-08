const { response, request } = require('express');

const userGet = (req = request, res = response) => {
    const {id,nombre='Nombre no ingresado'} = req.query;
    
    res.status(300).json({
        msg: 'get API - controlador',
        id,
        nombre
    });
}

const userPut = (req, res = response) => {
    const {userID} = req.params;
    
    res.status(500).json({
        msg: 'put API - controlador',
        userID
    });
}

const userPost = (req, res = response) => {
    const {nombre, edad, id} = req.body;

    res.json({
        msg: 'post API - controlador',
        nombre,
        edad,
        id
    });
}

const userDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controlador'
    });
}

const userPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - controlador'
    });
}

module.exports = {
    userGet,
    userPut,
    userPost,
    userDelete,
    userPatch
}