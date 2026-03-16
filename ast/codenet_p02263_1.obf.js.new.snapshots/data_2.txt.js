(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0xd1)) / 0x1 * (-parseInt(__DECODE_0__(0xe4)) / 0x2) + parseInt(__DECODE_0__(0xe0)) / 0x3 + -parseInt(__DECODE_0__(0xd8)) / 0x4 + parseInt(__DECODE_0__(0xdd)) / 0x5 * (-parseInt(__DECODE_0__(0xd3)) / 0x6) + parseInt(__DECODE_0__(0xd2)) / 0x7 * (parseInt(__DECODE_0__(0xda)) / 0x8) + parseInt(__DECODE_0__(0xce)) / 0x9 * (-parseInt(__DECODE_0__(0xd7)) / 0xa) + -parseInt(__DECODE_0__(0xd0)) / 0xb * (-parseInt(__DECODE_0__(0xd5)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xd5465);
let content = '';
process[__DECODE_0__(0xe3)][__DECODE_0__(0xe1)]();
process[__DECODE_0__(0xe3)]['setEncoding']('utf8');
process[__DECODE_0__(0xe3)]['on'](__DECODE_0__(0xd6), buf => {
  content += buf;
});
process[__DECODE_0__(0xe3)]['on'](__DECODE_0__(0xdb), () => {
  const stack = [];
  const tokens = content['trim']()['split']('\x20')[__DECODE_0__(0xdc)](line => {
    const num = parseInt(line, 0xa);
    return isNaN(num) ? line : num;
  });
  const opTokens = __DECODE_0__(0xcf)[__DECODE_0__(0xd4)]('');
  for (const token of tokens) {
    if (opTokens[__DECODE_0__(0xe2)](token)) {
      const b = stack[__DECODE_0__(0xde)]();
      const a = stack[__DECODE_0__(0xde)]();
      stack[__DECODE_0__(0xdf)](expr(token, a, b));
    } else {
      stack[__DECODE_0__(0xdf)](token);
    }
  }
  console[__DECODE_0__(0xd9)](stack['pop']());
});
const expr = (op, a, b) => {
  switch (op) {
    case '*':
      return a * b;
    case '/':
      return a / b;
    case '+':
      return a + b;
    case '-':
      return a - b;
  }
};
function __DECODE_0__(UHtWcB, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xce;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(UHtWcB, key);
}
function __STRING_ARRAY__() {
  const _0x3100b4 = ['stdin', '1292zGSzKc', '18PSdbBW', '+-/*', '108746ethAWH', '159WZgrbj', '553MjUbcE', '402khwyea', 'split', '2832cTBPFC', 'data', '3740210cmZbIr', '3952712XXzPrq', 'log', '69656bKCDfP', 'end', 'map', '88270dRrMPW', 'pop', 'push', '2623128gIFPbQ', 'resume', 'includes'];
  __STRING_ARRAY__ = function () {
    return _0x3100b4;
  };
  return __STRING_ARRAY__();
}
