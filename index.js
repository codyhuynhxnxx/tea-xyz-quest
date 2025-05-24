const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();

app.use(bodyParser.json());

app.post('/run', (req, res) => {
  const { userId, distance, duration, locationHash } = req.body;

  // Giả lập ghi dữ liệu lên peaq
  console.log(`User ${userId} ran ${distance} km in ${duration} minutes.`);

  // TODO: Ghi dữ liệu lên blockchain qua peaq SDK (sẽ bổ sung sau)

  res.json({
    message: 'Run data received!',
    reward: distance * 1, // 1 token mỗi km
  });
});

app.listen(3000, () => console.log('Server running on port 3000'));
