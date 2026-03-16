function __STRING_ARRAY__() {
  var _0x5b6b26 = ["4484112iPUVLD", "/dev/stdin", "2bVJfOW", "745206Ixwnzu", "2268872SJqTpO", "6939933ObKEqv", "37220LXmhOV", "931113JnSMxm", "readFileSync", "337795FYecei", "78yjclCJ", "14KYBlxt", "utf-8", "map", "50GxjFBY", "split", "6IZrEwS"];
  __STRING_ARRAY__ = function () {
    return _0x5b6b26;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("2bVJfOW") / 1 * (parseInt("745206Ixwnzu") / 2) + -parseInt("78yjclCJ") / 3 * (parseInt("37220LXmhOV") / 4) + -parseInt("337795FYecei") / 5 * (-parseInt("6IZrEwS") / 6) + parseInt("14KYBlxt") / 7 * (parseInt("2268872SJqTpO") / 8) + parseInt("931113JnSMxm") / 9 * (parseInt("50GxjFBY") / 10) + parseInt("6939933ObKEqv") / 11 + -parseInt("4484112iPUVLD") / 12;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 422153);
function __DECODE_0__(etJiRx, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 312;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(etJiRx, key);
}
function Main(input) {
  input = input["split"](" ")["map"](x => x * 1);
  function gcd(a1, a2) {
    if (a2 == 0) {
      return a1;
    } else {
      return gcd(a2, a1 % a2);
    }
  }
  var result = gcd(input[0], input[1]);
  var answer = 1;
  for (var i = 2; i * i < result; i++) {
    if (result % i === 0) {
      answer++;
      while (result % i === 0) {
        result /= i;
      }
    }
  }
  if (result !== 1) {
    answer++;
  }
  console.log(answer);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf-8"));
