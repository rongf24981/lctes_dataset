(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("130676BxpUpY") / 1 + parseInt("2EpXfyD") / 2 * (-parseInt("4385007IiDylW") / 3) + -parseInt("2708052khyNmh") / 4 + -parseInt("831545jibZOP") / 5 + parseInt("6kReEil") / 6 * (parseInt("9272823WZRNlA") / 7) + parseInt("10234600cUmiPu") / 8 + parseInt("9pxhLhe") / 9 * (parseInt("5688610PmIMtJ") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 737208);
function __DECODE_0__(nzGSlc, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 436;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(nzGSlc, key);
}
process["stdin"]["resume"]();
process["stdin"]["setEncoding"]("utf8");
var input = "";
process["stdin"].on("data", function (chunk) {
  input += chunk;
});
function __STRING_ARRAY__() {
  var _0x1c0579 = ["length", "stdin", "831545jibZOP", "9272823WZRNlA", "log", "2708052khyNmh", "130676BxpUpY", "data", "resume", "4385007IiDylW", "5688610PmIMtJ", "10234600cUmiPu", "utf8", "9pxhLhe", "2EpXfyD", "setEncoding", "6kReEil"];
  __STRING_ARRAY__ = function () {
    return _0x1c0579;
  };
  return __STRING_ARRAY__();
}
process["stdin"].on("end", function () {
  var lines = input.split("\n");
  var l = 0;
  while (true) {
    var n = Number(lines[l++]);
    if (n === 0) {
      break;
    }
    var sales = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (var i = 0; i < n; i++) {
      sales[Number(lines[l++])]++;
    }
    for (var i = 0; i < sales["length"]; i++) {
      var bar = sales[i] === 0 ? "-" : "";
      for (var j = 0; j < sales[i]; j++) {
        bar += "*";
      }
      console["log"](bar);
    }
  }
});
