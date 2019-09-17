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

      update(req, res) {
      console.log('Weightage Info: '+req.body.weightage)
      console.log('Weightage ID: '+req.params.id)
        return WeightageDetails
          .update({weightage: req.body.weightage},
          {where: {id : req.params.id}})
          .then(weight => res.status(201).send(weight))
          .catch(error => res.status(400).send(error));
      },
      fetch(req, res) {
        return WeightageDetails
          .findByPk(req.params.id)
          .then(weight => res.status(200).send(weight))
          .catch(error => res.status(400).send(error));
      },
      list(req, res) {
        return WeightageDetails
          .findAll()
          .then(weight => res.status(200).send(weight))
          .catch(error => res.status(400).send(error));
      },
      deleteAll(req, res) {
        return WeightageDetails
          .destroy({where: {}})
          .then(weight => res.sendStatus(200).send(weight))
          .catch(error => res.status(400).send(error));
      },
 };