function __STRING_ARRAY__() {
  var _0x225cfb = ['trim', 'readFileSync', 'min', 'length', '11285505NJvcli', '/dev/stdin', '11RJVuvu', '396735qWDcSr', 'map', '5695004XWbteQ', '1888384vPMFOj', '57910Iqzssn', 'toString', 'utf8', '515785VMJYMO', '12PPrBIO', '4856320CWZmrz'];
  __STRING_ARRAY__ = function () {
    return _0x225cfb;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x194)) / 0x1 * (parseInt(__DECODE_0__(0x199)) / 0x2) + parseInt(__DECODE_0__(0x195)) / 0x3 + -parseInt(__DECODE_0__(0x19e)) / 0x4 + -parseInt(__DECODE_0__(0x19c)) / 0x5 * (-parseInt(__DECODE_0__(0x19d)) / 0x6) + parseInt(__DECODE_0__(0x197)) / 0x7 + -parseInt(__DECODE_0__(0x198)) / 0x8 + parseInt(__DECODE_0__(0x192)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x9ba03);
function myout(text) {
  console['log'](text);
}
function Main(input) {
  input = parseInt(input);
  var output = 0x3b9aca00;
  for (var i = 0x1; i <= 0xa; i++) {
    var tmp = (input * i)[__DECODE_0__(0x19a)]()['split']('')[__DECODE_0__(0x196)](a => Number(a));
    var check = 0x0;
    for (var j = 0x0; j < tmp[__DECODE_0__(0x191)]; j++) {
      check += tmp[j];
    }
    output = Math[__DECODE_0__(0x190)](output, check);
  }
  myout(output);
}
function __DECODE_0__(ffBEIE, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x18f;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ffBEIE, key);
}
Main(require('fs')[__DECODE_0__(0x18f)](__DECODE_0__(0x193), __DECODE_0__(0x19b))[__DECODE_0__(0x19f)]());
