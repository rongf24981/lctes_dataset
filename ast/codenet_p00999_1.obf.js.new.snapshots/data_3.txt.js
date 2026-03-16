(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("106547UpXhkZ") / 1 + parseInt("995732tbNZWr") / 2 + parseInt("112881kmZqvx") / 3 + -parseInt("4amnsOW") / 4 * (parseInt("1477955eQwwXM") / 5) + parseInt("2461620urVYJF") / 6 + -parseInt("7jkXRuU") / 7 * (-parseInt("7722064jntStH") / 8) + -parseInt("8554599wnGAIi") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 558372);
function __DECODE_0__(QjZpRV, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 432;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(QjZpRV, key);
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input.trim()["split"]("\n");
function __STRING_ARRAY__() {
  var _0x2c0bc3 = ["min", "shift", "map", "995732tbNZWr", "readFileSync", "106547UpXhkZ", "log", "/dev/stdin", "split", "utf8", "4amnsOW", "8554599wnGAIi", "7722064jntStH", "floor", "7jkXRuU", "112881kmZqvx", "1477955eQwwXM", "2461620urVYJF", "0 0 0 0 0"];
  __STRING_ARRAY__ = function () {
    return _0x2c0bc3;
  };
  return __STRING_ARRAY__();
}
while (true) {
  var abc = arr.shift();
  if (abc == "0 0 0 0 0") {
    break;
  }
  var ary = (abc + " " + arr["shift"]())["split"](" ")["map"](Number);
  (function (a, b, c, d, e, na, nb, nc) {
    var ans = Math["floor"](nc / d) * d * e;
    var nokori = nc % d;
    var A = function (ans) {
      ans += nokori * c;
      ans += na * a + nb * b;
      return ans;
    }(ans);
    var B = function (ans, na, nb) {
      if (ans == 0) {
        var yobun = nokori == 0 ? 0 : d - nokori;
        if (yobun > 0) {
          ans += e * d;
        }
        while (yobun--) {
          if (nb > 0) {
            nb--;
          } else if (na > 0) {
            na--;
          }
        }
        ans += na * a + nb * b;
        return ans;
      }
      if (ans != 0) {
        return na * a + nb * b + nc * e;
      }
    }(ans, na, nb);
    console["log"](Math["min"](A, B));
  }).apply(null, ary);
}
