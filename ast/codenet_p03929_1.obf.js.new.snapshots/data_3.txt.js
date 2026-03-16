function __DECODE_0__(deEcvl, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 194;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(deEcvl, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("648215eUBhsd") / 1 + parseInt("8hqoBKa") / 2 * (-parseInt("653190DSXdZa") / 3) + parseInt("6169960ETKLMn") / 4 + -parseInt("5280320pXcyVF") / 5 + -parseInt("5142054BelgfH") / 6 + parseInt("2740038chLwJl") / 7 + -parseInt("455432acvzTU") / 8 * (-parseInt("369vAlEWj") / 9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 835805);
function __STRING_ARRAY__() {
  var _0x256933 = ["653190DSXdZa", "utf8", "369vAlEWj", "648215eUBhsd", "readFileSync", "455432acvzTU", "log", "split", "5280320pXcyVF", "5142054BelgfH", "6169960ETKLMn", "2740038chLwJl", "8hqoBKa"];
  __STRING_ARRAY__ = function () {
    return _0x256933;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  input = input["split"](" ");
  var valN = input[0];
  var valK = input[1];
  if (valN < 3) {
    console["log"]("0");
    return;
  }
  var count = 0;
  for (var i = 0; i + 2 < valN; i++) {
    for (var j = 0; j < 5; j++) {
      if ((i * 63 + j * 9 + 81) % 11 == valK) {
        count++;
      }
    }
  }
  console["log"](count);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
