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
  // Write fizzBuzz here once fizz is finished.
};

export { fizz };
