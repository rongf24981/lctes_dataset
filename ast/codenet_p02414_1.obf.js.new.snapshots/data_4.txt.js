var n;
var m;
var l;
var a;
var b;
var bt;
process["stdin"]["setEncoding"]("ascii");
process["stdin"].on("data", function (chunk) {
  var line;
  var ary;
  line = chunk["toString"]()["split"](/\r?\n/);
  for (i in line) {
    ary = line[i]["split"](" ");
    if (ary["length"] !== 0) {
      line[i] = ary["map"](Number);
    }
  }
  n = line[0][0];
  m = line[0][1];
  l = line[0][2];
  a = line["slice"](1, n + 1);
  b = line["slice"](n + 1, n + m + 1);
});
process["stdin"].on("end", function () {
  var i;
  var j;
  var ci;
  make_b_transpose();
  for (i in a) {
    ci = [];
    for (j in bt) {
      ci["push"](inner_product(a[i], bt[j]));
    }
    console["log"](ci["join"](" "));
  }
});
function make_b_transpose() {
  var j;
  var k;
  var bj;
  bt = [];
  for (j = 0; j < l; j++) {
    bj = [];
    for (k = 0; k < m; k++) {
      bj.push(b[k][j]);
    }
    bt["push"](bj);
  }
}
function inner_product(a, b) {
  var res = 0;
  for (var i in a) {
    res += a[i] * b[i];
  }
  return res;
}
