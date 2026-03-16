(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("138739YWhoYU") / 1 + -parseInt("160HOywrz") / 2 * (parseInt("20400QigBHK") / 3) + parseInt("4aAwugC") / 4 * (parseInt("545395GtZwtV") / 5) + -parseInt("406380RghXQe") / 6 + parseInt("2677535AgmPPt") / 7 + -parseInt("1399160UppVjQ") / 8 + parseInt("9608319QdqQmO") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 633811);
function __STRING_ARRAY__() {
  var _0x272491 = ["9608319QdqQmO", "getMonth", "20400QigBHK", "2019/", "138739YWhoYU", "readFileSync", "406380RghXQe", "split", "utf8", "2677535AgmPPt", "545395GtZwtV", "1399160UppVjQ", "4aAwugC", "160HOywrz", "log"];
  __STRING_ARRAY__ = function () {
    return _0x272491;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  var input = input["split"]("\n");
  var i1 = input[0]["split"](" ");
  var i2 = input[1]["split"](" ");
  var d1 = new Date("2019/" + i1[0] + "/" + i1[1]);
  var d2 = new Date("2019/" + i2[0] + "/" + i2[1]);
  if (d1["getMonth"]() == d2["getMonth"]()) {
    console["log"](0);
  } else {
    console.log(1);
  }
}
function __DECODE_0__(eNQalb, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 352;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(eNQalb, key);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
