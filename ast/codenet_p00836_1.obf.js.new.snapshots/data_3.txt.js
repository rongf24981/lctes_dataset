(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("976843mwHjCW") / 1 + -parseInt("4vgtbnF") / 2 * (parseInt("283749YoMebT") / 3) + parseInt("4013480ywGaLF") / 4 + -parseInt("1895945iVxhGA") / 5 * (-parseInt("6oROJko") / 6) + parseInt("7483525qQhcrR") / 7 + parseInt("72LGfrGE") / 8 * (-parseInt("8739SsiUrk") / 9) + parseInt("20uAOHBZ") / 10 * (-parseInt("14379959MFfesX") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 616034);
function prime(max) {
  var arr = [];
  for (var i = 0; i <= max; i++) {
    arr[i] = i;
  }
  arr[0] = false;
  arr[1] = false;
  var sqrt = Math["floor"](Math["sqrt"](max));
  for (var i = 2; i <= sqrt; i++) {
    if (arr[i] == false) {
      continue;
    }
    for (var j = i + i; j <= max; j += i) {
      arr[j] = false;
    }
  }
  var result = [];
  for (var i = 0; i <= max; i++) {
    if (arr[i] !== false) {
      result.push(arr[i]);
    }
  }
  return result;
}
var p = prime(10000);
function __STRING_ARRAY__() {
  var _0x47b4ed = ["6oROJko", "8739SsiUrk", "7483525qQhcrR", "floor", "/dev/stdin", "some", "utf8", "4vgtbnF", "length", "14379959MFfesX", "sqrt", "map", "trim", "20uAOHBZ", "readFileSync", "283749YoMebT", "forEach", "72LGfrGE", "4013480ywGaLF", "1895945iVxhGA", "976843mwHjCW"];
  __STRING_ARRAY__ = function () {
    return _0x47b4ed;
  };
  return __STRING_ARRAY__();
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input["trim"]().split("\n")["map"](Number);
var cnt = [];
for (var i = 0; i <= 10000; i++) {
  cnt[i] = 0;
}
function __DECODE_0__(HdwesK, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 430;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(HdwesK, key);
}
p["forEach"](function (v, index) {
  cnt[v]++;
  for (var i = index + 1; i < p["length"]; i++) {
    v += p[i];
    if (v > 10000) {
      break;
    }
    cnt[v]++;
  }
});
arr["some"](function (v) {
  if (v == 0) {
    return true;
  }
  console.log(cnt[v]);
});
