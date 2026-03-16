(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("705020fSjhzg") / 1 + parseInt("4UFgtRG") / 2 * (-parseInt("1096734xAQwBF") / 3) + -parseInt("296nWqnMT") / 4 * (parseInt("1860cqXJqY") / 5) + parseInt("3413490LtxDTS") / 6 * (parseInt("7mTIWrx") / 7) + parseInt("8EJEXKO") / 8 * (-parseInt("3960279ZoKkNL") / 9) + -parseInt("4207940BFJKER") / 10 + parseInt("7973735DMTSMN") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 379311);
function __DECODE_0__(qRBKsP, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 215;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(qRBKsP, key);
}
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var arr = input["trim"]()["split"]("\n").map(Number);
arr["some"](function (v) {
  if (v == 0) {
    return true;
  }
  var cnt = 0;
  for (var a = 1; a <= 181; a++) {
    var A = a * a;
    if (v < A) {
      break;
    }
    if (A == v) {
      cnt++;
    }
    for (var b = a; b <= 181; b++) {
      var B = A + b * b;
      if (v < B) {
        break;
      }
      if (B == v) {
        cnt++;
      }
      for (var c = b; c <= 181; c++) {
        var C = B + c * c;
        if (v < C) {
          break;
        }
        if (C == v) {
          cnt++;
        }
        for (var d = c; d <= 181; d++) {
          var D = C + d * d;
          if (v < D) {
            break;
          }
          if (D == v) {
            cnt++;
          }
        }
      }
    }
  }
  console["log"](cnt);
});
function __STRING_ARRAY__() {
  var _0x433c1f = ["1860cqXJqY", "split", "296nWqnMT", "7mTIWrx", "8EJEXKO", "4UFgtRG", "some", "1096734xAQwBF", "3960279ZoKkNL", "trim", "3413490LtxDTS", "/dev/stdin", "7973735DMTSMN", "705020fSjhzg", "log", "4207940BFJKER"];
  __STRING_ARRAY__ = function () {
    return _0x433c1f;
  };
  return __STRING_ARRAY__();
}
