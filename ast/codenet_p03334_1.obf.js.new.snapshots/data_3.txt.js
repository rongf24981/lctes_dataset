(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("84316SosWxW") / 1 + -parseInt("122504OgmRge") / 2 + parseInt("363QcaTsV") / 3 * (-parseInt("2348GaFULy") / 4) + -parseInt("5yxnpes") / 5 * (-parseInt("771510nRRlFT") / 6) + -parseInt("58107FKjnVp") / 7 + parseInt("8oeyUml") / 8 * (-parseInt("483453AYuFpZ") / 9) + parseInt("3169980HztnPK") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 166970);
function Main(s) {
  s = s["split"](" ")["map"](a => +a);
  var n = s[0];
  var a = calc(s[1]);
  var b = calc(s[2]);
  var ans = [];
  var k = 0;
  for (var i = 0; i < n * 2; i++) {
    for (var j = 0; j < n * 2; j++) {
      if (f(a, i, j) && f(b, i, j)) {
        ans[k++] = i + " " + j;
      }
      if (k === n * n) {
        console.log(ans.join("\n"));
        return;
      }
    }
  }
}
function __DECODE_0__(QVXZYw, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 489;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(QVXZYw, key);
}
function __STRING_ARRAY__() {
  var _0x3a147d = ["5yxnpes", "3169980HztnPK", "58107FKjnVp", "readFileSync", "483453AYuFpZ", "2348GaFULy", "map", "/dev/stdin", "84316SosWxW", "8oeyUml", "122504OgmRge", "split", "363QcaTsV", "771510nRRlFT", "floor"];
  __STRING_ARRAY__ = function () {
    return _0x3a147d;
  };
  return __STRING_ARRAY__();
}
function calc(n) {
  var s = 1;
  while ((n & 3) === 0) {
    s++;
    n >>>= 2;
  }
  return [s, n & 1];
}
function f(s, y, x) {
  y = Math["floor"](y / s[0]);
  if (!s[1]) {
    return !(y & 1);
  }
  x = Math["floor"](x / s[0]);
  return !(x + y & 1);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
