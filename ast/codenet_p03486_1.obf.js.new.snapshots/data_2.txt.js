function __STRING_ARRAY__() {
  var _0x2159f3 = ['171pSItAs', '1137070piVEQe', 'reverse', '130992LOPNRv', '3764690RjaFIM', 'Yes', '41127gqaWXh', '1388640FttFUx', 'readFileSync', '10898148LLGPGP', '7LkMDQW', 'join', 'sort', '33GohvuD', '116PejgdA', 'UTF-8', 'split', '481675Cazjal'];
  __STRING_ARRAY__ = function () {
    return _0x2159f3;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x134)) / 0x1 + -parseInt(__DECODE_0__(0x131)) / 0x2 * (parseInt(__DECODE_0__(0x13b)) / 0x3) + parseInt(__DECODE_0__(0x13c)) / 0x4 + parseInt(__DECODE_0__(0x139)) / 0x5 + parseInt(__DECODE_0__(0x12c)) / 0x6 * (parseInt(__DECODE_0__(0x12d)) / 0x7) + parseInt(__DECODE_0__(0x138)) / 0x8 * (-parseInt(__DECODE_0__(0x135)) / 0x9) + -parseInt(__DECODE_0__(0x136)) / 0xa * (parseInt(__DECODE_0__(0x130)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xf1128);
function __DECODE_0__(Daghjz, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x12b;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(Daghjz, key);
}
function main(input) {
  var lines = input[__DECODE_0__(0x133)]('\x0a');
  var s = lines[0x0][__DECODE_0__(0x133)]('');
  var t = lines[0x1][__DECODE_0__(0x133)]('');
  s = s[__DECODE_0__(0x12f)]()[__DECODE_0__(0x12e)]();
  t = t[__DECODE_0__(0x12f)]()[__DECODE_0__(0x137)]()['join']();
  s < t ? console['log'](__DECODE_0__(0x13a)) : console['log']('No');
}
main(require('fs')[__DECODE_0__(0x12b)]('/dev/stdin', __DECODE_0__(0x132)));
