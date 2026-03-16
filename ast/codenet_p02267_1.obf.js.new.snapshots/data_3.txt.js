function __DECODE_0__(ILCqJw, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 290;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ILCqJw, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("2hrpLKd") / 1 * (-parseInt("753418gfUzSG") / 2) + parseInt("507297wYwRUt") / 3 + parseInt("2772UPLvZT") / 4 * (-parseInt("735yLsVSd") / 5) + parseInt("6BxqPrQ") / 6 * (-parseInt("2809184sJcfEi") / 7) + parseInt("6435224tFtZuq") / 8 + -parseInt("1431HKIVpH") / 9 * (parseInt("21030ZrnnYi") / 10) + -parseInt("297WmmDWA") / 11 * (parseInt("180168BnGDTy") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 483982);
function Main(input) {
  input = input["split"]("\n");
  var n = parseInt(input[0], 10);
  var q = parseInt(input[2], 10);
  input[1] = input[1]["split"](" ");
  input[3] = input[3]["split"](" ");
  var s = Array(n);
  var t = Array(q);
  for (var i = 0; i < n; i++) {
    s[i] = parseInt(input[1][i], 10);
  }
  for (var i = 0; i < q; i++) {
    t[i] = parseInt(input[3][i], 10);
  }
  var count = 0;
  for (var i = 0; i < q; i++) {
    var j;
    for (j = 0; j < n; j++) {
      if (s[j] == t[i]) {
        break;
      }
    }
    if (j < n) {
      count++;
    }
  }
  console["log"](count);
}
function __STRING_ARRAY__() {
  var _0x3dadf2 = ["readFileSync", "/dev/stdin", "6435224tFtZuq", "utf8", "180168BnGDTy", "1431HKIVpH", "21030ZrnnYi", "735yLsVSd", "753418gfUzSG", "507297wYwRUt", "2809184sJcfEi", "split", "2hrpLKd", "2772UPLvZT", "6BxqPrQ", "log", "297WmmDWA"];
  __STRING_ARRAY__ = function () {
    return _0x3dadf2;
  };
  return __STRING_ARRAY__();
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
