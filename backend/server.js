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
    <div style="text-align:center; margin-top:20px;">
      <a href="/about" style="font-size:16px; text-decoration:none; color:blue;">👉 Go to About Page</a><br/>
      <a href="/contact" style="font-size:16px; text-decoration:none; color:green;">👉 Go to Contact Page</a><br/>
      <a href="/greet/Student" style="font-size:16px; text-decoration:none; color:orange;">👉 Try Dynamic Greeting</a>
    </div>
  `);
});

// About Route
app.get('/about', (req, res) => {
  res.send(`
    <h2 style="color: darkgreen; text-align: center; margin-top: 40px;">
      📖 About AIBUDDY
    </h2>
    <p style="text-align: center; font-size: 18px;">
      This server demonstrates <b>Prompting Techniques</b> 
      like Zero-Shot, One-Shot, Multi-Shot, and Dynamic Prompting.
    </p>
    <div style="text-align:center; margin-top:20px;">
      <a href="/" style="font-size:16px; text-decoration:none; color:purple;">🔙 Back to Home</a>
    </div>
  `);
});

// Contact Route
app.get('/contact', (req, res) => {
  res.send(`
    <h2 style="color: navy; text-align: center; margin-top: 40px;">
      📬 Contact Us
    </h2>
    <p style="text-align: center; font-size: 18px;">
      You can reach AIBUDDY team at: <b>aibuddy@example.com</b>
    </p>
    <div style="text-align:center; margin-top:20px;">
      <a href="/" style="font-size:16px; text-decoration:none; color:purple;">🔙 Back to Home</a>
    </div>
  `);
});

// ✅ Dynamic Greeting Route
app.get('/greet/:name', (req, res) => {
  const userName = req.params.name;
  res.send(`
    <h2 style="color: darkorange; text-align: center; margin-top: 50px;">
      🎉 Hello, ${userName}! Welcome to AIBUDDY 🚀
    </h2>
    <div style="text-align:center; margin-top:20px;">
      <a href="/" style="font-size:16px; text-decoration:none; color:purple;">🔙 Back to Home</a>
    </div>
  `);
});

// Start server
app.listen(3000, () => {
  console.log('✅ AIBUDDY Server is live at: http://localhost:3000');
  console.log('👉 About page: http://localhost:3000/about');
  console.log('👉 Contact page: http://localhost:3000/contact');
  console.log('👉 Dynamic greeting example: http://localhost:3000/greet/Akarshana');
});