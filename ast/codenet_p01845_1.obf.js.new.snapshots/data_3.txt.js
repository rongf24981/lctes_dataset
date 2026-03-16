(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("836850hawXKf") / 1 + parseInt("270OFClCO") / 2 * (-parseInt("16671qspElw") / 3) + -parseInt("1222328CAOwPE") / 4 + parseInt("2462005AVLIeJ") / 5 + -parseInt("1960284vZPnyS") / 6 + -parseInt("1204532HKtgDg") / 7 + parseInt("5747128LqrSaR") / 8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 493075);
function Main(input) {
  input = input.split("\n");
  for (var i = 0; 1; i++) {
    input[i] = input[i]["split"](" ");
    var r0 = parseInt(input[i][0], 10);
    var w0 = parseInt(input[i][1], 10);
    var c = parseInt(input[i][2], 10);
    var r = parseInt(input[i][3], 10);
    if (r0 == 0 && w0 == 0 && c == 0 && r == 0) {
      break;
    }
    var a = c * w0;
    if (a <= r0) {
      console["log"]("0");
    } else {
      console.log(Math.floor((a - r0 + r - 1) / r));
    }
  }
}
function __STRING_ARRAY__() {
  var _0x595332 = ["log", "270OFClCO", "836850hawXKf", "readFileSync", "1222328CAOwPE", "utf8", "split", "2462005AVLIeJ", "5747128LqrSaR", "/dev/stdin", "16671qspElw", "1204532HKtgDg", "1960284vZPnyS"];
  __STRING_ARRAY__ = function () {
    return _0x595332;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(PmrihL, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 291;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(PmrihL, key);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
