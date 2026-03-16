function __STRING_ARRAY__() {
  var _0x54cf46 = ["4OesHwn", "5197870dqAeOc", "682668YjOQAq", "1833170UvdOrB", "3687528oRJQNl", "36DZxgaJ", "1041928mQzBxA", "readFileSync", "split", "7720952tSuYya", "log", "26684OLNOPt", "7HRuVnp"];
  __STRING_ARRAY__ = function () {
    return _0x54cf46;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1041928mQzBxA") / 1 + -parseInt("26684OLNOPt") / 2 + -parseInt("682668YjOQAq") / 3 + parseInt("4OesHwn") / 4 * (parseInt("5197870dqAeOc") / 5) + -parseInt("3687528oRJQNl") / 6 * (-parseInt("7HRuVnp") / 7) + -parseInt("7720952tSuYya") / 8 + parseInt("36DZxgaJ") / 9 * (-parseInt("1833170UvdOrB") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 756805);
function Main(input) {
  var X = parseInt(input["split"](" ")[0]);
  var Y = parseInt(input["split"](" ")[1]);
  var Z = parseInt(input["split"](" ")[2]);
  var N = 1;
  var x = 0;
  while (true) {
    x = N * Y + (N + 1) * Z;
    if (x > X) {
      break;
    }
    N++;
  }
  console["log"](--N);
}
function __DECODE_0__(xELTDg, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 178;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(xELTDg, key);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
