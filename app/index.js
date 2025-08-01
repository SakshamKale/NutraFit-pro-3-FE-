const express = require('express');
const app = express();
const PORT = 3000;
app.get('/', (req, res) => {
  res.send('from saksham');  
});

app.listen(3000, () => {
  console.log('Server is running on port 3000 yooo');
});
