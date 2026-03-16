(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1678dvJClJ") / 1 * (parseInt("280bmvqDg") / 2) + -parseInt("3aZtPwF") / 3 * (parseInt("376188rHEzEm") / 4) + parseInt("2361555cpidMs") / 5 + -parseInt("1737900BcakXu") / 6 + parseInt("588063YZdtiG") / 7 * (parseInt("8MvdbGZ") / 8) + -parseInt("1444311ZIXuhq") / 9 + parseInt("94420clEvIx") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 256506);
function __STRING_ARRAY__() {
  var _0x1ba61e = ["readFileSync", "8MvdbGZ", "3aZtPwF", "376188rHEzEm", "/dev/stdin", "94420clEvIx", "280bmvqDg", "floor", "slice", "1444311ZIXuhq", "utf8", "log", "split", "2361555cpidMs", "map", "1737900BcakXu", "588063YZdtiG", "1678dvJClJ"];
  __STRING_ARRAY__ = function () {
    return _0x1ba61e;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  input = input["split"](" ")["map"](a => parseInt(a));
  var N = input[0];
  var M = input[1];
  var ans = 0;
  if (N === 1 && M === 1) {
    ans = 1;
  } else if (N === 1 || M === 1) {
    ans = N + M - 3;
  } else {
    ans = (N - 2) * (M - 2);
  }
  if (ans > 9000000000000000) {
    ans = Math.floor((N - 2) / 10000) * (M - 2);
    tmp = (N - 2) % 10000 * (M - 2);
    ans += Math["floor"](tmp / 10000);
    tmp = ("0000" + tmp % 10000)["slice"](-4);
    ans += tmp;
  }
  console["log"](ans);
}
function __DECODE_0__(GqyqEm, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 343;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(GqyqEm, key);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
