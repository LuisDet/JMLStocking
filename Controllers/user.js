'use string'

const mongoose = require('mongoose')
const User = require('../modules/user')
const service = require('../service')

function signUp (req, res){
    const user = new User({
        email: req.body.mail,
        displayName: req.body.displayName    
    })
    user.save((err)=>{
        if (err) res.status(500).send({message:`Error al crear el usuario ${err}`})

        res.status(200).send({token: service.CreateToken(user)})
    })
}

function signIn (req, res){
    User.find({email: req.body.email}, (err, user)=>{
        if(err) res.status(500).send({message:err})
        if(!user) res.status(400).send({message:'No se ha encontrado el usuario'})

        req.user = user
        res.status(200).send({
            message:'Te has logueado correctamente',
            token: service.CreateToken(user)
        })
    })
}

module.exports= {
    signUp,
    signIn
}