function __DECODE_0__(qqZzYb, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 190;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(qqZzYb, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("30xmZBzF") / 1 * (-parseInt("40842JnjbyX") / 2) + parseInt("265458usjgrc") / 3 * (parseInt("12NCdBxD") / 4) + -parseInt("1944025catFkT") / 5 + -parseInt("3657870cOebUc") / 6 + -parseInt("2796332pYCykp") / 7 + parseInt("2213912ApSWNy") / 8 * (-parseInt("9VIRBAt") / 9) + -parseInt("23313670pPZNLF") / 10 * (-parseInt("11MvLHNg") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 309530);
function Main(input) {
  input = input.split("\n");
  var N = parseInt(input[0], 10);
  if (parseInt(N / 10) === 0) {
    console["log"]("Yes");
    return;
  }
  var Sum = 0;
  var Mod = N;
  for (var i = 100000000; i >= 10; i = i / 10) {
    Sum += parseInt(Mod / i);
    Mod = Mod % i;
  }
  Sum += Mod;
  if (N % Sum === 0) {
    console.log("Yes");
  } else {
    console["log"]("No");
  }
}
function __STRING_ARRAY__() {
  var _0x3b626c = ["1944025catFkT", "9VIRBAt", "Yes", "log", "12NCdBxD", "/dev/stdin", "readFileSync", "2213912ApSWNy", "40842JnjbyX", "30xmZBzF", "2796332pYCykp", "265458usjgrc", "3657870cOebUc", "11MvLHNg", "23313670pPZNLF"];
  __STRING_ARRAY__ = function () {
    return _0x3b626c;
  };
  return __STRING_ARRAY__();
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
