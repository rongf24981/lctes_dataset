function __DECODE_0__(Mvxyge, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 371;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(Mvxyge, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("469333PnZWkK") / 1 * (parseInt("2McQMJJ") / 2) + -parseInt("1527maPRER") / 3 * (parseInt("6788unPKlP") / 4) + -parseInt("3835040kYVTIW") / 5 + parseInt("2326074FPfvkG") / 6 + -parseInt("1160005zFPLTO") / 7 + parseInt("4038192JOZLXx") / 8 + parseInt("17288289VYXFaU") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 547545);
function Main(input) {
  input = String(input);
  var len = input.length;
  var first = input.substring(0, 1);
  if (len < 4) {
    var mid = 1;
  } else {
    var mid = len - 2;
  }
  var last = input["substring"](len - 1, len);
  console["log"]("%s", first + String(mid) + last);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  var _0xcb4ce7 = ["substring", "1527maPRER", "2326074FPfvkG", "4038192JOZLXx", "6788unPKlP", "3835040kYVTIW", "469333PnZWkK", "1160005zFPLTO", "17288289VYXFaU", "readFileSync", "/dev/stdin", "2McQMJJ", "log"];
  __STRING_ARRAY__ = function () {
    return _0xcb4ce7;
  };
  return __STRING_ARRAY__();
}
