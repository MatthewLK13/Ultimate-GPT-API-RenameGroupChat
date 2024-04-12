const mongoose = require('mongoose');

const chatGroupSchema = new mongoose.Schema({
  chatId: String,
  name: String,
  isGroup: Boolean,
  latestMessage: Number,
});

const ChatGroup = mongoose.model('ChatGroup', chatGroupSchema);

module.exports = ChatGroup;