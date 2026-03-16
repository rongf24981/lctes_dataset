(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("304292AMSmta") / 1 + parseInt("20862dCWBVQ") / 2 * (-parseInt("15uDubmq") / 3) + parseInt("2022872lOoKVv") / 4 + -parseInt("4213230oRCRxB") / 5 + parseInt("7564578iAksbz") / 6 * (parseInt("7LARgXg") / 7) + -parseInt("192nDAHYB") / 8 * (parseInt("91071OZZkVu") / 9) + parseInt("3396590JiMLMS") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 664191);
function Main(input) {
  var line = input["split"]("\n");
  var tmp = line[0]["split"](" ");
  var maxint = Number(tmp[0]);
  var minrest = Number(tmp[1]);
  var ans = 0;
  for (var a = minrest || 1; a <= maxint; a++) {
    for (var b = minrest || 1; b <= maxint; b++) {
      if (a < b) {
        ans++;
      } else if (a % b >= minrest) {
        ans++;
      }
    }
  }
  console["log"](ans);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __DECODE_0__(VDhcYE, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 451;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(VDhcYE, key);
}
function __STRING_ARRAY__() {
  var _0x4e6d9b = ["15uDubmq", "4213230oRCRxB", "20862dCWBVQ", "3396590JiMLMS", "91071OZZkVu", "7564578iAksbz", "192nDAHYB", "utf8", "log", "304292AMSmta", "7LARgXg", "readFileSync", "split", "/dev/stdin", "2022872lOoKVv"];
  __STRING_ARRAY__ = function () {
    return _0x4e6d9b;
  };
  return __STRING_ARRAY__();
}
