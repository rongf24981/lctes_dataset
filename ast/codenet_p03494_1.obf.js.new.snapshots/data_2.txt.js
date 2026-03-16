function __DECODE_0__(UjonRX, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x184;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(UjonRX, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x189)) / 0x1 + parseInt(__DECODE_0__(0x191)) / 0x2 + -parseInt(__DECODE_0__(0x18f)) / 0x3 + parseInt(__DECODE_0__(0x18d)) / 0x4 * (parseInt(__DECODE_0__(0x184)) / 0x5) + -parseInt(__DECODE_0__(0x18e)) / 0x6 + parseInt(__DECODE_0__(0x187)) / 0x7 * (-parseInt(__DECODE_0__(0x18c)) / 0x8) + parseInt(__DECODE_0__(0x185)) / 0x9 * (parseInt(__DECODE_0__(0x192)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xf04f9);
function main(input) {
  var nums = input[__DECODE_0__(0x190)]('\x0a')[0x1][__DECODE_0__(0x190)]('\x20')[__DECODE_0__(0x186)](n => parseInt(n, 0xa));
  var count = 0x0;
  while (nums[__DECODE_0__(0x18a)](n => n % 0x2 === 0x0)) {
    count++;
    nums = nums['map'](n => n / 0x2);
  }
  console[__DECODE_0__(0x18b)](count);
}
main(require('fs')[__DECODE_0__(0x193)](__DECODE_0__(0x188), 'utf8'));
function __STRING_ARRAY__() {
  var _0xe4893d = ['log', '16irIETy', '38188qHDRDg', '10869558LAtlIO', '4663884tWgIKr', 'split', '1998736btDIKF', '5790940CdPuwx', 'readFileSync', '425FiYCzC', '72xQGMHk', 'map', '1493681vFtWgw', '/dev/stdin', '1666315SpLVrQ', 'every'];
  __STRING_ARRAY__ = function () {
    return _0xe4893d;
  };
  return __STRING_ARRAY__();
}
