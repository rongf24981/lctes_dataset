'use strict';

function __STRING_ARRAY__() {
  var _0x5a462e = ["weight", "prototype", "top", "8268858uNPceL", "1572876oxkHfv", "21122864PurFfc", "shift", "parent", "9618336ItJgWd", "291678ZvmjAH", "trim", "/dev/stdin", "value", "map", "split", "92403nKuSqe", "144616nYOHGu", "merge", "adopt", "30GtjgoL"];
  __STRING_ARRAY__ = function () {
    return _0x5a462e;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("291678ZvmjAH") / 1 + parseInt("1572876oxkHfv") / 2 + -parseInt("92403nKuSqe") / 3 + parseInt("144616nYOHGu") / 4 * (-parseInt("30GtjgoL") / 5) + -parseInt("8268858uNPceL") / 6 + -parseInt("9618336ItJgWd") / 7 + parseInt("21122864PurFfc") / 8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 718558);
function Main(input) {
  input = input["trim"]()["split"](/\s+/)["map"](x => x - 0);
  var N = input["shift"]();
  var M = input["shift"]();
  var p = input.splice(0, N);
  var nodes = [];
  for (let k = 0; k < N; k++) {
    nodes[k] = new Node(k);
  }
  for (let k = 0; k < M; k++) {
    nodes[input[k * 2] - 1]["merge"](nodes[input[k * 2 + 1] - 1]);
  }
  var counter = 0;
  for (let k = 0; k < N; k++) {
    if (nodes[k]["top"]() === nodes[p[k] - 1].top()) {
      counter++;
    }
  }
  console.log(counter);
}
function Node(v) {
  var t = this;
  t["value"] = v;
  t["parent"] = null;
  t.weight = 1;
}
Node["prototype"]["top"] = function () {
  var t = this;
  var p = t.parent;
  if (!p) {
    return t;
  } else {
    return p.top();
  }
};
Node["prototype"]["adopt"] = function (progeny) {
  var t = this["top"]();
  var c = progeny["top"]();
  c["parent"] = t;
  t["weight"] += c["weight"];
};
Node["prototype"].merge = function (b) {
  var a = this["top"]();
  b = b["top"]();
  if (a === b) {
    return;
  }
  if (a["weight"] < b.weight) {
    b["adopt"](a);
  } else {
    a.adopt(b);
  }
};
function __DECODE_0__(sMKtTs, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 497;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(sMKtTs, key);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
