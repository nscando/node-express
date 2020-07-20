const nodemailer = require('nodemailer')

//EN CONSTRUCCION
let transporter = nodemailer.createTransport({
     host: 'smpt.ethereal.email',
     port: 587,
     secure: false,
     auth: {
          user: 'aurelio0@ethereal.email',
          pass: 'wQ6Barf82hxnhTY2Wz',
     }

})

module.exports = transporter;