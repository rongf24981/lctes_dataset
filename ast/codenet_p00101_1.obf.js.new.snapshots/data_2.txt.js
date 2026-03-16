function __DECODE_0__(EmpLlG, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x169;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(EmpLlG, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x173)) / 0x1 + -parseInt(__DECODE_0__(0x176)) / 0x2 * (parseInt(__DECODE_0__(0x16f)) / 0x3) + parseInt(__DECODE_0__(0x171)) / 0x4 + parseInt(__DECODE_0__(0x172)) / 0x5 * (parseInt(__DECODE_0__(0x16e)) / 0x6) + -parseInt(__DECODE_0__(0x174)) / 0x7 + parseInt(__DECODE_0__(0x177)) / 0x8 + parseInt(__DECODE_0__(0x16c)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xf17ec);
var input = require('fs')['readFileSync'](__DECODE_0__(0x175), __DECODE_0__(0x170))[__DECODE_0__(0x16a)]();
input = input[__DECODE_0__(0x16d)](/\n/);
for (let i = 0x1; i < input['length']; i++) {
  console['log'](input[i][__DECODE_0__(0x16b)](__DECODE_0__(0x169), 'Hoshina'));
}
function __STRING_ARRAY__() {
  var _0x4cf167 = ['trim', 'replace', '11979315UNxSNM', 'split', '78xyIUED', '3dwDSAH', 'utf8', '368388ypwKeV', '422185eODMlJ', '1065014VFgjsn', '4324509wUapBa', '/dev/stdin', '748758jNlTNc', '4204248pAnYlu', 'Hoshino'];
  __STRING_ARRAY__ = function () {
    return _0x4cf167;
  };
  return __STRING_ARRAY__();
}
