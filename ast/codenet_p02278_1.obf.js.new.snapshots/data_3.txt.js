function __STRING_ARRAY__() {
  var _0x273ceb = ["log", "readFileSync", "indexOf", "/dev/stdin", "1000536YMqKBc", "9593630LuqzVC", "length", "sort", "2898057zZBdPk", "input", "4132062enOzLm", "4jSjcoK", "7TSSFYO", "24865aQydMr", "57383TuGPNS", "180VSdkxw", "564HUEWEe", "map", "210288zQbgAe", "ascii", "concat", "split"];
  __STRING_ARRAY__ = function () {
    return _0x273ceb;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("57383TuGPNS") / 1 * (-parseInt("4jSjcoK") / 2) + parseInt("2898057zZBdPk") / 3 + parseInt("564HUEWEe") / 4 * (parseInt("24865aQydMr") / 5) + -parseInt("1000536YMqKBc") / 6 * (parseInt("7TSSFYO") / 7) + parseInt("210288zQbgAe") / 8 * (-parseInt("180VSdkxw") / 9) + -parseInt("9593630LuqzVC") / 10 + parseInt("4132062enOzLm") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 505781);
config = {
  input: "/dev/stdin",
  newline: "\n"
};
line = require("fs")["readFileSync"](config["input"], "ascii")["split"](config.newline, 2);
w = line[1]["split"](" ")["map"](Number);
sorted = []["concat"](w);
sorted["sort"](function (a, b) {
  return a - b;
});
function __DECODE_0__(tIyGGx, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 225;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(tIyGGx, key);
}
cost = 0;
for (i = w["length"] - 1; i >= 0; i--) {
  idx = w["indexOf"](sorted[i]);
  if (idx === i) {
    continue;
  }
  cost += w[i] + w[idx];
  tmp = w[i];
  w[i] = w[idx];
  w[idx] = tmp;
}
console["log"](cost);
