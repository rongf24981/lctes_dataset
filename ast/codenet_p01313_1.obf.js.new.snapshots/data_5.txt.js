process["stdin"]["resume"]();
process.stdin.setEncoding("utf8");
var n = -1;
function i(d) {
  return Math["pow"](10, ~~d);
}
var l;
var p;
var c;
var r;
var o;
var a;
var b;
var am;
var bm;
var d;
process.stdin.on("data", function (ip) {
  p = ip.split("\n");
  l = ~~p[0];
  for (c = 0; c < l; ++c) {
    r = [];
    o = p[c + 1]["split"](" ");
    d = 0;
    a = i(o[0] - 1);
    am = i(o[0]) - 1;
    for (; a < am; ++a) {
      b = i(o[1] - 1);
      bm = i(o[1]) - 1;
      for (; b < bm; ++b) {
        if ((b * b + b - a * a + a) / 2 == "" + a + b) {
          console["log"](a + " " + b);
          ++d;
        }
      }
    }
    if (!d) {
      console["log"]("No cats.");
    }
  }
});
