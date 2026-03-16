(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("312034NIVHyW") / 1 * (-parseInt("10qyvJNb") / 2) + parseInt("913863OlVLpd") / 3 * (-parseInt("4PldNnB") / 4) + -parseInt("1617670UHHMQk") / 5 + parseInt("2998230xLQVrr") / 6 + -parseInt("11136881dHefhW") / 7 + parseInt("2300728abbvuR") / 8 + parseInt("6484149hoCWlz") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 848789);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __STRING_ARRAY__() {
  var _0x5dfd6f = ["/dev/stdin", "2300728abbvuR", "6484149hoCWlz", "4PldNnB", "312034NIVHyW", "map", "10qyvJNb", "11136881dHefhW", "readFileSync", "utf8", "2998230xLQVrr", "MTSH", "913863OlVLpd", "split", "1617670UHHMQk", "log"];
  __STRING_ARRAY__ = function () {
    return _0x5dfd6f;
  };
  return __STRING_ARRAY__();
}
var [e, y] = input.trim()["split"](" ")["map"](Number);
function __DECODE_0__(OqHNBB, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 193;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(OqHNBB, key);
}
var mtsh = "MTSH"["split"]("");
if (e == 0) {
  if (y >= 1868 && y <= 1911) {
    e = 1;
    y -= 1868;
  } else if (y >= 1912 && y <= 1925) {
    e = 2;
    y -= 1912;
  } else if (y >= 1926 && y <= 1988) {
    e = 3;
    y -= 1926;
  } else if (y >= 1989 && y <= 2016) {
    e = 4;
    y -= 1989;
  }
  console["log"](mtsh[e - 1] + (y + 1));
} else if (e == 1) {
  console["log"](1868 + y - 1);
} else if (e == 2) {
  console.log(1912 + y - 1);
} else if (e == 3) {
  console.log(1926 + y - 1);
} else if (e == 4) {
  console["log"](1989 + y - 1);
}
