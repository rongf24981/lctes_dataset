(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("61myAOFF") / 1 * (-parseInt("35486WBpSxL") / 2) + -parseInt("4013394ehmjtQ") / 3 * (parseInt("4WazSnc") / 4) + parseInt("4695720Hzauch") / 5 + -parseInt("7197744VmLdwF") / 6 + parseInt("4686850AROHEb") / 7 + -parseInt("9259000fSqFiQ") / 8 + parseInt("15341400vVStDE") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 700820);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input["trim"]()["split"]("\n");
var nf = arr["shift"]()["split"](" ")["map"](Number);
var f = nf[1];
function __STRING_ARRAY__() {
  var _0x2b2457 = ["/dev/stdin", "61myAOFF", "35486WBpSxL", "4WazSnc", "readFileSync", "map", "split", "length", "4013394ehmjtQ", "7197744VmLdwF", "4686850AROHEb", "sort", "shift", "trim", "log", "utf8", "15341400vVStDE", "4695720Hzauch", "9259000fSqFiQ", "forEach"];
  __STRING_ARRAY__ = function () {
    return _0x2b2457;
  };
  return __STRING_ARRAY__();
}
var obj = {};
arr = arr["map"](function (v) {
  v = v.split(" ");
  v.shift();
  v["forEach"](function (V) {
    obj[V] = {};
  });
  return v;
});
for (var k in obj) {
  for (var K in obj) {
    obj[k][K] = 0;
  }
}
arr["forEach"](function (v) {
  for (var i = 0; i < v.length; i++) {
    for (var j = 0; j < v["length"]; j++) {
      obj[v[i]][v[j]]++;
    }
  }
});
var ans = [];
for (var k in obj) {
  for (var K in obj) {
    obj[K][k] = 0;
    if (obj[k][K] >= f) {
      ans.push([k, K]["sort"]().join(" "));
    }
  }
}
ans["sort"]();
console["log"](ans["length"]);
function __DECODE_0__(toHCqW, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 262;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(toHCqW, key);
}
if (ans["length"] != 0) {
  console["log"](ans.join("\n"));
}
