const userModels = require("../models/userModels")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {

     login: async function (req, res, next) {

          try {
               let users = await userModels.findOne({ user: req.body.user })
               if (users) {
                    if (bcrypt.compareSync(req.body.password, users.password)) {
                         const token = jwt.sign({ users: users._id }, req.app.get('secretKey'), { expiresIn: '1h' })
                         res.json({ token: token })
                    } else {
                         res.json({ mensaje: "Wrong username or password!" })
                    }
               } else {
                    res.json({ mensaje: "Wrong username or password!" })
               }

          } catch (e) {
               next(e)
          }


     }

}