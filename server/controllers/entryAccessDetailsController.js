const EntryAccessDetails = require('../models').EntryAccessDetails;
module.exports = {
    create(req, res) {
        return EntryAccessDetails
          .create({
            name: req.body.name,
            message: req.body.message
          })
          .then(accessDetails => res.status(201).send(accessDetails))
          .catch(error => res.status(400).send(error));
      },
      list(req, res) {
              return EntryAccessDetails
                .findAll({
                    where:{},
                    order:[
                        ['createdAt','DESC']
                    ],
                })
                .then(accessDetails => res.status(200).send(accessDetails))
                .catch(error => res.status(400).send(error));
            },
      listSummary(req, res) {
              return EntryAccessDetails
                .findAll({
                    where:{},
                    order:[
                        ['createdAt','DESC']
                    ],
                })
                .then(accessDetails => {
                    var accessSummary = {
                        'authorizedEntries' : accessDetails.filter(x => x.message == 'Success').length,
                        'unauthorizedEntries' : accessDetails.filter(y => y.message == 'Failure').length,
                        'lastAuthorizedUser' : accessDetails.filter(x => x.message == 'Success')[0]['name']
                    }
                    res.status(200).send(accessSummary)
                })
                .catch(error => res.status(400).send(error));
            },
};