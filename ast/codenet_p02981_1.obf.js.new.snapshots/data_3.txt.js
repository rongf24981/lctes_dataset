function __DECODE_0__(eWSBbA, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 487;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(eWSBbA, key);
}
function __STRING_ARRAY__() {
  var _0x5a7b1a = ["751940cuLnqK", "1120481ADYiWH", "45kYmuQt", "2553352ITbofE", "readFileSync", "log", "339794agoQMs", "2aTeTfa", "540hZqDhY", "11RubEvI", "3072048zjSOqK", "422404vDGViy", "UTF-8", "227521ySuJJh", "78zBawgq", "parseInt", "split", "18sNdEgT"];
  __STRING_ARRAY__ = function () {
    return _0x5a7b1a;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1120481ADYiWH") / 1 * (parseInt("2aTeTfa") / 2) + -parseInt("3072048zjSOqK") / 3 + -parseInt("422404vDGViy") / 4 * (parseInt("45kYmuQt") / 5) + -parseInt("78zBawgq") / 6 * (parseInt("227521ySuJJh") / 7) + -parseInt("2553352ITbofE") / 8 * (-parseInt("18sNdEgT") / 9) + -parseInt("751940cuLnqK") / 10 * (-parseInt("11RubEvI") / 11) + -parseInt("540hZqDhY") / 12 * (-parseInt("339794agoQMs") / 13);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 613259);
var main = standardInput => {
  var lengthList = standardInput["split"](" ");
  var n = Number.parseInt(lengthList[0]);
  var a = Number["parseInt"](lengthList[1]);
  var b = Number["parseInt"](lengthList[2]);
  if (n * a >= b) {
    console["log"](b);
  } else {
    console["log"](n * a);
  }
};
main(require("fs")["readFileSync"]("/dev/stdin", "UTF-8"));
