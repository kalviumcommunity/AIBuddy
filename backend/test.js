const dataset = require('./dataset.json');
const judge = require('./judgePrompt');
const { calc } = require('./server'); // uses exported calc

console.log("🧪 Running Evaluation Tests...\n");

let passCount = 0;
dataset.forEach((sample, idx) => {
  const { a, b, op } = sample.input;
  const expected = sample.expected;
  const actual = calc(a, b, op);
  const verdict = judge(expected, actual);
  const status = verdict.pass ? "✅ PASS" : "❌ FAIL";
  if (verdict.pass) passCount++;
  console.log(`Test ${idx + 1}: ${a} ${op} ${b}`);
  console.log(`  ➤ Expected: ${expected}, Got: ${actual}`);
  console.log(`  ➤ Verdict: ${status} (${verdict.reason})\n`);
});

console.log('Summary:', passCount + '/' + dataset.length, 'passed');