function Main(input) {
  input = input["split"]("\n");
  T = input[0];
  var len = T["length"];
  var p = len % 2;
  q = Math["floor"](len / 2);
  cnt = 0;
  i = 0;
  for (i = 0; i < q; i++) {
    if (T["substr"](i, 1) == T.substr(len - 1 - i, 1)) {
      cnt = cnt + 0;
    } else {
      cnt++;
    }
  }
  console["log"](cnt);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
