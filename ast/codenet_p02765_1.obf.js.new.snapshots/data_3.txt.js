function __DECODE_0__(venIQd, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 491;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(venIQd, key);
}
function __STRING_ARRAY__() {
  var _0x1337cf = ["split", "21dBNPuq", "/dev/stdin", "681288FHobJg", "3703998xurxbr", "3wgoBIO", "305988CvmKDQ", "757714GiELgC", "181214FzjMgl", "16530AYkDvl", "utf8", "trim", "13343FhJYbw", "log", "2951496pldGSj", "5CXUWez", "readFileSync"];
  __STRING_ARRAY__ = function () {
    return _0x1337cf;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("181214FzjMgl") / 1 + -parseInt("757714GiELgC") / 2 * (parseInt("3wgoBIO") / 3) + -parseInt("305988CvmKDQ") / 4 * (-parseInt("5CXUWez") / 5) + -parseInt("3703998xurxbr") / 6 + -parseInt("21dBNPuq") / 7 * (parseInt("681288FHobJg") / 8) + -parseInt("2951496pldGSj") / 9 + -parseInt("16530AYkDvl") / 10 * (-parseInt("13343FhJYbw") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 320755);
function main(input) {
  var marginDelete = input["trim"]();
  var args = marginDelete["split"](" ");
  var n = parseInt(args[0], 10);
  var r = parseInt(args[1], 10);
  var hiddenRating;
  if (n >= 10) {
    hiddenRating = r;
  } else {
    var argument = (10 - n) * 100;
    hiddenRating = r + argument;
  }
  return hiddenRating;
}
console["log"](main(require("fs")["readFileSync"]("/dev/stdin", "utf8")));
