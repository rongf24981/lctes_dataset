(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("234611phaGXS") / 1 * (-parseInt("12OaOmhU") / 2) + -parseInt("1602840tfYTFc") / 3 + -parseInt("1654192eMMRQq") / 4 * (-parseInt("10BhUflS") / 5) + parseInt("247668OciKxT") / 6 + parseInt("277158ThxFyZ") / 7 * (parseInt("8gDpJLv") / 8) + parseInt("63nnistR") / 9 * (-parseInt("849790axXexF") / 10) + -parseInt("2146815qcITWe") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 991336);
function main() {
  var hands;
  var pattern;
  var swap;
  var i = 0;
  var j;
  while (true) {
    if (input[i] == 0) {
      break;
    }
    hands = [];
    for (j = 0; j < 5; j++) {
      hands.push(Number(input[i++]));
    }
    pattern = hands["reduce"](function (pat, h) {
      pat[h] = true;
      return pat;
    }, {});
    keys = Object["keys"](pattern)["map"](Number)["sort"](function (x, y) {
      return x - y;
    });
    if (keys.length === 2) {
      if (keys[1] - keys[0] == 2) {
        swap = keys[0];
        keys[0] = keys[1];
        keys[1] = swap;
      }
      hands["forEach"](function (h) {
        console["log"](keys["indexOf"](h) + 1);
      });
    } else {
      hands["forEach"](function () {
        console["log"](3);
      });
    }
  }
}
function __STRING_ARRAY__() {
  var _0x4375b0 = ["12OaOmhU", "utf8", "8gDpJLv", "resume", "keys", "log", "map", "sort", "10BhUflS", "forEach", "234611phaGXS", "end", "2146815qcITWe", "277158ThxFyZ", "stdin", "indexOf", "1654192eMMRQq", "63nnistR", "849790axXexF", "247668OciKxT", "reduce", "1602840tfYTFc"];
  __STRING_ARRAY__ = function () {
    return _0x4375b0;
  };
  return __STRING_ARRAY__();
}
var input = "";
process["stdin"]["resume"]();
function __DECODE_0__(SCdYDV, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 258;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(SCdYDV, key);
}
process["stdin"].setEncoding("utf8");
process["stdin"].on("data", function (chunk) {
  input += chunk;
});
process["stdin"].on("end", function () {
  input = input.split("\n");
  main();
});
