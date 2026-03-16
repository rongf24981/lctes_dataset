function __STRING_ARRAY__() {
  var _0xdb6f86 = ["/dev/stdin", "22pnlpjN", "26230SiPplK", "1662248dlAYEW", "535560liYaSk", "35PpbSDe", "utf8", "2934ElNufK", "split", "651opqrTT", "63xQPUBS", "232112owfmyl", "192cKWIEk", "log", "971064nyiHAo", "11419752YNPFGP"];
  __STRING_ARRAY__ = function () {
    return _0xdb6f86;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("971064nyiHAo") / 1 + parseInt("1662248dlAYEW") / 2 + parseInt("651opqrTT") / 3 * (-parseInt("192cKWIEk") / 4) + -parseInt("35PpbSDe") / 5 * (parseInt("535560liYaSk") / 6) + -parseInt("63xQPUBS") / 7 * (-parseInt("232112owfmyl") / 8) + parseInt("2934ElNufK") / 9 * (-parseInt("26230SiPplK") / 10) + -parseInt("22pnlpjN") / 11 * (-parseInt("11419752YNPFGP") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 534144);
function Main(input) {
  var N = input.split(" ")[0];
  var K = input["split"](" ")[1];
  N = parseInt(N, 10);
  K = parseInt(K, 10);
  var jud = N % K === 0;
  if (jud) {
    console["log"](0);
  } else {
    console["log"](1);
  }
}
function __DECODE_0__(wfRBeW, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 373;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(wfRBeW, key);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
