function __STRING_ARRAY__() {
  const _0x30031a = ['6cPgtFo', '140967vfReHG', '7144123wtRwuY', '26ohVefK', '4878260aQpGFF', '24mSArHH', 'utf8', '33769wUahPC', '2292381xGTMdf', '5045359wEtnCS', 'log', '4410UKFTId', '372sQRJRW', 'slice'];
  __STRING_ARRAY__ = function () {
    return _0x30031a;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x191)) / 0x1 * (parseInt(__DECODE_0__(0x18d)) / 0x2) + -parseInt(__DECODE_0__(0x184)) / 0x3 + -parseInt(__DECODE_0__(0x188)) / 0x4 * (parseInt(__DECODE_0__(0x187)) / 0x5) + parseInt(__DECODE_0__(0x18a)) / 0x6 * (parseInt(__DECODE_0__(0x18c)) / 0x7) + -parseInt(__DECODE_0__(0x18f)) / 0x8 * (parseInt(__DECODE_0__(0x18b)) / 0x9) + -parseInt(__DECODE_0__(0x18e)) / 0xa + parseInt(__DECODE_0__(0x185)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x832c7);
function main(input) {
  const input_array = input['split']('\x0a');
  const coins_count = input_array[__DECODE_0__(0x189)](0x0, 0x3);
  const desired_sum = parseInt(input_array[__DECODE_0__(0x189)](-0x1), 0xa);
  var answer = 0x0;
  for (i = 0x0; i <= parseInt(coins_count[0x0], 0xa); i++) {
    for (j = 0x0; j <= parseInt(coins_count[0x1], 0xa); j++) {
      for (k = 0x0; k <= parseInt(coins_count[0x2], 0xa); k++) {
        if (0x1f4 * i + 0x64 * j + 0x32 * k == desired_sum) {
          answer++;
        }
      }
    }
  }
  console[__DECODE_0__(0x186)](answer);
}
function __DECODE_0__(KwzPDM, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x184;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(KwzPDM, key);
}
main(require('fs')['readFileSync']('/dev/stdin', __DECODE_0__(0x190)));
