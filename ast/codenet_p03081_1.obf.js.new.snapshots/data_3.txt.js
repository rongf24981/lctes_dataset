function __DECODE_0__(uEzmdi, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 174;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(uEzmdi, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1447908GisSrb") / 1 + parseInt("15468ofzIkw") / 2 + -parseInt("3xCeIDi") / 3 * (parseInt("6236444sgVPyF") / 4) + -parseInt("5204480xzDbUU") / 5 + parseInt("6xUmhnL") / 6 * (-parseInt("2395372ocjefd") / 7) + parseInt("2416784ESrhlT") / 8 + parseInt("45452061elsNUw") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 969950);
function __STRING_ARRAY__() {
  var _0x3fb267 = ["6236444sgVPyF", "15468ofzIkw", "log", "push", "split", "concat", "/dev/stdin", "3xCeIDi", "2416784ESrhlT", "6xUmhnL", "length", "readFileSync", "2395372ocjefd", "45452061elsNUw", "5204480xzDbUU", "1447908GisSrb"];
  __STRING_ARRAY__ = function () {
    return _0x3fb267;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  var ary = [];
  for (var i = 0; i < input["split"]("\n")[0].split(" ")[0]; i++) {
    ary["push"](1);
  }
  var str = input["split"]("\n")[1];
  for (var i = 2; i < input["split"]("\n")["length"]; i++) {
    var jumon = input["split"]("\n")[i]["split"](" ");
    var newAry = [];
    for (var j = 0; j < ary["length"]; j++) {
      newAry.push(0);
    }
    if (jumon[1] == "L") {
      for (var j = 0; j < str["length"]; j++) {
        if (j != 0 || str[j] != jumon[0]) {
          newAry[str[j] == jumon[0] ? j - 1 : j] += ary[j];
        }
      }
    } else {
      for (var j = 0; j < str["length"]; j++) {
        if (j != ary["length"] - 1 || str[j] != jumon[0]) {
          newAry[str[j] == jumon[0] ? j + 1 : j] += ary[j];
        }
      }
    }
    ary = newAry["concat"]();
  }
  var golems = 0;
  for (var i of ary) {
    golems += i;
  }
  console["log"](golems);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
