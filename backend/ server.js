const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Modern İnşaat Platformu Backend Çalışıyor!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Sunucu çalışıyor: http://localhost:${PORT}`);
});
