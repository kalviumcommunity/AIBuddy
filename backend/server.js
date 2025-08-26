const express = require('express');
const app = express();

// Route
app.get('/', (req, res) => {
  res.send('Hello AIBUDDY');
});

// Start server
app.listen(3000, () => {
  console.log('✅ Server running on http://localhost:3000');
});