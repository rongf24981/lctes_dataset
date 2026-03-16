function __DECODE_0__(ErFWti, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 465;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ErFWti, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("121154dcoYzF") / 1 + -parseInt("28KLNBko") / 2 * (-parseInt("106713oMAkyD") / 3) + -parseInt("4aKKijr") / 4 * (parseInt("2059165jGenDQ") / 5) + parseInt("2098692etgPub") / 6 + parseInt("1929018WhdBJd") / 7 + -parseInt("351416IzeBOw") / 8 * (-parseInt("63rfNkBL") / 9) + -parseInt("30yClNoZ") / 10 * (parseInt("3110613AcoPXF") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 291811);
const main = inputs => {
  var H = inputs[0]["split"](" ")[0] - 0;
  var W = inputs[0].split(" ")[1] - 0;
  var map = {};
  var ymap = {};
  var tmap = {};
  var keys = [];
  for (var h = 0; h < H; h++) {
    map[h] = inputs[h + 1];
    for (var w = 0; w < W; w++) {
      var ukey = h - 1 + "_" + w;
      var lkey = h + "_" + (w - 1);
      var key = h + "_" + w;
      if (map[h][w] == "#") {} else {
        keys["push"](key);
        if (ymap[lkey]) {
          ymap[key] = ymap[lkey];
          ymap[key].n++;
        } else {
          ymap[key] = {
            n: 1
          };
        }
        if (tmap[ukey]) {
          tmap[key] = tmap[ukey];
          tmap[key].n++;
        } else {
          tmap[key] = {
            n: 1
          };
        }
      }
    }
  }
  var ans = 0;
  var key;
  for (var i = keys["length"] - 1; i >= 0; i--) {
    key = keys[i];
    ans = Math["max"](ans, tmap[key].n + ymap[key].n - 1);
    if (ans == H + W - 1) {
      break;
    }
  }
  console["log"](ans);
};
main(require("fs")["readFileSync"]("/dev/stdin", "UTF-8")["trim"]()["split"]("\n"));
function __STRING_ARRAY__() {
  var _0x3f3e01 = ["max", "3110613AcoPXF", "split", "121154dcoYzF", "2098692etgPub", "30yClNoZ", "readFileSync", "63rfNkBL", "106713oMAkyD", "log", "trim", "2059165jGenDQ", "28KLNBko", "1929018WhdBJd", "push", "351416IzeBOw", "4aKKijr", "/dev/stdin", "length"];
  __STRING_ARRAY__ = function () {
    return _0x3f3e01;
  };
  return __STRING_ARRAY__();
}
