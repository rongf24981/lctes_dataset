function area(x1, y1, x2, y2, x3, y3) {
  var ab = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
  var bc = Math["sqrt"]((x2 - x3) * (x2 - x3) + (y2 - y3) * (y2 - y3));
  var ca = Math.sqrt((x3 - x1) * (x3 - x1) + (y3 - y1) * (y3 - y1));
  var s = (ab + bc + ca) * 0.5;
  var S = Math.sqrt(s * (s - ab) * (s - bc) * (s - ca));
  return S;
}
function inTriangle(x1, y1, x2, y2, x3, y3, xp, yp) {
  var abc = area(x1, y1, x2, y2, x3, y3);
  var abp = area(x1, y1, x2, y2, xp, yp);
  var bcp = area(x2, y2, x3, y3, xp, yp);
  var cap = area(x3, y3, x1, y1, xp, yp);
  var sub = abc - (abp + bcp + cap);
  return Math.abs(sub) <= 0.01;
}
function main() {
  input.forEach(function (line) {
    if (line["trim"]() === "") {
      return;
    }
    console.log(inTriangle["apply"](null, line["split"](" ")["map"](parseFloat)) ? "YES" : "NO");
  });
}
var input = "";
process.stdin["resume"]();
process["stdin"]["setEncoding"]("utf8");
process["stdin"].on("data", function (chunk) {
  input += chunk;
});
process["stdin"].on("end", function () {
  input = input["split"]("\n");
  main();
});
