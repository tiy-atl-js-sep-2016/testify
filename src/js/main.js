function fizz (numbers) {
  if (numbers % 15 === 0) {
    return "fizzBuzz";
  }
  if (numbers % 5 === 0) {
    return "Buzz";
  }
  if (numbers % 3 === 0) {
    return "fizz";
  } else {
    return numbers;
  }
};

function fizzBuzz (start, end) {
  // loop from start to end and call fizz
  // maybe console log the answer from fizz
};

fizzBuzz(1, 15);

export { fizz };
