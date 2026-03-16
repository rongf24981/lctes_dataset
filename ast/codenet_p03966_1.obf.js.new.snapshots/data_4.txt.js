function Main(input) {
  TT = 0;
  AA = 0;
  input = input["split"]("\n");
  N = input[0];
  for (i = 1; i <= N; i++) {
    tmp = input[i].split(" ");
    T = tmp[0] * 1;
    A = tmp[1] * 1;
    if (TT <= T && AA <= A) {
      TT = T;
      AA = A;
    } else {
      ratioT = TT / T;
      ratioA = AA / A;
      ratio = Math["ceil"](Math["max"](ratioT, ratioA));
      TT = T * ratio;
      AA = A * ratio;
    }
  }
  console.log(TT + AA);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
