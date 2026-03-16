(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("3989NXlRzs") / 1 * (-parseInt("388XmdCIg") / 2) + parseInt("2827170uNuUiY") / 3 + parseInt("136dFHVBb") / 4 * (parseInt("129555rNuFFo") / 5) + -parseInt("66oBFvoi") / 6 * (-parseInt("74361udeVQh") / 7) + parseInt("5224096SFTKet") / 8 + -parseInt("9VWNmYJ") / 9 * (parseInt("8083660sBYqQj") / 10) + -parseInt("157333bNjGpk") / 11 * (parseInt("1680klZEwD") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 556309);
function __STRING_ARRAY__() {
  var _0x1e506b = ["readFileSync", "8083660sBYqQj", "Yes", "/dev/stdin", "388XmdCIg", "74361udeVQh", "129555rNuFFo", "136dFHVBb", "66oBFvoi", "1680klZEwD", "split", "9VWNmYJ", "3989NXlRzs", "2827170uNuUiY", "157333bNjGpk", "5224096SFTKet"];
  __STRING_ARRAY__ = function () {
    return _0x1e506b;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(TDZnkf, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 364;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(TDZnkf, key);
}
function Main(input) {
  input = input["split"]("\n");
  var n = parseInt(input[0]);
  tmp = input[1].split(" ");
  a = new Array(n);
  var odd = 0;
  var even = 0;
  var four = 0;
  for (i = 0; i < n; i++) {
    a[i] = parseInt(tmp[i]);
    if (a[i] % 4 == 0) {
      four++;
    } else if (a[i] % 2 == 0) {
      even++;
    } else {
      odd++;
    }
  }
  var ans = "No";
  if (odd <= four) {
    ans = "Yes";
  } else if (four + 1 == odd && even == 0) {
    ans = "Yes";
  }
  console.log("%s", ans);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
