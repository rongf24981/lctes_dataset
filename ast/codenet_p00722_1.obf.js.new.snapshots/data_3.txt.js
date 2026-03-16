(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("473999HiPIqq") / 1 + parseInt("12pvlgwl") / 2 * (parseInt("334317eZuxJh") / 3) + -parseInt("2212784oSuttM") / 4 + parseInt("464705kPhTEP") / 5 * (parseInt("42KBPoLu") / 6) + parseInt("1992851TDedRA") / 7 + parseInt("3804920HVgvtT") / 8 + -parseInt("5662089sbuljC") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 423213);
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
  var result = {};
  for (var i = 0; i <= max; i++) {
    if (arr[i] !== false) {
      result[arr[i]] = true;
    }
  }
  return result;
}
function __DECODE_0__(QEbEYe, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 474;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(QEbEYe, key);
}
var p = prime(999999);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __STRING_ARRAY__() {
  var _0x2dd763 = ["shift", "464705kPhTEP", "3804920HVgvtT", "5662089sbuljC", "/dev/stdin", "12pvlgwl", "473999HiPIqq", "42KBPoLu", "2212784oSuttM", "floor", "334317eZuxJh", "trim", "map", "readFileSync", "utf8", "1992851TDedRA", "sqrt"];
  __STRING_ARRAY__ = function () {
    return _0x2dd763;
  };
  return __STRING_ARRAY__();
}
var Arr = input["trim"]().split("\n");
while (true) {
  var v = Arr["shift"]();
  if (v == "0 0 0") {
    break;
  }
  var adn = v.split(" ")["map"](Number);
  var cnt = 0;
  var sum = adn[0] - adn[1];
  while (cnt != adn[2]) {
    sum += adn[1];
    if (p.hasOwnProperty(sum)) {
      cnt++;
    }
  }
  console.log(sum);
}
