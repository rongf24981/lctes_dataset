const Main = input => {
  ABN = input["split"](" ").map(item => parseInt(item));
  console["log"](F(ABN[0], ABN[1], ABN[2]));
};
const F = (A, B, N) => {
  max = 0;
  count = 0;
  count0 = 0;
  for (x = 0; x <= N; x++) {
    result = Math.floor(A * x / B) - A * Math["floor"](x / B);
    if (result == 0) {
      count0++;
    }
    if (count0 > 2) {
      break;
    }
    if (result > max) {
      max = result;
      count = x;
    }
  }
  return max;
};
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
