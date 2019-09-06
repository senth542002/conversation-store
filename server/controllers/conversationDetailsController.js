 const ConversationDetails = require('../models').ConversationDetails;

 module.exports = {
    create(req, res) {
        return ConversationDetails
          .create({
            title: req.body.title,
          })
          .then(conv => res.status(201).send(conv))
          .catch(error => res.status(400).send(error));
      },

      list(req, res) {
        return ConversationDetails
          .findAll()
          .then(conv => res.status(200).send(conv))
          .catch(error => res.status(400).send(error));
      },
 };