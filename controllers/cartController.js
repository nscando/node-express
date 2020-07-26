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

     create: async function (req, res, next) {
          console.log(req.body)
          try {
               let product = new productsModel({
                    name: req.body.name,
                    sku: req.body.sku,
                    description: req.body.description,
                    price: req.body.price,
                    quantity: req.body.quantity,
                    imageUrl: req.body.imageUrl

               })
               let document = await product.save()
               res.json(document)
          } catch (e) {
               next(e)
          }

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