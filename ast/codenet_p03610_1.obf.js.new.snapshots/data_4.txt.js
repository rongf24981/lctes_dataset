function Main(input) {
  input = input.split("\n");
  input = input[0];
  var ans = "";
  for (var i = 1; i <= input["length"]; i = i + 2) {
    ans += input[i - 1];
  }
  console["log"](ans);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
