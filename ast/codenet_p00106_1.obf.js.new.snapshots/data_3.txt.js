(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("958983nudqFs") / 1 + -parseInt("10eMtgNr") / 2 * (parseInt("351126yExyvU") / 3) + -parseInt("2452sjNZeY") / 4 * (parseInt("2745cQgfzK") / 5) + parseInt("2377428yULNYT") / 6 + -parseInt("7803040suwcVs") / 7 + -parseInt("6644392TOxrym") / 8 + parseInt("21489309hQFIjq") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 875906);
var obj = {};
for (var i = 0; i <= 25; i++) {
  for (var j = 0; j <= 16; j++) {
    for (var k = 0; k <= 10; k++) {
      var weight = i * 200 + j * 300 + k * 500;
      if (weight > 5000) {
        continue;
      }
      var money = 0;
      money += Math["floor"](i / 5) * 1520;
      money += Math["floor"](j / 4) * 1870;
      money += Math["floor"](k / 3) * 2244;
      money += i % 5 * 380;
      money += j % 4 * 550;
      money += k % 3 * 850;
      if (obj["hasOwnProperty"](weight)) {
        obj[weight] = Math["min"](obj[weight], money);
      } else {
        obj[weight] = money;
      }
    }
  }
}
function __DECODE_0__(QRXHOd, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 204;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(QRXHOd, key);
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input.trim()["split"]("\n");
function __STRING_ARRAY__() {
  var _0x113935 = ["2745cQgfzK", "10eMtgNr", "6644392TOxrym", "958983nudqFs", "readFileSync", "hasOwnProperty", "2377428yULNYT", "/dev/stdin", "split", "2452sjNZeY", "min", "shift", "floor", "21489309hQFIjq", "7803040suwcVs", "351126yExyvU"];
  __STRING_ARRAY__ = function () {
    return _0x113935;
  };
  return __STRING_ARRAY__();
}
while (true) {
  var n = Arr["shift"]() - 0;
  if (n == 0) {
    break;
  }
  console.log(obj[n]);
}
