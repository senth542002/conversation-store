const conversationDetailsController = require('../controllers').conversationDetails;
const chatbotDetailsController = require('../controllers').chatBotController;
const weightageDetailsController = require('../controllers').weightageDetailsController;
const productDetailsController = require('../controllers').productDetailsController;
const notificationDetailsController = require('../controllers').notificationDetailsController;
const entryAccessDetailsController = require('../controllers').entryAccessDetailsController;

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
    const result = entryAccessDetailsController.list(req, res);
    console.log("console:"+result.data)
            });
  app.get('/api/entryAccess', entryAccessDetailsController.list);
};