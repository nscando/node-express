var transporter = require('../bin/email')
const jwt = require('jsonwebtoken')

//EN CONSTRUCCION
module.exports = {
     save: async function (req, res, next) {
          try {
               var data = await autenticationModel.create({
                    name: req.body.name, usuario: req.body
               })
               let info = await transporter.sendMail({
                    from: "Remitente",
                    to: "nicolas.scandizzo@gmail.com",
                    subject: "Enviado dde nodemailer",
                    text: "prueba nodemailer"
               });
               res.json({ status: "succes", message: "User agregado exitosamente", data: data })
          } catch (err) {
               console.log(err);
               next(err)
          }
     }
}