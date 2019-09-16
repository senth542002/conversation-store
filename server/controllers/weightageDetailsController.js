 const WeightageDetails = require('../models').WeightageDetails;

 module.exports = {
    create(req, res) {
        return WeightageDetails
          .create({
            weightage: req.body.weightage,
          })
          .then(weight => res.status(201).send(weight))
          .catch(error => res.status(400).send(error));
      },

      list(req, res) {
        return WeightageDetails
          .findAll()
          .then(weight => res.status(200).send(weight))
          .catch(error => res.status(400).send(error));
      },
 };