
const userModels = require('../models/userModels')


module.exports = {

     registro: async function (req, res, next) {

          try {
               let document = await userModels.create({
                    name: req.body.name,
                    user: req.body.user,
                    password: req.body.password
               })
               res.json(document)
          } catch (e) {
               next(e)
          }


     }

}