function Main(input) {
  input = input["split"]("\n");
  input[0] = Number(input[0]);
  input[1] = Number(input[1]);
  input[2] = Number(input[2]);
  console.log((input[0] + input[1]) * input[2] / 2);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
