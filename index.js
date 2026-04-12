const express = require('express');
const path = require('path');

const app = express();
const port = 3000; // You can change the port if needed

const reduxDist = path.join(__dirname, 'dist/redux');

// Legacy URLs when the app was mounted at /timeline/
app.use((req, res, next) => {
    if (req.method !== 'GET' && req.method !== 'HEAD') return next();
    if (!req.path.startsWith('/timeline')) return next();
    const suffix = req.path === '/timeline' ? '' : req.path.slice('/timeline'.length);
    res.redirect(301, '/redux' + (suffix || '/'));
});

// React app assets (JS/CSS). Do not use redirect:false here — it turns directory requests into 404s
// (and proxies that strip trailing slashes make /redux/ look like a bare directory → "Not Found").
app.use('/redux', express.static(reduxDist));

// HTML shell for client routes and for /redux vs /redux/ when static does not serve index
app.use((req, res, next) => {
    if (req.method !== 'GET' && req.method !== 'HEAD') return next();
    if (!req.path.startsWith('/redux')) return next();
    const sub = req.path.replace(/^\/redux\/?/, '');
    if (sub && /\.[a-z0-9]+$/i.test(sub.split('/').pop() || '')) return next();
    res.sendFile(path.join(reduxDist, 'index.html'));
});

// Serve static files (HTML, JS, CSS, models, etc.) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the main HTML file (home.html or index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/home.html')); // Adjust to point to your main HTML file
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
