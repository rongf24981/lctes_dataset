function __STRING_ARRAY__() {
  var _0x23db71 = ["7237800BOKjPE", "length", "split", "3113905QCREqO", "7WECPmd", "readFileSync", "replace", "4LVHXiA", "/dev/stdin", "10TYORlU", "1211634EwpLIu", "log", "567844CRrkrV", "bust", "10333449ODFcph", "1476972ChTlOj", "blackjack", "shift", "trim", "335934eFbMgB"];
  __STRING_ARRAY__ = function () {
    return _0x23db71;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("335934eFbMgB") / 1 + -parseInt("567844CRrkrV") / 2 + parseInt("1476972ChTlOj") / 3 + parseInt("4LVHXiA") / 4 * (parseInt("3113905QCREqO") / 5) + parseInt("1211634EwpLIu") / 6 * (parseInt("7WECPmd") / 7) + parseInt("7237800BOKjPE") / 8 + parseInt("10333449ODFcph") / 9 * (-parseInt("10TYORlU") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 453752);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
input = input["replace"](/T|J|Q|K/g, "10");
input = input["replace"](/A/g, "11");
var arr = input["trim"]()["split"]("\n");
var n = arr["shift"]() - 0;
function __DECODE_0__(AHhbnw, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 152;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(AHhbnw, key);
}
while (n--) {
  var a = arr.shift()["split"](" ").map(Number);
  var b = arr["shift"]()["split"](" ").map(Number);
  var flag = false;
  var sum = a[0] + a[1];
  if (a[0] == 11 || a[1] == 11) {
    flag = true;
  }
  if (sum == 21) {
    console["log"]("blackjack");
    continue;
  }
  var ans = "";
  for (var i = 0; i < b["length"]; i++) {
    if (sum <= 16) {
      if (b[i] == 11) {
        flag = true;
      }
      if (b[i] == 11 && sum + 11 > 21) {
        b[i] = 1;
      }
      sum += b[i];
    } else if (sum == 17 && flag) {
      if (b[i] == 11) {
        flag = true;
      }
      if (b[i] == 11 && sum + 11 > 21) {
        b[i] = 1;
      }
      sum += b[i];
    } else {
      break;
    }
  }
  if (sum > 21) {
    sum = "bust";
  }
  console["log"](sum);
}
