function Main(input) {
  inputs = input["split"]("\n");
  const N = Number(inputs[0]);
  const arr = [];
  for (let i = 1; i <= N; i++) {
    if (i % 3 !== 0 && i % 5 !== 0) {
      arr["push"](i);
    }
  }
  const sum = arr["reduce"]((prev, current) => {
    return prev + current;
  });
  console["log"](sum);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
