(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1043651kAxyjs") / 1 + parseInt("253444VBTjbc") / 2 + parseInt("549756IhMWGP") / 3 + -parseInt("4ngrYMd") / 4 * (parseInt("333565aalzCU") / 5) + parseInt("440604EHwRSP") / 6 * (-parseInt("21Mqitim") / 7) + -parseInt("24pjbzvX") / 8 * (-parseInt("1505583mJdrJz") / 9) + parseInt("10651650eXYleP") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 546334);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8").trim();
var lines = input["split"]("\n");
var inning = +lines.shift();
function __STRING_ARRAY__() {
  var _0x5e0a37 = ["440604EHwRSP", "HOMERUN", "utf8", "24pjbzvX", "4ngrYMd", "549756IhMWGP", "333565aalzCU", "/dev/stdin", "21Mqitim", "10651650eXYleP", "readFileSync", "1043651kAxyjs", "split", "1505583mJdrJz", "253444VBTjbc"];
  __STRING_ARRAY__ = function () {
    return _0x5e0a37;
  };
  return __STRING_ARRAY__();
}
var out = 0;
var score = 0;
var runner = 0;
var line;
function __DECODE_0__(anoAfK, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 169;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(anoAfK, key);
}
while (line = lines.shift()) {
  if (line == "HIT") {
    runner++;
    if (runner > 3) {
      score++;
      runner--;
    }
  } else if (line == "HOMERUN") {
    score += runner + 1;
    runner = 0;
  } else {
    out++;
    if (out == 3) {
      console.log(score);
      out = 0;
      score = 0;
      runner = 0;
      continue;
    }
  }
}
