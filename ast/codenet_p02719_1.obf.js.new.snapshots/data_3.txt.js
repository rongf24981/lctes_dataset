function __DECODE_0__(bHEWEs, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 223;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(bHEWEs, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("193319fhKAbE") / 1 + parseInt("993682UlLaWX") / 2 + parseInt("519102VYmSrj") / 3 + -parseInt("79620IOnVUZ") / 4 * (parseInt("45GbZucm") / 5) + -parseInt("1122XlaoXs") / 6 * (-parseInt("24542zrxiTJ") / 7) + parseInt("968wIKKOX") / 8 * (-parseInt("44217fquXvM") / 9) + parseInt("121860cwZowO") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 370746);
function Main(input) {
  input = input["split"]("\n");
  tmp = input[0]["split"](" ");
  var N = Number(tmp[0]);
  var K = Number(tmp[1]);
  if (K === 1) {
    return console["log"](0);
  }
  var current = Math.abs(N - K);
  N = current;
  while (current >= N) {
    N = current;
    current = Math["abs"](N - K);
  }
  console["log"](current);
}
function __STRING_ARRAY__() {
  var _0x5c677b = ["44217fquXvM", "split", "193319fhKAbE", "utf8", "24542zrxiTJ", "log", "/dev/stdin", "abs", "121860cwZowO", "968wIKKOX", "1122XlaoXs", "519102VYmSrj", "readFileSync", "993682UlLaWX", "79620IOnVUZ", "45GbZucm"];
  __STRING_ARRAY__ = function () {
    return _0x5c677b;
  };
  return __STRING_ARRAY__();
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
