 const ProductDetails = require('../models').ProductUrlDetails;

 module.exports = {
    create(req, res) {
        return ProductDetails
          .create({
            description: req.body.description,
            url: req.body.url,
          })
          .then(product => res.status(201).send(product))
          .catch(error => res.status(400).send(error));
      },

      update(req, res) {
        return ProductDetails
          .update({
            description: req.body.description,
            url: req.body.url,
          },
          {where: {id : req.params.id}})
          .then(product => res.status(201).send(product))
          .catch(error => res.status(400).send(error));
      },
      list(req, res) {
        return ProductDetails
          .findAll()
          .then(product => res.status(200).send(product))
          .catch(error => res.status(400).send(error));
      },
      deleteAll(req, res) {
        return ProductDetails
          .destroy({where: {}})
          .then(product => res.status(200).send(product))
          .catch(error => res.status(400).send(error));
      },
 };