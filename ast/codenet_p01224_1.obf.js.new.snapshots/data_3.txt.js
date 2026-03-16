function __DECODE_0__(vRDoxr, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 130;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(vRDoxr, key);
}
function __STRING_ARRAY__() {
  var _0x52ddf6 = ["utf8", "3668250nFGSNw", "45784UzTAEi", "376039pQVHnm", "perfect number", "849690EswxVv", "split", "3478941KlOZBV", "abundant number", "log", "readFileSync", "deficient number", "1477iAKdtK", "8812uCnHCM", "342WDnBNN", "shift", "1840218QzuyJZ", "/dev/stdin", "895DbKxfj"];
  __STRING_ARRAY__ = function () {
    return _0x52ddf6;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("376039pQVHnm") / 1 + -parseInt("3668250nFGSNw") / 2 + -parseInt("3478941KlOZBV") / 3 + parseInt("8812uCnHCM") / 4 * (-parseInt("895DbKxfj") / 5) + parseInt("1840218QzuyJZ") / 6 + -parseInt("1477iAKdtK") / 7 * (-parseInt("45784UzTAEi") / 8) + parseInt("342WDnBNN") / 9 * (parseInt("849690EswxVv") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 978930);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input.trim()["split"]("\n");
while (true) {
  var n = arr["shift"]() - 0;
  if (n == 0) {
    break;
  }
  var sum = n != 1 ? 1 : 0;
  var sqrt = Math.sqrt(n);
  for (var i = 2; i < sqrt; i++) {
    if (n % i == 0) {
      sum += i + n / i;
    }
  }
  if (n % sqrt == 0 && sqrt != 1) {
    sum += sqrt;
  }
  var ans;
  if (n == sum) {
    ans = "perfect number";
  } else if (n > sum) {
    ans = "deficient number";
  } else if (n < sum) {
    ans = "abundant number";
  }
  console["log"](ans);
}
