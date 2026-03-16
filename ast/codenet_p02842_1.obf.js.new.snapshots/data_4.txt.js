function Main(input) {
  var tax = 1.08;
  var invalid = ":(";
  var input = input["split"]("\n");
  var n = parseInt(input[0], 10);
  var x = Math.floor(n / tax);
  var reverse_n = Math["floor"](x * tax);
  if (n == reverse_n) {
    console["log"](x);
    return;
  }
  var x_u = x + 1;
  if (Math["floor"](x_u * tax) == n) {
    console["log"](x_u);
    return;
  }
  var x_u2 = x + 2;
  if (Math["floor"](x_u2 * tax) == n) {
    console["log"](x_u2);
    return;
  }
  var x_d = x - 1;
  if (Math["floor"](x_d * tax) == n) {
    console["log"](x_d);
    return;
  }
  var x_d = x - 2;
  if (Math["floor"](x_d * tax) == n) {
    console["log"](x_d);
    return;
  }
  console["log"](invalid);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
