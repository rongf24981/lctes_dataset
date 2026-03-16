function __STRING_ARRAY__() {
  var _0x510cf2 = ["82odrnCy", "utf8", "177yKxUor", "split", "925072EYWafx", "match", "42954967JEXODT", "4165903iVAJZm", "1599714pLmEAl", "10HTBEce", "indexOf", "readFileSync", "15EAubAk", "log", "trim", "69836OKtObq", "/dev/stdin", "replace", "26548YUieca", "1600242HhMPvs"];
  __STRING_ARRAY__ = function () {
    return _0x510cf2;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("82odrnCy") / 1 * (-parseInt("26548YUieca") / 2) + parseInt("177yKxUor") / 3 * (-parseInt("69836OKtObq") / 4) + parseInt("15EAubAk") / 5 * (-parseInt("1600242HhMPvs") / 6) + -parseInt("4165903iVAJZm") / 7 + parseInt("925072EYWafx") / 8 + parseInt("1599714pLmEAl") / 9 + parseInt("10HTBEce") / 10 * (parseInt("42954967JEXODT") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 684578);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var strA = input["trim"]();
function __DECODE_0__(EcuKBy, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 287;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(EcuKBy, key);
}
var abc = "abcdefghijklmnopqrstuvwxyz"["split"]("");
for (var i = 0; i < 26; i++) {
  var strB = strA["replace"](/[a-z]/g, function (s) {
    return abc[(abc["indexOf"](s) + i) % 26];
  });
  if (strB["match"](/the|this|that/)) {
    break;
  }
}
console["log"](strB);
