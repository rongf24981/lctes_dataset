(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("287172xOzmxA") / 1 + -parseInt("498294YHoQWo") / 2 + parseInt("1241073VzehtO") / 3 + parseInt("2536312iLUdnv") / 4 + -parseInt("25KqCvij") / 5 * (parseInt("834318EwZgkp") / 6) + parseInt("675724hOzpLm") / 7 + parseInt("3983488IIBSGE") / 8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 410653);
function kumiawase(start, end, len) {
  var ans = [];
  function loop(a, arr) {
    if (arr.length == len) {
      ans["push"](arr);
    } else {
      for (var i = a; i <= end; i++) {
        loop(i + 1, arr["concat"](i));
      }
    }
  }
  loop(start, []);
  return ans;
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __DECODE_0__(xfRBUI, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 164;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(xfRBUI, key);
}
var arr = input["trim"]()["split"]("\n");
function __STRING_ARRAY__() {
  var _0x1fcdda = ["concat", "1241073VzehtO", "map", "675724hOzpLm", "287172xOzmxA", "/dev/stdin", "some", "reduce", "834318EwZgkp", "log", "2536312iLUdnv", "498294YHoQWo", "3983488IIBSGE", "utf8", "0 0 0", "push", "split", "readFileSync", "25KqCvij", "trim"];
  __STRING_ARRAY__ = function () {
    return _0x1fcdda;
  };
  return __STRING_ARRAY__();
}
arr["some"](function (v, i) {
  if (v == "0 0 0") {
    return true;
  }
  var nks = v.split(" ")["map"](Number);
  var ary = kumiawase(1, nks[0], nks[1]);
  var cnt = 0;
  ary.forEach(function (v) {
    var sum = v["reduce"](function (a, b) {
      return a + b;
    });
    if (sum == nks[2]) {
      cnt++;
    }
  });
  console["log"](cnt);
});
