'use strict'


const services=  require('../service')

function isAuth (req, res){
    if(!req.headers.authorization){
        return res.status(200).send({message: `No tienes autorizacion`})
    }

    const token =  req.headers.authorization.split(" ")[1]    
    services.decodeToken(token)
    .then(response => {
        req.user = response
        next()
    })
    .catch(response => {
        req.status(response.status)
    })
}

module.exports= isAuth