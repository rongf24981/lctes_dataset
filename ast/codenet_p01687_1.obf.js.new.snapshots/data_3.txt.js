(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("4hOYFyN") / 1 * (-parseInt("144734Yulhss") / 2) + -parseInt("6WJGOyX") / 3 * (-parseInt("1826180jyduqs") / 4) + parseInt("1751105KgWOxn") / 5 + parseInt("3257292GqHlfC") / 6 * (parseInt("7GyEdgs") / 7) + parseInt("7865632KauscD") / 8 + parseInt("1377YCAdCO") / 9 * (-parseInt("69770UeQSEr") / 10) + -parseInt("15825700wPYepX") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 572684);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var s = input["trim"]();
for (var i = 0; i < s["length"] - 7; i++) {
  var arr = [s[i], s[i + 1], s[i + 2], s[i + 3], s[i + 4], s[i + 5], s[i + 6], s[i + 7]];
  if (arr["join"]("") == "AIZUNYAN") {
    i += 7;
    continue;
  }
  var str = arr.sort().join("");
  if (str == "AADINNUY") {
    s = s["slice"](0, i) + "AIZUNYAN" + s["slice"](i + 8, s["length"]);
    i += 7;
  }
}
function __DECODE_0__(Zvrvdi, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 157;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(Zvrvdi, key);
}
console.log(s);
function __STRING_ARRAY__() {
  var _0x459af4 = ["join", "144734Yulhss", "1377YCAdCO", "1751105KgWOxn", "69770UeQSEr", "15825700wPYepX", "3257292GqHlfC", "AIZUNYAN", "trim", "4hOYFyN", "length", "/dev/stdin", "slice", "6WJGOyX", "7865632KauscD", "7GyEdgs", "readFileSync", "1826180jyduqs"];
  __STRING_ARRAY__ = function () {
    return _0x459af4;
  };
  return __STRING_ARRAY__();
}
