function __STRING_ARRAY__() {
  var _0x225cfb = ["trim", "readFileSync", "min", "length", "11285505NJvcli", "/dev/stdin", "11RJVuvu", "396735qWDcSr", "map", "5695004XWbteQ", "1888384vPMFOj", "57910Iqzssn", "toString", "utf8", "515785VMJYMO", "12PPrBIO", "4856320CWZmrz"];
  __STRING_ARRAY__ = function () {
    return _0x225cfb;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("11RJVuvu") / 1 * (parseInt("57910Iqzssn") / 2) + parseInt("396735qWDcSr") / 3 + -parseInt("4856320CWZmrz") / 4 + -parseInt("515785VMJYMO") / 5 * (-parseInt("12PPrBIO") / 6) + parseInt("5695004XWbteQ") / 7 + -parseInt("1888384vPMFOj") / 8 + parseInt("11285505NJvcli") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 637443);
function myout(text) {
  console.log(text);
}
function Main(input) {
  input = parseInt(input);
  var output = 1000000000;
  for (var i = 1; i <= 10; i++) {
    var tmp = (input * i)["toString"]().split("")["map"](a => Number(a));
    var check = 0;
    for (var j = 0; j < tmp["length"]; j++) {
      check += tmp[j];
    }
    output = Math["min"](output, check);
  }
  myout(output);
}
function __DECODE_0__(ffBEIE, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 399;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ffBEIE, key);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8")["trim"]());
