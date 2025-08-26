function judge(expected, actual) {
  if (expected === null && actual === null) {
    return { pass: true, reason: "Handled edge-case (division by zero) correctly" };
  }
  if (expected === actual) {
    return { pass: true, reason: "Correct result" };
  }
  return { pass: false, reason: `Expected ${expected}, but got ${actual}` };
}

module.exports = judge;