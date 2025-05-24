
const express = require('express');
const router = express.Router();
const { initApi } = require('../utils/blockchain');
const crypto = require('crypto');

// Temporary in-memory storage for posts
const posts = [];

router.post('/submitPost', async (req, res) => {
  const { content, address } = req.body;

  if (!content || !address) {
    return res.status(400).json({ error: 'Thiếu nội dung hoặc địa chỉ ví.' });
  }

  const timestamp = Date.now();
  const hash = crypto.createHash('sha256').update(content + timestamp).digest('hex');

  posts.push({ content, address, timestamp, hash });

  try {
    const api = await initApi();
    // Simulated write to blockchain

    res.json({ message: 'Bài viết đã được gửi thành công.', hash });
  } catch (error) {
    console.error('Lỗi khi gửi lên mạng peaq:', error);
    res.status(500).json({ error: 'Lỗi khi gửi lên mạng peaq.' });
  }
});

router.get('/feed', (req, res) => {
  res.json(posts);
});

module.exports = router;
