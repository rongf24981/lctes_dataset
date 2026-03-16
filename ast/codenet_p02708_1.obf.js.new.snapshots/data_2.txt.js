function __DECODE_0__(ymAPkM, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x76;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ymAPkM, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x80)) / 0x1 * (parseInt(__DECODE_0__(0x7b)) / 0x2) + parseInt(__DECODE_0__(0x7d)) / 0x3 + parseInt(__DECODE_0__(0x78)) / 0x4 * (-parseInt(__DECODE_0__(0x82)) / 0x5) + -parseInt(__DECODE_0__(0x7f)) / 0x6 * (parseInt(__DECODE_0__(0x79)) / 0x7) + -parseInt(__DECODE_0__(0x81)) / 0x8 * (parseInt(__DECODE_0__(0x7c)) / 0x9) + parseInt(__DECODE_0__(0x87)) / 0xa + parseInt(__DECODE_0__(0x86)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x59ee3);
function __STRING_ARRAY__() {
  const _0x2d92a1 = ['50034PTVTDK', '85818yOUFsG', '40YRLQAj', '366070sGknwn', 'utf8', 'MYTEST', 'log', '13649933sqUrjf', '1764900nZePgC', 'test', '/dev/stdin', 'map', 'env', '24nSoJEq', '21SyvbPZ', 'split', '6aiDzud', '891747vRRRfz', '504396gVnDij', 'readFileSync'];
  __STRING_ARRAY__ = function () {
    return _0x2d92a1;
  };
  return __STRING_ARRAY__();
}
const main = input => {
  const mod = 0xa ** 0x9 + 0x7;
  const [n, k] = input['trim']()[__DECODE_0__(0x7a)]('\x20')[__DECODE_0__(0x76)](Number);
  let ans = 0x0;
  for (let i = k; i <= n + 0x1; i++) {
    const s_sum = (i - 0x1) * i / 0x2;
    const b_f = n - i + 0x1;
    const b_sum = (b_f + n) * i / 0x2;
    ans += b_sum - s_sum + 0x1;
  }
  return console[__DECODE_0__(0x85)]((ans % mod + mod) % mod);
};
process[__DECODE_0__(0x77)][__DECODE_0__(0x84)] ? process['env'][__DECODE_0__(0x84)] === __DECODE_0__(0x88) ? test() : main(require('fs')[__DECODE_0__(0x7e)]('dev/stdin', __DECODE_0__(0x83))) : main(require('fs')[__DECODE_0__(0x7e)](__DECODE_0__(0x89), __DECODE_0__(0x83)));
