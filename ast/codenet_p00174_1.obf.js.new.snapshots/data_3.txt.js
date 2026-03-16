function __DECODE_0__(QeuiYN, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 233;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(QeuiYN, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("281105aOWBZc") / 1 + -parseInt("1082422nYzRhK") / 2 + parseInt("1047tfAdAU") / 3 * (parseInt("7188fIEYIX") / 4) + -parseInt("2240385VCRssg") / 5 + parseInt("681822wNUfHi") / 6 * (-parseInt("35UfvEvh") / 7) + parseInt("2004920TzLyTr") / 8 * (parseInt("45wNCoiu") / 9) + parseInt("7749560vNIScZ") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 816606);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __STRING_ARRAY__() {
  var _0x12a32b = ["1047tfAdAU", "681822wNUfHi", "2240385VCRssg", "replace", "2004920TzLyTr", "45wNCoiu", "7188fIEYIX", "shift", "/dev/stdin", "split", "forEach", "281105aOWBZc", "readFileSync", "1082422nYzRhK", "35UfvEvh", "7749560vNIScZ"];
  __STRING_ARRAY__ = function () {
    return _0x12a32b;
  };
  return __STRING_ARRAY__();
}
var Arr = input["replace"](/\n$/, "").split("\n");
while (true) {
  var str = Arr["shift"]();
  if (str == "0") {
    break;
  }
  var arr = str["split"]("");
  var a = 0;
  var b = 0;
  arr.shift();
  arr["forEach"](function (v) {
    if (v == "A") {
      a++;
    }
    if (v == "B") {
      b++;
    }
  });
  if (a > b) {
    a++;
  } else {
    b++;
  }
  console.log(a + " " + b);
}
