function __STRING_ARRAY__() {
  var _0x492368 = ["length", "readFileSync", "21468nsPPFK", "test", "log", "2287530JjIBiG", "22dubNoi", "1256FiIuiV", "11wufJwX", "utf8", "split", "/dev/stdin", "8288046HFQhii", "910wkNxzc", "2760hzzWvH", "1863KxWZeX", "2514900jVeKYg", "4537GLlDpb", "shift", "31566DScfMP", "32TvArBz"];
  __STRING_ARRAY__ = function () {
    return _0x492368;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("31566DScfMP") / 1 * (-parseInt("22dubNoi") / 2) + parseInt("1863KxWZeX") / 3 * (-parseInt("1256FiIuiV") / 4) + parseInt("910wkNxzc") / 5 * (parseInt("21468nsPPFK") / 6) + parseInt("2287530JjIBiG") / 7 * (parseInt("32TvArBz") / 8) + -parseInt("8288046HFQhii") / 9 + parseInt("2514900jVeKYg") / 10 * (parseInt("11wufJwX") / 11) + -parseInt("2760hzzWvH") / 12 * (parseInt("4537GLlDpb") / 13);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 666462);
input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __DECODE_0__(zMhFQI, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 128;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(zMhFQI, key);
}
lines = input["split"]("\n");
S = lines["shift"]();
max = 0;
cnt = 0;
for (i = 0; i < S["length"]; i++) {
  if (/[AGCT]/["test"](S[i])) {
    cnt++;
  } else {
    if (max < cnt) {
      max = cnt;
    }
    cnt = 0;
  }
}
console["log"](max);
