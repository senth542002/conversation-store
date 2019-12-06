const conversationDetailsController = require('../controllers').conversationDetails;
const chatbotDetailsController = require('../controllers').chatBotController;
const weightageDetailsController = require('../controllers').weightageDetailsController;
const productDetailsController = require('../controllers').productDetailsController;
const notificationDetailsController = require('../controllers').notificationDetailsController;
const entryAccessDetailsController = require('../controllers').entryAccessDetailsController;
var models  = require('../models');

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the ConversationDetails API!',
  }));

  app.post('/api/conversations', conversationDetailsController.create);
  app.get('/api/conversations', conversationDetailsController.list);
  app.post('/api/chatbot', chatbotDetailsController.create);

  app.post('/api/weightage',weightageDetailsController.create);
  app.put('/api/weightage/:id/:weightage', weightageDetailsController.update);
  app.get('/api/weightage/:id', weightageDetailsController.fetch);
  app.get('/api/weightage', weightageDetailsController.list);
  app.delete('/api/weightage', weightageDetailsController.deleteAll);

  app.post('/api/notification',notificationDetailsController.create);
  app.put('/api/notification/:id', notificationDetailsController.update);
  app.get('/api/notification', notificationDetailsController.list);
  app.delete('/api/notification', notificationDetailsController.deleteAll);

  app.post('/api/product',productDetailsController.create);
  app.put('/api/product/:id', productDetailsController.update);
  app.get('/api/product', productDetailsController.list);
  app.delete('/api/product', productDetailsController.deleteAll);

  app.post('/api/entryAccess', function(req, res){
    /*    const result = entryAccessDetailsController.list(req, res)
                        .then(data => data.json())
                        .then( x => {
                            console.log("console: "+CircularJSON.stringify(x))
                            console.log("console: "+JSON.stringify(x))
                        });*/
   /* models.EntryAccessDetails
                    .findAll({
                        where:{},
                        order:[
                            ['createdAt','DESC']
                        ],
                    })
                    .then(accessDetails => {
                     console.log("console: "+accessDetails[0]['name'])
                         if(req.body.name != accessDetails[0]['name']) {
                            return entryAccessDetailsController.create(req, res);
                         } else {
                            return res.status(400).send("Duplicate");
                         }
                    });*/
    return entryAccessDetailsController.create(req, res);
            });
  app.get('/api/entryAccess', entryAccessDetailsController.list);
  app.get('/api/entryAccessSummary', entryAccessDetailsController.listSummary);
};