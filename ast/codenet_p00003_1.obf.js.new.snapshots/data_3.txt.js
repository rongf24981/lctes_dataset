(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("92JOUkSp") / 1 * (parseInt("1504qtOQPd") / 2) + -parseInt("62019hcwBwz") / 3 * (parseInt("52JPZlia") / 4) + -parseInt("7455qsUYKf") / 5 * (-parseInt("732CAgbUo") / 6) + parseInt("766745hNnQfA") / 7 * (-parseInt("8ULuvJe") / 8) + parseInt("8019eOOgra") / 9 * (-parseInt("3770APUwBa") / 10) + -parseInt("3944028AsDPlk") / 11 + parseInt("13877916MMwpQG") / 12;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 196472);
process["stdin"]["resume"]();
process["stdin"]["setEncoding"]("utf8");
function __STRING_ARRAY__() {
  var _0x2a432d = ["utf8", "1504qtOQPd", "13877916MMwpQG", "shift", "stdin", "52JPZlia", "log", "3944028AsDPlk", "8019eOOgra", "setEncoding", "3770APUwBa", "resume", "8ULuvJe", "split", "7455qsUYKf", "toString", "62019hcwBwz", "data", "766745hNnQfA", "92JOUkSp", "732CAgbUo"];
  __STRING_ARRAY__ = function () {
    return _0x2a432d;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(WpOSck, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 238;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(WpOSck, key);
}
process["stdin"].on("data", function (chunk) {
  var aaa = chunk["toString"]();
  var line = aaa["split"]("\n");
  line["shift"]();
  for (var i in line) {
    var l = line[i]["split"](" ");
    for (var i in l) {
      l[i] = new Number(l[i]);
    }
    l.sort(function (a, b) {
      if (a > b) {
        return -1;
      }
      if (a < b) {
        return 1;
      }
      return 0;
    });
    var num1 = new Number(l[0]) * new Number(l[0]);
    var num2 = new Number(l[1]) * new Number(l[1]);
    var num3 = new Number(l[2]) * new Number(l[2]);
    var num4 = num2 + num3;
    if (num1 === num4) {
      console["log"]("YES");
    } else {
      console["log"]("NO");
    }
  }
});
