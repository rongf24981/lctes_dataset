var a0_0x52a3f1 = __DECODE_0__;
function __STRING_ARRAY__() {
  var _0x2159f3 = ['171pSItAs', '1137070piVEQe', 'reverse', '130992LOPNRv', '3764690RjaFIM', 'Yes', '41127gqaWXh', '1388640FttFUx', 'readFileSync', '10898148LLGPGP', '7LkMDQW', 'join', 'sort', '33GohvuD', '116PejgdA', 'UTF-8', 'split', '481675Cazjal'];
  __STRING_ARRAY__ = function () {
    return _0x2159f3;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var _0x50d39f = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x50d39f(0x134)) / 0x1 + -parseInt(_0x50d39f(0x131)) / 0x2 * (parseInt(_0x50d39f(0x13b)) / 0x3) + parseInt(_0x50d39f(0x13c)) / 0x4 + parseInt(_0x50d39f(0x139)) / 0x5 + parseInt(_0x50d39f(0x12c)) / 0x6 * (parseInt(_0x50d39f(0x12d)) / 0x7) + parseInt(_0x50d39f(0x138)) / 0x8 * (-parseInt(_0x50d39f(0x135)) / 0x9) + -parseInt(_0x50d39f(0x136)) / 0xa * (parseInt(_0x50d39f(0x130)) / 0xb);
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
  var _0x4192a2 = __DECODE_0__;
  var lines = input[_0x4192a2(0x133)]('\x0a');
  var s = lines[0x0][_0x4192a2(0x133)]('');
  var t = lines[0x1][_0x4192a2(0x133)]('');
  s = s[_0x4192a2(0x12f)]()[_0x4192a2(0x12e)]();
  t = t[_0x4192a2(0x12f)]()[_0x4192a2(0x137)]()['join']();
  s < t ? console['log'](_0x4192a2(0x13a)) : console['log']('No');
}
main(require('fs')[a0_0x52a3f1(0x12b)]('/dev/stdin', a0_0x52a3f1(0x132)));
