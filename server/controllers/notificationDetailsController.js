 const NotificationDetails = require('../models').NotificationDetails;

 module.exports = {
    create(req, res) {
        return NotificationDetails
          .create({
            hasNotification: req.body.hasNotification,
            lowerLimit: req.body.lowerLimit,
            higherLimit: req.body.higherLimit,
          })
          .then(notification => res.status(201).send(notification))
          .catch(error => res.status(400).send(error));
      },

      update(req, res) {
        return NotificationDetails
          .update({
            hasNotification: req.body.hasNotification,
            lowerLimit: req.body.lowerLimit,
            higherLimit: req.body.mediumLimit,
          },
          {where: {id : req.params.id}})
          .then(notification => res.status(201).send(notification))
          .catch(error => res.status(400).send(error));
      },
      list(req, res) {
        return NotificationDetails
          .findAll()
          .then(notification => res.status(200).send(notification))
          .catch(error => res.status(400).send(error));
      },
      deleteAll(req, res) {
        return NotificationDetails
          .destroy({where: {}})
          .then(notification => res.status(200).send(notification))
          .catch(error => res.status(400).send(error));
      },
 };