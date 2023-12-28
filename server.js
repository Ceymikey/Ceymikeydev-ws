const express = require('express');
const app = express();
const port = 3000;

// Attempt to set custom values for Networking TAB
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  next();
});

// Serve static files from the root directory
app.use(express.static(__dirname));

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
