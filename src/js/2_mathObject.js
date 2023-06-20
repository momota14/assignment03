var total = document.getElementById("total");

function squareRootOfSumOfSquares(numbers) {
  let totalNum = 0;
  for (let i = 0; i < numbers.length; i++) {
    totalNum += Math.pow(numbers[i], 2);
  }
  //   console.log(totalNum);
  const squareRoot = Math.sqrt(totalNum);
  return squareRoot;
}

const numbers = [3, 4, 5, 6, 7]; // it should be an number array
console.log(squareRootOfSumOfSquares(numbers));
total.innerHTML = squareRootOfSumOfSquares(numbers);
