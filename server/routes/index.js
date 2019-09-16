const conversationDetailsController = require('../controllers').conversationDetails;
const chatbotDetailsController = require('../controllers').chatBotController;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the ConversationDetails API!',
  }));

  app.post('/api/conversations', conversationDetailsController.create);
  app.get('/api/conversations', conversationDetailsController.list);
  app.post('/api/chatbot', chatbotDetailsController.create);
};