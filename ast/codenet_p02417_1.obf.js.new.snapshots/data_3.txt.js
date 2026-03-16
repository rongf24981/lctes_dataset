(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("778293IyZgiX") / 1 + -parseInt("1066934akYEtE") / 2 + parseInt("137541vRLENe") / 3 + parseInt("8EJYRJa") / 4 * (parseInt("2483915fNpEUm") / 5) + -parseInt("3121140KAvVwL") / 6 * (-parseInt("14rxQAKt") / 7) + -parseInt("48MXpxHR") / 8 * (parseInt("1450539WLbJeR") / 9) + parseInt("9028470mWeHdv") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 703854);
var input = require("fs").readFileSync("/dev/stdin", "utf8");
input = input["trim"]();
input = input["toLowerCase"]();
var abc = "abcdefghijklmnopqrstuvwxyz"["split"]("");
function __DECODE_0__(MwZMWc, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 256;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(MwZMWc, key);
}
var obj = {};
for (var i = 0; i < abc.length; i++) {
  obj[abc[i]] = 0;
}
input = input["replace"](/[a-z]/g, function (str) {
  obj[str]++;
  return str;
});
function __STRING_ARRAY__() {
  var _0x2b8a2e = ["48MXpxHR", "3121140KAvVwL", "replace", "toLowerCase", "1450539WLbJeR", "778293IyZgiX", "137541vRLENe", "2483915fNpEUm", "8EJYRJa", "9028470mWeHdv", "abcdefghijklmnopqrstuvwxyz", "split", " : ", "1066934akYEtE", "trim", "forEach", "14rxQAKt", "/dev/stdin"];
  __STRING_ARRAY__ = function () {
    return _0x2b8a2e;
  };
  return __STRING_ARRAY__();
}
abc["forEach"](function (v, i) {
  console.log(v + " : " + obj[v]);
});
