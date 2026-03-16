function Main(input) {
  input = input["split"](" ");
  var valN = input[0];
  var valK = input[1];
  if (valN < 3) {
    console["log"]("0");
    return;
  }
  var count = 0;
  for (var i = 0; i + 2 < valN; i++) {
    for (var j = 0; j < 5; j++) {
      if ((i * 63 + j * 9 + 81) % 11 == valK) {
        count++;
      }
    }
  }
  console["log"](count);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
