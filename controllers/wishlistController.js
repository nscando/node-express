module.exports = {
     getAll: function (req, res, next) {
          console.log(req.params.id);
          console.log(req.query);

          let wishlist = [
               {
                    id: 1,
                    name: 'Drumpad'
               },
               {
                    id: 2,
                    name: 'Roland Drums'
               },
          ]
          res.json(wishlist)
     },

     getById: function (req, res, next) {
          console.log(req.params.id);


          let wishlist = [
               {
                    id: 1,
                    name: 'Drumpad'
               },

          ]
          res.json(wishlist)
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