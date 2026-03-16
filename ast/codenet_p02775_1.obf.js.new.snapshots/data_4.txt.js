function Main(input) {
  input = input["split"]("\n");
  if (input[input.length - 1] === "") {
    input.pop();
  }
  const N = input[0];
  var up = 1;
  var down = 0;
  var nup;
  var ndown;
  for (var i = 0; i < N["length"]; i++) {
    nup = Math["min"](9 - N[i] + up, 1 + down + (N[i] - 0));
    ndown = Math.min(10 - N[i] + up, down + (N[i] - 0));
    up = nup;
    down = ndown;
  }
  console["log"](down);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
