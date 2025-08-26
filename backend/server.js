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
      <a href="/greet/Student" style="font-size:16px; text-decoration:none; color:orange;">👉 Try Dynamic Greeting</a><br/>
      <a href="/solve?a=12&b=8&op=add" style="font-size:16px; text-decoration:none; color:crimson;">🧠 Try Chain-of-Thought Demo</a>
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
      like Zero-Shot, One-Shot, Multi-Shot, Dynamic Prompting, 
      and <b>Chain-of-Thought (brief steps)</b>.
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

// 🧠 Chain-of-Thought Style Demo (brief, numbered steps)
function calc(a, b, op) {
  switch (op) {
    case 'add': return a + b;
    case 'sub': return a - b;
    case 'mul': return a * b;
    case 'div': return b === 0 ? null : a / b;
    default: return null;
  }
}

app.get('/solve', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  const op = (req.query.op || 'add').toLowerCase();
  const symbolMap = { add: '+', sub: '-', mul: '×', div: '÷' };

  if (Number.isNaN(a) || Number.isNaN(b) || !symbolMap[op]) {
    return res.send(`
      <h2 style="text-align:center;">❗ Usage</h2>
      <p style="text-align:center;">
        /solve?a=12&b=8&op=add | sub | mul | div
      </p>
      <div style="text-align:center; margin-top:10px;">
        <a href="/solve?a=12&b=8&op=add">Try: add</a> •
        <a href="/solve?a=15&b=4&op=sub">sub</a> •
        <a href="/solve?a=7&b=6&op=mul">mul</a> •
        <a href="/solve?a=20&b=5&op=div">div</a>
      </div>
    `);
  }

  const result = calc(a, b, op);
  if (result === null) {
    return res.send(`
      <h2 style="text-align:center;">❗ Cannot divide by zero</h2>
      <div style="text-align:center; margin-top:10px;">
        <a href="/solve?a=20&b=5&op=div">Try valid division</a>
      </div>
    `);
  }

  const steps = [
    `1) Identify inputs: a = ${a}, b = ${b}, operation = ${op}`,
    `2) Apply operation: ${a} ${symbolMap[op]} ${b} = ${result}`,
    `3) Final Answer: ${result}`
  ];

  res.send(`
    <h2 style="color:#333; text-align:center; margin-top:40px;">🧠 Chain-of-Thought (Brief Steps)</h2>
    <pre style="max-width:620px; margin:10px auto; padding:12px; border:1px solid #ddd; border-radius:8px; font-size:16px;">${steps.join('\n')}</pre>
    <div style="text-align:center; margin-top:12px;">
      <strong>Final Answer:</strong> ${result}
    </div>
    <div style="text-align:center; margin-top:20px;">
      <a href="/" style="text-decoration:none; color:purple;">🔙 Back to Home</a>
    </div>
  `);
});

// Start server
app.listen(3000, () => {
  console.log('✅ AIBUDDY Server is live at: http://localhost:3000');
  console.log('👉 About page:   http://localhost:3000/about');
  console.log('👉 Contact page: http://localhost:3000/contact');
  console.log('👉 Dynamic greet: http://localhost:3000/greet/Akarshana');
  console.log('👉 CoT demo:     http://localhost:3000/solve?a=12&b=8&op=add');
});