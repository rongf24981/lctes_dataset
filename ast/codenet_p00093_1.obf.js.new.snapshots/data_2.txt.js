(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x178)) / 0x1 + -parseInt(__DECODE_0__(0x17a)) / 0x2 + parseInt(__DECODE_0__(0x182)) / 0x3 + parseInt(__DECODE_0__(0x17b)) / 0x4 * (parseInt(__DECODE_0__(0x184)) / 0x5) + parseInt(__DECODE_0__(0x180)) / 0x6 * (parseInt(__DECODE_0__(0x185)) / 0x7) + -parseInt(__DECODE_0__(0x181)) / 0x8 * (-parseInt(__DECODE_0__(0x17c)) / 0x9) + -parseInt(__DECODE_0__(0x173)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x63c1d);
function __DECODE_0__(TiwlAJ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x172;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(TiwlAJ, key);
}
process[__DECODE_0__(0x183)][__DECODE_0__(0x17e)]();
process[__DECODE_0__(0x183)][__DECODE_0__(0x177)](__DECODE_0__(0x17f));
function __STRING_ARRAY__() {
  var _0x40ec19 = ['setEncoding', '217426xHjcJB', 'trim', '991396nGPnpv', '1878836TajHkW', '1148103iYiSgV', 'NA\x0a', 'resume', 'utf8', '106206GjMWbC', '8quwSgO', '1504062phVJwl', 'stdin', '5GGvTNx', '175zzTQWZ', '/dev/stdin', '4194260BXSrsq', 'length', 'readFileSync', 'log'];
  __STRING_ARRAY__ = function () {
    return _0x40ec19;
  };
  return __STRING_ARRAY__();
}
x = require('fs')[__DECODE_0__(0x175)](__DECODE_0__(0x172), __DECODE_0__(0x17f))['trim']()['split'](/\s/);
for (i = 0x0; i < x[__DECODE_0__(0x174)]; i += 0x2) {
  count = 0x0;
  y = x[i];
  if (y + x[i + 0x1] == 0x0) {
    break;
  }
  for (; y <= x[i + 0x1]; y++) {
    if (y % 0x190 == 0x0 || y % 0x4 == 0x0 && y % 0x64 != 0x0) {
      console[__DECODE_0__(0x176)](String(y)[__DECODE_0__(0x179)]());
      count++;
    }
  }
  if (i != 0x0 || i == x[__DECODE_0__(0x174)] - 0x1) {
    console['log']();
  }
  if (count == 0x0) {
    console[__DECODE_0__(0x176)](__DECODE_0__(0x17d));
  }
}
