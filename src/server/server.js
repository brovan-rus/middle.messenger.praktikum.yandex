const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static('./dist'));

app.get('*', function (req, res) {
  res.sendFile('index.html', {root: './dist'})
})

app.listen(PORT, function () {
  console.log(`listening on port ${PORT}!`);
});
