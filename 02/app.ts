function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number) {
  console.log(`Result ${num}`);
}

function addAndHandle(
  number1: number,
  number2: number,
  cb: (number: number) => void
) {
  const result = number1 + number2;
  cb(result);
}

printResult(add(5, 12));

let combineValues: (number1: number, number2: number) => number;

combineValues = add;

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
  console.log(result);
});
