(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1MVZANj") / 1 * (-parseInt("3807644hnPTjO") / 2) + parseInt("5099154YEnioD") / 3 + parseInt("456236WligjL") / 4 * (parseInt("15ZnDFpM") / 5) + parseInt("90YbuGJH") / 6 * (parseInt("652722tYjwhp") / 7) + -parseInt("10321192oKRZTA") / 8 * (-parseInt("9HqRjvu") / 9) + parseInt("5649630DcFvOb") / 10 + -parseInt("26622332yWSzxN") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 971663);
m = ("" + require("fs")["readFileSync"](0)).split`
`;
n = m[a = 0];
s = m[1];
function __STRING_ARRAY__() {
  var _0x5c48c4 = ["readFileSync", "652722tYjwhp", "10321192oKRZTA", "15ZnDFpM", "90YbuGJH", "1MVZANj", "9HqRjvu", "26622332yWSzxN", "3807644hnPTjO", "5099154YEnioD", "456236WligjL", "5649630DcFvOb"];
  __STRING_ARRAY__ = function () {
    return _0x5c48c4;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(BMqjku, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 179;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(BMqjku, key);
}
for (b = 1 << n; b--;) {
  u = 0;
  for (i = n; i--;) {
    u = b & 1 << i ? s[i] + u : u + s[i];
  }
  m[u] = -~m[u];
}
for (b = 1 << n; b--;) {
  u = 0;
  for (i = n; i--;) {
    u = b & 1 << i ? s[n * 2 + ~i] + u : u + s[n * 2 + ~i];
  }
  a += ~~m[u];
}
console.log(a);
