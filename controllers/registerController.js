
const userModels = require('../models/userModels')


module.exports = {

     registro: async function (req, res, next) {
          console.log(req.body)
          try {

               let document = await userModels.create({
                    name: req.body.name,
                    user: req.body.user,
                    password: req.body.password
               })

               res.status(201).json(document)
          } catch (e) {
               console.log(e)
               next(e)
          }


     }

}