const express = require('express');
const chatGroupRouter = require('./routes/chatGroupRouter');

const app = express();
app.use(express.json());

// Kết nối router
app.use(chatGroupRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});