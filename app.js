const express = require('express');
const path = require('path');

const app = express();
const port = 3000; // You can change the port if needed

// Serve static files (HTML, JS, CSS, models, etc.) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the main HTML file (home.html or index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/html/home.html')); // Adjust to point to your main HTML file
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
