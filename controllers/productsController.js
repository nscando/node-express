module.exports = {
     getAll: function (req, res, next) {
          console.log(req.params.id);
          console.log(req.query);

          let products = [
               {
                    id: 1,
                    name: 'Drumpad 2'
               },
               {
                    id: 2,
                    name: 'Tama Drums'
               },
          ]
          res.json(products)
     },

     getById: function (req, res, next) {
          console.log(req.params.id);


          let products = [
               {
                    id: 1,
                    name: 'Drumpad'
               },

          ]
          res.json(products)
     },

     create: function (req, res, next) {
          console.log(req.body);
          console.log(req.params);

          res.send('postman CREATE works!')
     },

     delete: function (req, res, next) {

          console.log(req.params);

          res.send('postman DELETE works!')
     },

     update: function (req, res, next) {

          console.log(req.params);

          res.send('postman UPDATE works!')
     },
}