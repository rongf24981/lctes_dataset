(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x163)) / 0x1 + -parseInt(__DECODE_0__(0x160)) / 0x2 + -parseInt(__DECODE_0__(0x15a)) / 0x3 * (-parseInt(__DECODE_0__(0x15e)) / 0x4) + parseInt(__DECODE_0__(0x162)) / 0x5 + parseInt(__DECODE_0__(0x15f)) / 0x6 + parseInt(__DECODE_0__(0x15d)) / 0x7 * (-parseInt(__DECODE_0__(0x168)) / 0x8) + parseInt(__DECODE_0__(0x15b)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xb425b);
function __STRING_ARRAY__() {
  var _0x40e9d3 = ['196RecdCS', '3431004QwHblK', '1767934hMdosu', 'fill', '2108440FhXYMw', '966603xnimOG', '/dev/stdin', 'utf8', 'join', 'readFileSync', '7160AXYSfG', '51627ZVvuEJ', '8102340eRZGUg', 'log', '1162kwroSJ'];
  __STRING_ARRAY__ = function () {
    return _0x40e9d3;
  };
  return __STRING_ARRAY__();
}
function main(input) {
  var x = 'x';
  var output = Array(input['length'])[__DECODE_0__(0x161)](x);
  console[__DECODE_0__(0x15c)](output[__DECODE_0__(0x166)](''));
}
function __DECODE_0__(XXBRDD, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x15a;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(XXBRDD, key);
}
main(require('fs')[__DECODE_0__(0x167)](__DECODE_0__(0x164), __DECODE_0__(0x165)));
