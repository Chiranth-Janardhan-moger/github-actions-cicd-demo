const test = require("node:test");
const assert = require("node:assert");
const { add, subtract, multiply, divide } = require("../src/calculator");

test("adds two numbers correctly", () => {
  assert.strictEqual(add(2, 3), 5);
  assert.strictEqual(add(-1, 1), 0);
});

test("subtracts two numbers correctly", () => {
  assert.strictEqual(subtract(5, 3), 2);
  assert.strictEqual(subtract(0, 4), -4);
});

test("multiplies two numbers correctly", () => {
  assert.strictEqual(multiply(4, 3), 12);
  assert.strictEqual(multiply(-2, 3), -6);
});

test("divides two numbers correctly", () => {
  assert.strictEqual(divide(10, 2), 5);
});

test("throws error when dividing by zero", () => {
  assert.throws(() => divide(10, 0), /Division by zero is not allowed/);
});
