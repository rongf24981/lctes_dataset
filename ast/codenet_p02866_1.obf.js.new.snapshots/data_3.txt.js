function __DECODE_0__(ENmILA, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 188;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ENmILA, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("121811ETveZx") / 1 + -parseInt("10bgLFeu") / 2 * (parseInt("133818ekowsF") / 3) + parseInt("1109728VhTNqx") / 4 + parseInt("1768390VUJimS") / 5 + -parseInt("535224nSYuqe") / 6 + -parseInt("62797IWVTpq") / 7 * (-parseInt("280MOaMZE") / 8) + -parseInt("5016591kzPHGQ") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 197273);
function main(arg) {
  var arg2 = arg["split"]("\n")[1]["split"](/\s/g);
  var kazoe = [];
  for (i = 0; i < arg.split("\n")[0]; i++) {
    if (!kazoe[arg2[i]]) {
      kazoe[arg2[i]] = 0;
    }
    kazoe[arg2[i]] += 1;
  }
  var ans = 1;
  for (j = 0; j < kazoe["length"]; j++) {
    if (j > 1) {
      ans = ans * Math["pow"](kazoe[j - 1], kazoe[j]);
    }
    if (!kazoe[j]) {
      ans = 0;
      break;
    }
  }
  console["log"](ans % 998244353);
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  var _0x6dd42f = ["280MOaMZE", "1109728VhTNqx", "62797IWVTpq", "5016591kzPHGQ", "pow", "split", "10bgLFeu", "log", "133818ekowsF", "1768390VUJimS", "535224nSYuqe", "length", "121811ETveZx", "utf8"];
  __STRING_ARRAY__ = function () {
    return _0x6dd42f;
  };
  return __STRING_ARRAY__();
}
