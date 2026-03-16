function __DECODE_0__(uPiWEQ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 433;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(uPiWEQ, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("6355pvTVWD") / 1 + -parseInt("1001916HbGKxR") / 2 + -parseInt("1550706qbTDSn") / 3 + parseInt("139824CnpBXx") / 4 + parseInt("4278090VBgevB") / 5 + -parseInt("545046DdadBX") / 6 + parseInt("4954026CPEyiR") / 7;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 483236);
function Main(input) {
  var input = input["split"](" ");
  var n = parseInt(input[0], 10);
  var p = parseInt(input[1], 10);
  var arr = [];
  var counts = [];
  var ans = 1;
  var i = 2;
  while (i <= p) {
    while (p % i === 0) {
      arr["push"](i);
      p = Math["floor"](p / i);
    }
    i++;
  }
  for (var i = 0; i < arr["length"]; i++) {
    var key = arr[i];
    counts[key] = counts[key] ? counts[key] + 1 : 1;
  }
  var b = arr["filter"](function (x, i, self) {
    return self["indexOf"](x) === i;
  });
  for (var i = 0; i < b["length"]; i++) {
    if (counts[b[i]] >= n) {
      ans *= b[i];
    }
  }
  console["log"](ans);
}
function __STRING_ARRAY__() {
  var _0x500c58 = ["6355pvTVWD", "push", "4278090VBgevB", "545046DdadBX", "139824CnpBXx", "1001916HbGKxR", "log", "split", "filter", "length", "4954026CPEyiR", "floor", "indexOf", "utf8", "1550706qbTDSn"];
  __STRING_ARRAY__ = function () {
    return _0x500c58;
  };
  return __STRING_ARRAY__();
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
