const productsModel = require("../models/productsModels")


module.exports = {

     getAll: async function (req, res, next) {

          console.log(req.query)
          try {
               let products = await productsModel.find({})

               res.json(products)
          } catch (e) {
               next(e)
          }


     },

     getById: async function (req, res, next) {
          console.log(req.params.id);

          try {
               let products = await productsModel.findById(req.params.id)

               res.json(products)
          } catch (e) {
               next(e)
          }

     },

     create: async function (req, res, next) {
          console.log(req.body)
          try {
               let product = new productsModel({
                    name: req.body.name,
                    sku: req.body.sku,
                    description: req.body.description,
                    price: req.body.price,
                    quantity: req.body.quantity
               })
               let document = await product.save()
               res.json(document)
          } catch (e) {
               next(e)
          }

     },


     delete: async function (req, res, next) {

          try {
               let product = await productsModel.update({ _id: req.params.id }, req.body, { multi: false })
               res.json(product)
          } catch (e) {
               next(e)
          }

     },

     update: async function (req, res, next) {
          try {
               let product = await productsModel.update({ _id: req.params.id }, req.body, { multi: false })
               res.json(product)
          } catch (e) {
               next(e)
          }
     },
}