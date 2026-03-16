function __DECODE_0__(nRrFoD, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 422;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(nRrFoD, key);
}
function __STRING_ARRAY__() {
  var _0x241114 = ["1873151pWNOFh", "utf8", "4418970wrOGkh", "2347473GQbduZ", "22530BlAfCq", "pow", "split", "10yNMnDs", "38OIFkLj", "269918GpJblS", "12367854jQdvQG", "6quQmPc", "38818806fPLcUO", "40EMrOLx", "isInteger", "60jpmQUZ", "log", "8LxvINs"];
  __STRING_ARRAY__ = function () {
    return _0x241114;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("22530BlAfCq") / 1 * (-parseInt("38OIFkLj") / 2) + -parseInt("2347473GQbduZ") / 3 * (-parseInt("8LxvINs") / 4) + -parseInt("4418970wrOGkh") / 5 * (parseInt("6quQmPc") / 6) + parseInt("1873151pWNOFh") / 7 * (parseInt("40EMrOLx") / 8) + parseInt("12367854jQdvQG") / 9 * (parseInt("10yNMnDs") / 10) + parseInt("269918GpJblS") / 11 * (parseInt("60jpmQUZ") / 12) + -parseInt("38818806fPLcUO") / 13;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 958057);
function Main(input) {
  input = input["split"](" ");
  ans = input[0] / input[1];
  num = 0;
  var a = Number["isInteger"](ans);
  if (a === true) {
    ans = -1;
  } else {
    while (true) {
      num++;
      cal = input[0] * num / input[1];
      var b = Number.isInteger(cal);
      if (b === true) {
        ans = input[0] * (num - 1);
        break;
      }
      if (input[0] > Math.pow(10, 9) | input[1] > Math.pow(10, 9) | input[0] * (num - 1) > Math["pow"](10, 18)) {
        ans = -1;
        break;
      }
    }
  }
  console["log"](ans);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
