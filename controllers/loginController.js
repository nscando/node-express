const userModels = require("../models/userModels")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {

     login: async function (req, res, next) {
          console.log(req.body)
          //Consulto por usuario
          try {
               let users = await userModels.findOne({ user: req.body.user })
               if (users) {
                    //Validar el password
                    if (bcrypt.compareSync(req.body.password, users.password)) {
                         //Password valido , genero token
                         const token = jwt.sign({ users: users._id }, req.app.get('secretKey'), { expiresIn: '1h' })
                         console.log('token', token)
                         res.status(201).json({ token: token })
                    } else {
                         //Password invalido
                         res.json({ mensaje: "Wrong username or password!", data: null })
                    }
               } else {
                    //Arrojar error
                    res.json({ mensaje: "Wrong username or password!", data: null })
               }

          } catch (e) {
               next(e)
          }


     }

}