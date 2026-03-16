function __DECODE_0__(dRIXKI, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 401;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(dRIXKI, key);
}
function __STRING_ARRAY__() {
  var _0x253bf8 = ["log", "487408uEodUv", "6SFyezU", "utf8", "738896elGxmb", "10yjkLwk", "readFileSync", "/dev/stdin", "3980943lLQaeo", "2630136rPYUMl", "every", "forEach", "0 0", "3PxrJsY", "map", "3635995uqcMVd", "167748UiSwPD", "split", "Yes", "1948552hkiwEa", "shift"];
  __STRING_ARRAY__ = function () {
    return _0x253bf8;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("3PxrJsY") / 1 * (parseInt("487408uEodUv") / 2) + parseInt("2630136rPYUMl") / 3 + -parseInt("738896elGxmb") / 4 + -parseInt("3635995uqcMVd") / 5 * (-parseInt("6SFyezU") / 6) + -parseInt("167748UiSwPD") / 7 + parseInt("1948552hkiwEa") / 8 + parseInt("3980943lLQaeo") / 9 * (-parseInt("10yjkLwk") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 465353);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input.replace(/\n$/, "")["split"]("\n");
while (true) {
  var NK = Arr["shift"]();
  if (NK == "0 0") {
    break;
  }
  var nk = NK.split(" ")["map"](Number);
  var S = Arr["shift"]()["split"](" ").map(Number);
  for (var i = 0; i < nk[0]; i++) {
    var B = Arr.shift()["split"](" ")["map"](Number);
    B["forEach"](function (v, index) {
      S[index] -= v;
    });
  }
  var flag = S["every"](function (v) {
    return v >= 0;
  });
  console["log"](flag ? "Yes" : "No");
}
