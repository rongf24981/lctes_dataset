function __DECODE_0__(rUkREt, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 340;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(rUkREt, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("12603lQiERA") / 1 * (-parseInt("62NXBNkJ") / 2) + -parseInt("3YNPRjV") / 3 * (-parseInt("515196nZYRsa") / 4) + parseInt("194400fggwSk") / 5 + parseInt("112752afhYbe") / 6 * (parseInt("7KbbTof") / 7) + parseInt("2074440MaUxQy") / 8 + parseInt("252TSwskA") / 9 * (-parseInt("34410esezMY") / 10) + -parseInt("99vmySeH") / 11 * (-parseInt("517596Ghwuma") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 346932);
function search(h) {
  var is_start = false;
  for (var i = 0; i < h["length"]; i++) {
    if (is_start) {
      if (h[i] == 0) {
        break;
      }
      h[i] -= 1;
    } else {
      if (h[i] == 0) {
        continue;
      }
      is_start = true;
      h[i] -= 1;
    }
  }
  return h;
}
function main(arg) {
  var h = arg["split"]("\n")[1]["split"](" ").map(e => Number(e));
  var arr = [];
  var i = 0;
  for (i = 1;; i++) {
    h = search(h);
    if (h[0] == 0) {
      var b = h["filter"]((x, i, self) => self.indexOf(x) === i);
      if (b["length"] == 1) {
        break;
      }
    }
  }
  console["log"](i);
}
function __STRING_ARRAY__() {
  var _0x45e31b = ["62NXBNkJ", "log", "517596Ghwuma", "/dev/stdin", "7KbbTof", "34410esezMY", "2074440MaUxQy", "utf8", "length", "515196nZYRsa", "194400fggwSk", "99vmySeH", "112752afhYbe", "252TSwskA", "12603lQiERA", "filter", "3YNPRjV", "split"];
  __STRING_ARRAY__ = function () {
    return _0x45e31b;
  };
  return __STRING_ARRAY__();
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
