const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from your main directory (or "public" if you have one)
app.use(express.static(path.join(__dirname, '/')));

// Fallback for single-page apps (optional)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'portfolio.html')); // or index.html
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
