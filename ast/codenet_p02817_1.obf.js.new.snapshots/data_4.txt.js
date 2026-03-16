function Main(input) {
  input = input["split"]("\n");
  st = input[0].split(" ");
  console["log"](st[1] + st[0]);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
