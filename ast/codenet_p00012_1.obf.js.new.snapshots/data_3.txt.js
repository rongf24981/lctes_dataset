(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("126836dJMIqg") / 1 * (parseInt("6HWkCCN") / 2) + parseInt("1955661oYZsmg") / 3 + parseInt("881688SXXbbt") / 4 * (parseInt("5cPnFWU") / 5) + parseInt("6zeiKdg") / 6 * (parseInt("1297296lOZxHw") / 7) + parseInt("2660352wSwpCB") / 8 + -parseInt("781173ZcoWSs") / 9 * (parseInt("50JvLVOL") / 10) + -parseInt("2118589kJhJon") / 11 * (parseInt("12XnpmVe") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 383089);
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
function __DECODE_0__(icXYio, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 478;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(icXYio, key);
}
function __STRING_ARRAY__() {
  var _0x4116ee = ["5cPnFWU", "apply", "map", "126836dJMIqg", "2118589kJhJon", "resume", "1955661oYZsmg", "split", "50JvLVOL", "sqrt", "end", "6HWkCCN", "1297296lOZxHw", "12XnpmVe", "utf8", "trim", "stdin", "881688SXXbbt", "6zeiKdg", "setEncoding", "781173ZcoWSs", "2660352wSwpCB", "data"];
  __STRING_ARRAY__ = function () {
    return _0x4116ee;
  };
  return __STRING_ARRAY__();
}
process["stdin"].on("data", function (chunk) {
  input += chunk;
});
process["stdin"].on("end", function () {
  input = input["split"]("\n");
  main();
});
