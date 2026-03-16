function __DECODE_0__(MQboTR, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x195;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(MQboTR, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x19d)) / 0x1 + -parseInt(__DECODE_0__(0x1a0)) / 0x2 + -parseInt(__DECODE_0__(0x19f)) / 0x3 + -parseInt(__DECODE_0__(0x197)) / 0x4 + -parseInt(__DECODE_0__(0x19a)) / 0x5 + -parseInt(__DECODE_0__(0x19e)) / 0x6 + parseInt(__DECODE_0__(0x199)) / 0x7;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x2b6b4);
function Main(input) {
  const chars = input[__DECODE_0__(0x1a1)]()[__DECODE_0__(0x198)]('\x20');
  const x = Math[__DECODE_0__(0x195)](chars[0x0]);
  const y = Math['floor'](chars[0x1]);
  let ans = 0x0;
  if (x === 0x1 && y === 0x1) {
    ans += 0x61a80;
  }
  if (x === 0x1) {
    ans += 0x493e0;
  }
  if (y === 0x1) {
    ans += 0x493e0;
  }
  if (x === 0x2) {
    ans += 0x30d40;
  }
  if (y === 0x2) {
    ans += 0x30d40;
  }
  if (x === 0x3) {
    ans += 0x186a0;
  }
  if (y === 0x3) {
    ans += 0x186a0;
  }
  console[__DECODE_0__(0x19c)](ans);
}
function __STRING_ARRAY__() {
  const _0xaec5b8 = ['floor', '/dev/stdin', '391688GTFnpZ', 'split', '5196877lynNRO', '1239920fuBjPE', 'utf8', 'log', '125018ClrXzt', '1140210pXYWUj', '291036NUEaga', '113264FzJlCy', 'trim', 'readFileSync'];
  __STRING_ARRAY__ = function () {
    return _0xaec5b8;
  };
  return __STRING_ARRAY__();
}
Main(require('fs')[__DECODE_0__(0x1a2)](__DECODE_0__(0x196), __DECODE_0__(0x19b)));
