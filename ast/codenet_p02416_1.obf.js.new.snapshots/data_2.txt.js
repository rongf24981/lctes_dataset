(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x106)) / 0x1 * (parseInt(__DECODE_0__(0xf9)) / 0x2) + -parseInt(__DECODE_0__(0xf1)) / 0x3 + parseInt(__DECODE_0__(0x102)) / 0x4 * (parseInt(__DECODE_0__(0x101)) / 0x5) + -parseInt(__DECODE_0__(0xf8)) / 0x6 * (-parseInt(__DECODE_0__(0x104)) / 0x7) + -parseInt(__DECODE_0__(0xf3)) / 0x8 + -parseInt(__DECODE_0__(0xf4)) / 0x9 + parseInt(__DECODE_0__(0x105)) / 0xa * (parseInt(__DECODE_0__(0x103)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x89456);
function __STRING_ARRAY__() {
  const _0x210693 = ['resume', '836238PdkVfV', '2590qyPOUH', 'data', 'slice', 'map', 'reduce', 'join', 'log', 'utf8', '1106305TKYAvL', '4JGJbpX', '1615339FpfuvB', '42APdLgK', '30fhcXjN', '719UgKszs', 'setEncoding', '741123ryhXIj', 'trim', '6694088nBxaXs', '7047783AVJDry', 'split', 'stdin'];
  __STRING_ARRAY__ = function () {
    return _0x210693;
  };
  return __STRING_ARRAY__();
}
let content = '';
process['stdin'][__DECODE_0__(0xf7)]();
process[__DECODE_0__(0xf6)][__DECODE_0__(0xf0)](__DECODE_0__(0x100));
function __DECODE_0__(aUrnlc, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xf0;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(aUrnlc, key);
}
process[__DECODE_0__(0xf6)]['on'](__DECODE_0__(0xfa), buf => {
  content += buf;
});
process['stdin']['on']('end', () => {
  const lines = content[__DECODE_0__(0xf2)]()[__DECODE_0__(0xf5)]('\x0a')[__DECODE_0__(0xfb)](0x0, -0x1);
  const result = lines['map'](num => num[__DECODE_0__(0xf5)]('')[__DECODE_0__(0xfc)](n => parseInt(n, 0xa))[__DECODE_0__(0xfd)]((prev, cur) => prev + cur));
  console[__DECODE_0__(0xff)](result[__DECODE_0__(0xfe)]('\x0a'));
});
