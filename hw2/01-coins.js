/** Exercise 01 - Coins **/

// Write a program that takes up any dollar amount (up to $100), and converts
// it to the numbers coins needed. The coins we will be using are: dollars ($1),
// quarters ($0.25), dimes ($0.10), nickels ($0.05), and pennies ($0.01)

// Example: $4.62 should return 4 dollars, 2 quarters, 1 dime, and 2 pennies.

// There are some sample test cases to ensure your program works as expected.
// Add additional test (including edge cases) cases to your file.

const calculateChange = function dollarsToCoins(amount) {
  if (amount > 100) {
    return 'Error: the number is too large';
  }
  // checks if only dollars were provided
  if (amount % 1 === 0) {
    if (amount > 0) {
      return `${amount} dollars`;
    }
    if (amount <= 0) {
      return 'Cannot calculate change with invalid amount';
    }
  }

  // vars for change
  const change = [];
  const cents = amount % 1;
  let dollars;
  let quarters;
  let dimes;
  let nickels;
  let pennies;

  // calculates dollars and adds it to change array as a string if > 0
  dollars = amount - cents;
  if (dollars > 0) {
    change.push(`${dollars} dollars`);
  }

  quarters = Math.floor(cents / 0.25);
  if (quarters > 0) {
    change.push(`${quarters} quarters`);
  }

  // calculates dimes and adds it to change array as a string if > 0
  dimes = Math.floor((cents - quarters * 0.25) / 0.1);
  if (dimes > 0) {
    change.push(`${dimes} dimes`);
  }

  nickels = Math.floor((cents - (quarters * 0.25 + dimes * 0.1)) / 0.05);
  if (nickels > 0) {
    change.push(`${nickels} nickels`);
  }

  // Math.round rounds up to get exact penny change
  pennies = Math.round(
    (cents - (quarters * 0.25 + dimes * 0.1 + nickels * 0.05)) / 0.01,
  );
  if (pennies > 0) {
    change.push(`${pennies} pennies`);
  }

  // iterates over each element in change array
  change.forEach((amt, index) => {
    // if element is 1 change to correct noun (pennies -> penny)
    if (amt.startsWith('1 ')) {
      if (!amt.includes('pennies')) {
        change[index] = change[index].substring(0, change[index].length - 1);
      } else {
        change[index] = `${pennies} penny`;
      }
    }
  });

  return change.join(', ');
};

// Sample test cases
console.log(calculateChange(4.62));
// $4.62 ==> 4 dollars, 2 quarters, 1 dime, 2 pennies
console.log(calculateChange(0.16));
// $0.16 ==> 1 dime, 1 nickel, 1 penny
console.log(calculateChange(150.11));
// $150.11 ==> Error: the number is too large

// Additional test cases
// Dollars with no change
// $5 ==> 5 dollars
console.log(calculateChange(5));
// Invalid amount
// $0 ==> Cannot calculate change with invalid amount
console.log(calculateChange(0));
// Amount to make sure all elements can be displayed correct if they exist
// $1.41 => 1 dollar, 1 quarter, 1 dime, 1 nickel, 1 penny
console.log(calculateChange(1.41));

