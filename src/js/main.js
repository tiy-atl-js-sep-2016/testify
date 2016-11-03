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

// loop from start to end and call fizz
// maybe console log the answer from fizz

function fizzBuzz (start, end) {
  var result = [];
  for (var i = start; i <= end; i++){
    var newResult = fizz(result.push(i));
    console.log(newResult);
  }
};
console.log(fizzBuzz(1, 30));

export { fizz };
