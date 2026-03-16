(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("684720kUGrYq") / 1 + -parseInt("786470nrQMCA") / 2 + parseInt("1528971psbseb") / 3 * (-parseInt("4dXioXM") / 4) + -parseInt("5HOxmjo") / 5 * (-parseInt("3454698gUhEBB") / 6) + parseInt("6937dBjtEx") / 7 * (parseInt("1392lwBpKY") / 8) + parseInt("99BrOFbA") / 9 * (-parseInt("217390VPQjWH") / 10) + -parseInt("814gzDxIl") / 11 * (-parseInt("27708IrqfbJ") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 461782);
function Main(input) {
  input = input["split"]("\n");
  var n = parseInt(input[0], 10);
  var a = input[1]["split"](" ");
  a = a.map(str => parseInt(str, 10));
  var b = input[2].split(" ");
  b = b["map"](str => parseInt(str, 10));
  var count = 0;
  for (var i = 0; i < n; i++) {
    var atarget = a[i] + a[i + 1];
    var rest = atarget - b[i];
    if (rest < 0) {
      count += atarget;
      a[i + 1] = 0;
    } else {
      count += b[i];
      a[i + 1] = Math["min"](rest, a[i + 1]);
    }
  }
  console["log"](count);
}
function __DECODE_0__(ouJQhi, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 238;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ouJQhi, key);
}
function __STRING_ARRAY__() {
  var _0x1546e5 = ["utf8", "log", "readFileSync", "min", "1392lwBpKY", "split", "5HOxmjo", "684720kUGrYq", "map", "814gzDxIl", "27708IrqfbJ", "/dev/stdin", "786470nrQMCA", "3454698gUhEBB", "1528971psbseb", "99BrOFbA", "217390VPQjWH", "6937dBjtEx", "4dXioXM"];
  __STRING_ARRAY__ = function () {
    return _0x1546e5;
  };
  return __STRING_ARRAY__();
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
