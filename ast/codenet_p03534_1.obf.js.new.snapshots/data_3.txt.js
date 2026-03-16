(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("143788mLXDmf") / 1 + -parseInt("626ptBvwz") / 2 * (parseInt("177SVEuIK") / 3) + -parseInt("9420yUkMXs") / 4 + -parseInt("324695shrSok") / 5 * (parseInt("18NqDAgo") / 6) + parseInt("918764PxfkJq") / 7 + -parseInt("18400VcXawb") / 8 * (-parseInt("549eQyiel") / 9) + -parseInt("994180dBtgGb") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 100283);
function __DECODE_0__(HhVCuG, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 147;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(HhVCuG, key);
}
function __STRING_ARRAY__() {
  var _0x2d60c2 = ["918764PxfkJq", "626ptBvwz", "max", "324695shrSok", "549eQyiel", "18400VcXawb", "994180dBtgGb", "143788mLXDmf", "log", "readFileSync", "177SVEuIK", "/dev/stdin", "18NqDAgo", "YES", "min", "9420yUkMXs", "utf8", "length"];
  __STRING_ARRAY__ = function () {
    return _0x2d60c2;
  };
  return __STRING_ARRAY__();
}
function Main(s) {
  s = s.trim();
  var a = 0;
  var b = 0;
  var c = 0;
  var ans = "YES";
  for (var i = 0; i < s["length"]; i++) {
    if (s[i] === "a") {
      a++;
    } else if (s[i] === "b") {
      b++;
    } else {
      c++;
    }
  }
  if (Math["max"](a, b, c) - Math["min"](a, b, c) > 1) {
    ans = "NO";
  }
  console["log"](ans);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
