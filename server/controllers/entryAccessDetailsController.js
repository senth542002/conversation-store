const EntryAccessDetails = require('../models').EntryAccessDetails;
const entryAccessDetailsController = require('../controllers').entryAccessDetailsController;
module.exports = {
    create(req, res) {

    const data = entryAccessDetailsController.list(req, res);
    console.log("console:"+data)
    if(data[0].name == req.body.name) {
        return
    }
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
};