function __DECODE_0__(YGfoMP, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 220;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YGfoMP, key);
}
function __STRING_ARRAY__() {
  var _0x73a789 = ["233337qZttWL", "15uqvkFi", "readFileSync", "split", "2183964jhnbXe", "fill", "pow", "16lGYpnM", "142694MlMdDY", "max", "/dev/stdin", "656MuTzoj", "1573998eWiOat", "min", "12462261zhiMaB", "utf8", "2742010CMGGQG", "186939HEBjlR"];
  __STRING_ARRAY__ = function () {
    return _0x73a789;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("142694MlMdDY") / 1 + -parseInt("16lGYpnM") / 2 * (parseInt("233337qZttWL") / 3) + parseInt("2183964jhnbXe") / 4 * (parseInt("15uqvkFi") / 5) + parseInt("1573998eWiOat") / 6 + parseInt("12462261zhiMaB") / 7 + parseInt("656MuTzoj") / 8 * (-parseInt("186939HEBjlR") / 9) + -parseInt("2742010CMGGQG") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 938280);
function Main(input) {
  input = input["split"]("\n");
  tmp = input[0]["split"](" ");
  var n = parseInt(tmp[0]);
  a = new Array(n)["fill"](0);
  for (i = 0; i < n; i++) {
    a[i] = parseInt(input[1]["split"](" ")[i]);
  }
  b = new Array(n)["fill"](0);
  var min = Math["pow"](10, 9);
  var max = -1;
  for (i = 0; i < n; i++) {
    min = Math["min"](min, a[i]);
    if (max < a[i] - min) {
      ans = 1;
    }
    if (max == a[i] - min) {
      ans++;
    }
    max = Math["max"](max, a[i] - min);
  }
  console.log("%s", ans);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
