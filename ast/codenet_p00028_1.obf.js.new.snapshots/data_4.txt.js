a = [];
b = 100;
while (b--) {
  c = a[b] = 0;
}
require("fs").readFileSync("/dev/stdin", "utf8")["split"]("\n").some(function (i) {
  if (+i) {
    a[+i]++;
    c = a[+i] > c ? a[+i] : c;
  }
});
a["some"](function (i, j) {
  if (i == c) {
    console["log"](j);
  }
});
