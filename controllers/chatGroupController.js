const ChatGroup = require('../models/ChatGroup');

const renameChatGroup = async (req, res) => {
  const { id, name } = req.body;

  try {
    // Tìm và cập nhật tên nhóm chat
    const chatGroup = await ChatGroup.findOneAndUpdate(
      { chatId: id },
      { name: name },
      { new: true }
    );

    if (!chatGroup) {
      return res.status(404).json({ error: 'Chat group not found' });
    }

    // Chuẩn bị phản hồi
    const response = {
      chatId: chatGroup.chatId,
      name: chatGroup.name,
      isGroup: chatGroup.isGroup,
      latestMessage: chatGroup.latestMessage,
    };

    // Trả phản hồi
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { renameChatGroup };
