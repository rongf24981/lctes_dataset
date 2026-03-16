function __STRING_ARRAY__() {
  var _0x1f453d = ["concat", "3455864hByDUc", "1vGNpJU", "67614yOJHCB", "888682CYiRqJ", "56rbxUoR", "split", "push", "3553530CjtUZG", "input", "5poETKk", "8694657gJqSTG", "readFileSync", "newline", "513224ByIIxo", "max", "5550084aAHlvZ"];
  __STRING_ARRAY__ = function () {
    return _0x1f453d;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1vGNpJU") / 1 * (parseInt("888682CYiRqJ") / 2) + parseInt("67614yOJHCB") / 3 + parseInt("3455864hByDUc") / 4 * (-parseInt("5poETKk") / 5) + parseInt("5550084aAHlvZ") / 6 + parseInt("56rbxUoR") / 7 * (-parseInt("513224ByIIxo") / 8) + parseInt("8694657gJqSTG") / 9 + -parseInt("3553530CjtUZG") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 625423);
config = {
  input: "/dev/stdin",
  newline: "\n"
};
const MAX = 50;
map0 = [];
for (i = 0; i <= MAX; i++) {
  map0["push"](0);
}
map1 = []["concat"](map0);
map2 = []["concat"](map1);
map3 = []["concat"](map2);
function __DECODE_0__(QZOaAH, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 439;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(QZOaAH, key);
}
for (i = 0; i <= 9; i++) {
  map0[i] = 1;
}
function expand_map(map, smaller) {
  for (var i = 0; i < MAX; i++) {
    for (var j = Math["max"](0, i - 9); j <= i; j++) {
      map[i] += smaller[j];
    }
  }
}
expand_map(map1, map0);
expand_map(map2, map1);
expand_map(map3, map2);
require("fs")["readFileSync"](config["input"], "ascii").trim()["split"](config["newline"]).forEach(function (line) {
  console.log(map3[parseInt(line)]);
});
