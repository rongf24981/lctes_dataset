function __DECODE_0__(yPEpeI, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x15a;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(yPEpeI, key);
}
function __STRING_ARRAY__() {
  const _0x3ea689 = ['253lRgtdV', '3377586btrHAt', '2588648JrmaaU', '115tBMgPd', '763188nEGOtx', '2018511WxQdMN', '244vYMavJ', '98586UPUtHX', '10QDMPgn', '7LqSXMb', 'utf8', '9283yhsqgK', '/dev/stdin', '4ltdVMp', 'split', '13zyixYK', '12481742KFAgBt', 'join', 'readFileSync'];
  __STRING_ARRAY__ = function () {
    return _0x3ea689;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x165)) / 0x1 * (-parseInt(__DECODE_0__(0x160)) / 0x2) + -parseInt(__DECODE_0__(0x15b)) / 0x3 * (parseInt(__DECODE_0__(0x167)) / 0x4) + -parseInt(__DECODE_0__(0x15d)) / 0x5 * (parseInt(__DECODE_0__(0x161)) / 0x6) + parseInt(__DECODE_0__(0x163)) / 0x7 * (parseInt(__DECODE_0__(0x15c)) / 0x8) + parseInt(__DECODE_0__(0x15f)) / 0x9 * (parseInt(__DECODE_0__(0x162)) / 0xa) + parseInt(__DECODE_0__(0x15a)) / 0xb * (parseInt(__DECODE_0__(0x15e)) / 0xc) + parseInt(__DECODE_0__(0x169)) / 0xd * (-parseInt(__DECODE_0__(0x16a)) / 0xe);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xb693b);
function main(lines) {
  const n = lines[__DECODE_0__(0x168)]('\x0a')[0x0];
  const An = lines['split']('\x0a')[0x1][__DECODE_0__(0x168)]('\x20')['map'](Number);
  console['log'](An[__DECODE_0__(0x16b)]('\x20'));
  for (let i = 0x1; i < n; i++) {
    value = An[i];
    let j = i - 0x1;
    while (j >= 0x0 && value < An[j]) {
      An[j + 0x1] = An[j];
      j--;
    }
    An[j + 0x1] = value;
    console['log'](An[__DECODE_0__(0x16b)]('\x20'));
  }
}
main(require('fs')[__DECODE_0__(0x16c)](__DECODE_0__(0x166), __DECODE_0__(0x164)));
