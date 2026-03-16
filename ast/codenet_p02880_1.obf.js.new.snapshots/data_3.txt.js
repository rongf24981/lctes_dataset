function __DECODE_0__(EDJbvO, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 118;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(EDJbvO, key);
}
function __STRING_ARRAY__() {
  const _0x356c22 = ["/dev/stdin", "2340443kCCwHk", "8pUJGQR", "208770SAQRjr", "log", "split", "307269pOxLyn", "6KMfVjC", "1257716LHaXwN", "2707hBeFhN", "535758yikvgX", "2787920psTLNd", "80ksKiGy", "utf8"];
  __STRING_ARRAY__ = function () {
    return _0x356c22;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("2707hBeFhN") / 1 * (parseInt("8pUJGQR") / 2) + parseInt("535758yikvgX") / 3 + parseInt("1257716LHaXwN") / 4 + parseInt("208770SAQRjr") / 5 + -parseInt("6KMfVjC") / 6 * (-parseInt("2340443kCCwHk") / 7) + parseInt("80ksKiGy") / 8 * (-parseInt("307269pOxLyn") / 9) + -parseInt("2787920psTLNd") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 259744);
function Main(input) {
  input = input["split"](" ");
  const num = parseInt(input[0], 10);
  if (num > 81) {
    console["log"]("No");
    return;
  }
  if (num % 2 == 0 && num / 2 < 10 || num % 3 == 0 && num / 3 < 10 || num % 4 == 0 && num / 4 < 10 || num % 5 == 0 && num / 5 < 10 || num % 6 == 0 && num / 6 < 10 || num % 7 == 0 && num / 7 < 10 || num % 8 == 0 && num / 8 < 10 || num % 9 == 0 && num / 9 < 10) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
