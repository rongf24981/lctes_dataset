function Main(input) {
  input = input.split(" ");
  const S = parseInt(input[0]);
  const W = parseInt(input[1]);
  const ret = S <= W ? "unsafe" : "safe";
  console["log"](ret);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
