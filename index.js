
const express = require('express');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/posts');

const app = express();
app.use(bodyParser.json());

app.use('/api', postRoutes);

app.listen(3000, () => {
  console.log('Server đang chạy trên cổng 3000');
});
