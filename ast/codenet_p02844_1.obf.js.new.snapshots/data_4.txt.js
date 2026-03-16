function Main(input) {
  input = input["trim"]().split("\n");
  var N = parseInt(input[0]);
  var SasStr = input[1];
  var ans = 0;
  var x1;
  var x2;
  var x3;
  var xTmp;
  var x1i;
  var x2i;
  var x3i;
  var sTmp;
  for (var i = 1000; i < 2000; i++) {
    xTmp = String(i);
    x1 = xTmp["substr"](1, 1);
    x2 = xTmp.substr(2, 1);
    x3 = xTmp["substr"](3, 1);
    x1i = SasStr["indexOf"](x1);
    if (x1i !== -1) {
      sTmp = SasStr["substr"](x1i + 1);
      x2i = sTmp["indexOf"](x2);
      if (x2i !== -1) {
        sTmp = sTmp["substr"](x2i + 1);
        x3i = sTmp["indexOf"](x3);
        if (x3i !== -1) {
          ans++;
        }
      }
    }
  }
  console["log"](ans);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
