const principal = 1000;
const rate = 0.1;
const time = 5;
const totalAmount = principal * (1 + rate) ** time;
console.log("Total Amount:", totalAmount);
// i was checking and realise the formula really should P ( 1+r) ^ t, not P(1+r)t << since interest is to the power of years...

// creating arrays

const investmentArray1 = [1000, 0.25, 5];
const investmentArray2 = [2000, 0.1, 10];
const investmentArray3 = [1000, 0.2, 10];

// creating the function

function calculateInvestment(...inputVariables) {
  const [P, r, t] = inputVariables;
  return P * (1 + r) ** t;
}

const newtotalAmount = calculateInvestment(principal, rate, time);
console.log("Total Amount:", newtotalAmount);

const investments = [
  [1000, 0.25, 5],
  [2000, 0.1, 10],
  [1000, 0.2, 10],
];

// Calculate future values using map function
const futureValues = investments.map((investment) =>
  calculateInvestment(...investment)
);

// Log futureValues to the console
console.log("Future Values:", futureValues);

const highestFutureValue = futureValues.reduce((maxValue, value) => {
  return Math.max(maxValue, value);
}, -Infinity);

console.log("Highest Future Value:", highestFutureValue);

// task 7.1

const thresholdAmount = 5000;
const allFutureValuesAboveThreshold = futureValues.every(
  (value) => value > thresholdAmount
);
console.log(
  allFutureValuesAboveThreshold
    ? "All investments have future values above $20000."
    : "Some investments have future values below $20000."
);
