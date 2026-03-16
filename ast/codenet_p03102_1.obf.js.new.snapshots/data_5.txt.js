function Main(input) {
  input = input["split"]("\n");
  tmp0 = input[0]["split"](" ");
  N = Number(tmp0[0]);
  M = Number(tmp0[1]);
  C = Number(tmp0[2]);
  B = input[1]["split"](" ");
  var ans = 0;
  for (var i = 0; i < N; i++) {
    A = input[2 + i].split(" ");
    var tmpSum = 0;
    for (var j = 0; j < M; j++) {
      tmpSum += Number(A[j]) * Number(B[j]);
    }
    if (tmpSum + C > 0) {
      ans++;
    }
  }
  console["log"](ans);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
