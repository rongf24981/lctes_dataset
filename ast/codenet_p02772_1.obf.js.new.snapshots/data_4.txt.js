function Main(input) {
  input = input["split"]("\n");
  const N = input["shift"]();
  const A = input["map"](v => parseInt(v));
  f = false;
  for (i = 0; i < A["length"]; i++) {
    if (A[i] % 2 == 0) {
      if (A[i] % 3 != 0 && A[i] % 5 != 0) {
        f = true;
      }
    }
  }
  if (f) {
    console["log"]("DENIED");
  } else {
    console["log"]("APPROVED");
  }
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
