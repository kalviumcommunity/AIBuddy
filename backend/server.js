const express = require('express');
const app = express();

// Homepage Route
app.get('/', (req, res) => {
  res.send(`
    <h1 style="color: purple; text-align: center; margin-top: 50px;">
      👋 Welcome to AIBUDDY
    </h1>
    <p style="text-align: center; font-size: 18px;">
      Hello AIBUDDY 🚀 Your server is running successfully!
    </p>
  `);
});

// About Route
app.get('/about', (req, res) => {
  res.send('📖 This is a simple Express server built for One-Shot Prompting demo.');
});

// Start server
app.listen(3000, () => {
  console.log('✅ AIBUDDY Server is live at: http://localhost:3000');
  console.log('👉 Try opening http://localhost:3000/about too!');
});