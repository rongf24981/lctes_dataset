function __STRING_ARRAY__() {
  var _0x81411b = ["readFileSync", "1053rlHrSf", "split", "1272792PpUGGS", "4150041btOjaQ", "876704iwzfIq", "1566174YATbAO", "abs", "1494358MCETeH", "46072KjgpVG", "log", "694120vPDqyA", "utf8", "/dev/stdin", "15uRQIDy"];
  __STRING_ARRAY__ = function () {
    return _0x81411b;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(IYnybb, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 261;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(IYnybb, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1272792PpUGGS") / 1 + -parseInt("1494358MCETeH") / 2 + -parseInt("4150041btOjaQ") / 3 + parseInt("876704iwzfIq") / 4 + parseInt("15uRQIDy") / 5 * (parseInt("1566174YATbAO") / 6) + -parseInt("694120vPDqyA") / 7 + parseInt("46072KjgpVG") / 8 * (parseInt("1053rlHrSf") / 9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 719172);
inp = require("fs")["readFileSync"]("/dev/stdin", "utf8")["split"]("\n");
l = inp.shift()["split"](" ");
x = l[0] * 1;
y = l[1] * 1;
cnt = 0;
if (x == y) {} else if (Math.abs(x) == Math["abs"](y)) {
  cnt++;
} else if (x == 0 || y == 0) {
  if (y < x) {
    cnt++;
  }
  cnt += Math["abs"](Math["abs"](x) - Math["abs"](y));
} else {
  if (x > y) {
    if (x > 0 && y > 0) {
      cnt += 2;
    } else if (x > 0 && y < 0) {
      cnt += 1;
    } else {
      cnt += 2;
    }
  } else if (x < 0 && y > 0) {
    cnt += 1;
  }
  cnt += Math["abs"](Math["abs"](x) - Math["abs"](y));
}
console["log"](cnt);
