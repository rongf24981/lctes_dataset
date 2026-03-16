(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1786015WgJqIw") / 1 + -parseInt("3438124looGCd") / 2 + parseInt("5468538hGjRya") / 3 + -parseInt("4085284HKjPBX") / 4 + -parseInt("6531305sUEjpj") / 5 + parseInt("18PgaUyV") / 6 * (-parseInt("4346405vlmxcV") / 7) + parseInt("232aBJEvy") / 8 * (parseInt("1016397BHHOHI") / 9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 974529);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["replace"](/\n$/, "").split("\n");
function __DECODE_0__(nChumI, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 235;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(nChumI, key);
}
function __STRING_ARRAY__() {
  var _0x4d4f8e = ["replace", "/dev/stdin", "utf8", "readFileSync", "18PgaUyV", "4346405vlmxcV", "log", "6531305sUEjpj", "1786015WgJqIw", "3438124looGCd", "split", "5468538hGjRya", "1016397BHHOHI", "4085284HKjPBX", "232aBJEvy"];
  __STRING_ARRAY__ = function () {
    return _0x4d4f8e;
  };
  return __STRING_ARRAY__();
}
while (true) {
  var arr = Arr.shift()["split"](" ").map(Number);
  if (arr[0] == 0) {
    break;
  }
  var q1 = arr[0];
  var b = arr[1];
  var c1 = arr[2];
  var c2 = arr[3];
  var q2 = arr[4];
  var x = 0;
  var y = 0;
  var flag = true;
  while (true) {
    if (b >= c1 * (x + 1) && x + 1 <= q2) {
      x++;
    } else {
      break;
    }
  }
  while (true) {
    if (b >= c1 * x + c2 * (y + 1)) {
      y++;
    } else {
      break;
    }
  }
  while (true) {
    if (x == 0) {
      flag = false;
      break;
    }
    if (c1 * x + c2 * y > b) {
      flag = false;
      break;
    }
    if (q1 > x + y) {
      x--;
      while (true) {
        if (b >= c1 * x + c2 * (y + 1)) {
          y++;
        } else {
          break;
        }
      }
    } else {
      break;
    }
  }
  console["log"](flag ? x + " " + y : "NA");
}
