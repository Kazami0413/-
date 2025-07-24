const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

const passwordMap = {
  'Sd54sfds56': 'Scumbag.html',
  'abcdef': 'welcome-b.html'
};

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/login', (req, res) => {
  const { password } = req.body;
  const page = passwordMap[password];

  if (page) {
    res.sendFile(path.join(__dirname, 'public', page));
  } else {
    res.send('<script>alert("密碼錯誤"); history.back();</script>');
  }
});

app.get(['/Scumbag', '/welcome-b'], (req, res) => {
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`伺服器啟動：http://localhost:${PORT}`);
});
