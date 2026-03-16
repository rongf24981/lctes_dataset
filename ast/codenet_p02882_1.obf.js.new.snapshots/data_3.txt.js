function __DECODE_0__(ZfTUsB, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 174;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ZfTUsB, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1raxHjk") / 1 * (-parseInt("410066kxIoyP") / 2) + parseInt("817227DkTWiS") / 3 * (-parseInt("8jLFSnC") / 4) + parseInt("441670dizbvw") / 5 * (-parseInt("42JKovwK") / 6) + parseInt("47201phxKmt") / 7 * (-parseInt("312iiQtvC") / 8) + -parseInt("10465191Rwrjtx") / 9 * (-parseInt("10ISxIbL") / 10) + parseInt("11996116fdaFSw") / 11 + parseInt("24TYkEjB") / 12 * (-parseInt("2703480Kiyqwe") / 13);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 616335);
inp = require("fs")["readFileSync"]("/dev/stdin", "utf8")["trim"]()["split"]("\n");
l = inp["shift"]()["split"](" ");
a = l["shift"]() * 1;
b = l["shift"]() * 1;
x = l["shift"]() * 1;
l = 0;
function __STRING_ARRAY__() {
  var _0x5858a3 = ["8jLFSnC", "10ISxIbL", "readFileSync", "47201phxKmt", "2703480Kiyqwe", "trim", "410066kxIoyP", "817227DkTWiS", "toFixed", "42JKovwK", "24TYkEjB", "log", "10465191Rwrjtx", "tan", "1raxHjk", "441670dizbvw", "11996116fdaFSw", "shift", "split", "312iiQtvC"];
  __STRING_ARRAY__ = function () {
    return _0x5858a3;
  };
  return __STRING_ARRAY__();
}
r = 90;
mid = 45;
c = 0;
S = a * a * b;
if (S / 2 < x) {
  while (l < r) {
    s = S - a * a * Math["tan"](mid / 180 * Math.PI) / 2 * a;
    if (x < s) {
      l = mid;
    } else {
      r = mid;
    }
    mid = (l + r) / 2;
    c++;
    if (c > 200) {
      break;
    }
  }
  console["log"](mid["toFixed"](10));
} else {
  while (l < r) {
    s = b * b * Math["tan"](mid / 180 * Math.PI) / 2 * a;
    if (x < s) {
      r = mid;
    } else {
      l = mid;
    }
    mid = (l + r) / 2;
    c++;
    if (c > 200) {
      break;
    }
  }
  console["log"]((90 - mid)["toFixed"](10));
}
