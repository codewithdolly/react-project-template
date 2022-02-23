let value = () => {
  return [10, 20, 30];
};

let [a, b, c] = value();

console.log((a, b, (c = value())));

//2

let [x, y, z] = [30, 40, 50];

function TotalValue(...args) {
  return [x, ...args];
}

console.log(TotalValue(a, b));
