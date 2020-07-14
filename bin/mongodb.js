var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/appNode', {
     useNewUrlParser: true,
     useUnifiedTopology: true
}, function (error) {
     if (error) {
          throw error;
     } else {
          console.log('Conectado a MongoDB');
     }
});
module.exports = mongoose; 