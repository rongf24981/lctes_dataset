function f(use, x, n, acc) {
  if (x > n) {
    return acc;
  }
  if (use === 7) {
    acc += 1;
  }
  acc += f(use | 1, x * 10 + 3, n, 0);
  acc += f(use | 2, x * 10 + 5, n, 0);
  acc += f(use | 4, x * 10 + 7, n, 0);
  return acc;
}
function Main(input) {
  var n = parseInt(input);
  console["log"](f(0, 0, n, 0));
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
