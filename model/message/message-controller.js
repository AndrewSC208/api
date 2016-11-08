const Controller = require('../../lib/controller');
const messageModel  = require('./message-facade');


class MessageController extends Controller {}

module.exports = new MessageController(messageModel);
