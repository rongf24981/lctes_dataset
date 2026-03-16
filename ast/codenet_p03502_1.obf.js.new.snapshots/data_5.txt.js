function Main(input) {
  input = input.split("\n");
  var N = parseInt(input[0], 10);
  if (parseInt(N / 10) === 0) {
    console["log"]("Yes");
    return;
  }
  var Sum = 0;
  var Mod = N;
  for (var i = 100000000; i >= 10; i = i / 10) {
    Sum += parseInt(Mod / i);
    Mod = Mod % i;
  }
  Sum += Mod;
  if (N % Sum === 0) {
    console.log("Yes");
  } else {
    console["log"]("No");
  }
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
