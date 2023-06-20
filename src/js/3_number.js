var num = document.getElementById("number");

function isPrime(number) {
  if (number < 2) {
    return false;
  }

  let i = 2;
  do {
    if (number % i === 0) {
      return false;
    }
    i++;
  } while (i <= Math.sqrt(number));

  return true;
}

console.log(isPrime(7));
console.log(isPrime(9));
console.log(isPrime(11));
console.log(isPrime(13));

num.innerHTML = isPrime(7);
