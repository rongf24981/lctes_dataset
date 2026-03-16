function __DECODE_0__(bYjrFz, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 125;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(bYjrFz, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("617ObkbYY") / 1 * (parseInt("478qfXVyf") / 2) + -parseInt("10923FVQmfx") / 3 * (parseInt("212zcZwLl") / 4) + parseInt("2676335UoUUjM") / 5 + parseInt("2075994QHhorU") / 6 + parseInt("427yfIafr") / 7 * (parseInt("17288EafJmQ") / 8) + parseInt("1285344cjXXjH") / 9 + -parseInt("5440630cCMmmm") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 271404);
function __STRING_ARRAY__() {
  var _0x2c5470 = ["617ObkbYY", "1285344cjXXjH", "10923FVQmfx", "split", "17288EafJmQ", "2075994QHhorU", "/dev/stdin", "shift", "5440630cCMmmm", "log", "212zcZwLl", "utf8", "427yfIafr", "478qfXVyf", "2676335UoUUjM"];
  __STRING_ARRAY__ = function () {
    return _0x2c5470;
  };
  return __STRING_ARRAY__();
}
(function (input) {
  var inputs = input.replace(/\r/g, "")["split"]("\n");
  var data = [];
  var n;
  var line;
  var max_index;
  var a;
  var b;
  n = parseInt(inputs["shift"]());
  max_index = 101;
  max_value = -1;
  while (n--) {
    line = inputs.shift().split(" ");
    a = parseInt(line[0]);
    b = parseInt(line[1]);
    if (b > max_value || b === max_value && a < max_index) {
      max_index = a;
      max_value = b;
    }
  }
  console["log"](max_index + " " + max_value);
})(require("fs").readFileSync("/dev/stdin", "utf8"));
