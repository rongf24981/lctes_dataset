(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("122637fRUzJV") / 1 * (parseInt("8PDwNPC") / 2) + -parseInt("835152yHrqLa") / 3 + -parseInt("8DWTyxT") / 4 * (parseInt("345560ffLetN") / 5) + -parseInt("2782110IHkNpo") / 6 * (parseInt("7wyEZQJ") / 7) + -parseInt("1967048zNHVfF") / 8 * (-parseInt("18TDEzkt") / 9) + -parseInt("4036250jVFmcM") / 10 + parseInt("3420197LXFyLA") / 11 * (parseInt("60pKWmYp") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 271931);
function __DECODE_0__(oGPXSI, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 106;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(oGPXSI, key);
}
function Main(input) {
  input = input.split("\n");
  n = Number(input[0]["split"](" "));
  V = input[1]["split"](" ")["map"](Number);
  C = input[2]["split"](" ").map(Number);
  var Y = 0;
  for (var i = 0; i < n; i++) {
    y = V[i] - C[i];
    if (y >= 0) {
      Y = Y + y;
    }
  }
  console["log"](Y);
}
function __STRING_ARRAY__() {
  var _0x414040 = ["1967048zNHVfF", "log", "8PDwNPC", "18TDEzkt", "8DWTyxT", "122637fRUzJV", "/dev/stdin", "4036250jVFmcM", "345560ffLetN", "split", "2782110IHkNpo", "7wyEZQJ", "map", "3420197LXFyLA", "835152yHrqLa", "60pKWmYp"];
  __STRING_ARRAY__ = function () {
    return _0x414040;
  };
  return __STRING_ARRAY__();
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
