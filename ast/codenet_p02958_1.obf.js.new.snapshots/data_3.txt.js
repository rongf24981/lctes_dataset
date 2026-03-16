(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("899697dQwMDQ") / 1 + -parseInt("1644466PBkUed") / 2 * (parseInt("3MzxKdo") / 3) + parseInt("758988ZTHOiP") / 4 * (parseInt("25IcapoA") / 5) + -parseInt("946218wiDVmw") / 6 + parseInt("5520361yoxNfO") / 7 + -parseInt("10784oMvXav") / 8 * (parseInt("4131TbmxVF") / 9) + parseInt("59560FYvMyP") / 10 * (parseInt("2310LsGYfe") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 489753);
function __DECODE_0__(uHznMI, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 405;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(uHznMI, key);
}
function __STRING_ARRAY__() {
  var _0x5e57dd = ["readline", "map", "10784oMvXav", "stdin", "946218wiDVmw", "push", "3MzxKdo", "line", "utf8", "YES", "4131TbmxVF", "close", "899697dQwMDQ", "sort", "758988ZTHOiP", "59560FYvMyP", "filter", "setEncoding", "reduce", "5520361yoxNfO", "split", "stdout", "25IcapoA", "2310LsGYfe", "1644466PBkUed", "resume"];
  __STRING_ARRAY__ = function () {
    return _0x5e57dd;
  };
  return __STRING_ARRAY__();
}
process["stdin"]["resume"]();
process["stdin"]["setEncoding"]("utf8");
var lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process["stdout"]
});
reader.on("line", line => {
  lines["push"](line);
});
reader.on("close", () => {
  const a = lines[1]["split"](" ").map(v => v - 0);
  const b = lines[1]["split"](" ")["map"](v => v - 0)["sort"]((a, b) => a - b);
  let ans = a["filter"]((v, i) => v != b[i]).length;
  console.log(ans <= 2 ? "YES" : "NO");
});
min = (...a) => {
  return a["reduce"]((a, b) => a < b ? a : b, a[0]);
};
