const express = require('express');
const router = express.Router();

const { renameChatGroup } = require('../controllers/chatGroupController');

router.post('/apis/users?search="name"', renameChatGroup);

module.exports = router;
