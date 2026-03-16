function Main(input) {
  var result;
  const X = parseInt(input[0]);
  const A = parseInt(input[1]);
  result = X < A ? 0 : 10;
  console["log"](result);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8")["trim"]()["split"](/\n|\s/));
