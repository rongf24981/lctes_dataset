function Main(input) {
  var N = parseInt(input[0], 10);
  var A = input[1]["split"](" ");
  var total = 0;
  for (var i = 0; i < N; i++) {
    A[i] = parseInt(A[i], 10);
    total += A[i];
  }
  var result = 0;
  var mae = 0;
  var ato = 0;
  var target = 0;
  for (var i = 0; i < N; i++) {
    if (mae + A[i] < total / 2) {
      mae += A[i];
    } else if (mae + A[i] == total / 2) {
      console["log"]("%s", 0);
      return;
    } else {
      target = i;
      ato = total - mae - A[i];
      break;
    }
  }
  var diff = Math["abs"](ato - mae);
  var result = Math["abs"](A[i] - diff);
  console["log"]("%s", result);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8")["split"]("\n"));
