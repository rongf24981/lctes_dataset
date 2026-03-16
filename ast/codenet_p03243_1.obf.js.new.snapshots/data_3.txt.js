function __DECODE_0__(XmmFzO, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 282;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(XmmFzO, key);
}
function __STRING_ARRAY__() {
  var _0x5e5585 = ["7596yAGKFs", "576275WKEAER", "66nwunIY", "length", "298502tupxhB", "readFileSync", "201278NcWcEf", "44DBOMPM", "trim", "6391FCHzdn", "1070ctPEQr", "4184wNMGCN", "utf8", "744410IcuPJG", "/dev/stdin", "55149HMcnKW"];
  __STRING_ARRAY__ = function () {
    return _0x5e5585;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("298502tupxhB") / 1 + parseInt("744410IcuPJG") / 2 + -parseInt("55149HMcnKW") / 3 * (parseInt("44DBOMPM") / 4) + parseInt("576275WKEAER") / 5 + -parseInt("66nwunIY") / 6 * (-parseInt("201278NcWcEf") / 7) + parseInt("4184wNMGCN") / 8 * (-parseInt("7596yAGKFs") / 9) + -parseInt("1070ctPEQr") / 10 * (parseInt("6391FCHzdn") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 396464);
function myout(text) {
  console.log(text);
}
function Main(input) {
  input = parseInt(input["trim"]());
  var check = [0, 111, 222, 333, 444, 555, 666, 777, 888, 999];
  for (var i = 0; i < check["length"] - 1; i++) {
    if (check[i] < input && check[i + 1] > input) {
      myout(check[i + 1]);
      return;
    } else if (check[i] == input) {
      myout(check[i]);
      return;
    }
  }
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
