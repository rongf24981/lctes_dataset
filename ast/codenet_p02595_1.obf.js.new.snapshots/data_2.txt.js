(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x18b)) / 0x1 + -parseInt(__DECODE_0__(0x180)) / 0x2 + parseInt(__DECODE_0__(0x17f)) / 0x3 * (-parseInt(__DECODE_0__(0x17d)) / 0x4) + -parseInt(__DECODE_0__(0x186)) / 0x5 + parseInt(__DECODE_0__(0x184)) / 0x6 * (parseInt(__DECODE_0__(0x17c)) / 0x7) + -parseInt(__DECODE_0__(0x18a)) / 0x8 + parseInt(__DECODE_0__(0x187)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x8ba4e);
function __DECODE_0__(XmmIyB, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x17b;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(XmmIyB, key);
}
function __STRING_ARRAY__() {
  const _0x37edca = ['log', '8262376lDsnvP', '770332SDtWzH', 'utf8', 'readFileSync', 'env', '1417633RrjhrK', '4LiStcp', 'MYTEST', '2702832bUBozq', '194870OJzNcn', 'trim', '/dev/stdin', 'sqrt', '6lpKvPo', 'map', '712705HMukWi', '15955632UiIfiq', 'split'];
  __STRING_ARRAY__ = function () {
    return _0x37edca;
  };
  return __STRING_ARRAY__();
}
const main = input => {
  input = input[__DECODE_0__(0x181)]()[__DECODE_0__(0x188)]('\x0a');
  const [N, D] = input[0x0][__DECODE_0__(0x188)]('\x20')['map'](Number);
  const [, ...points] = input;
  let ans = 0x0;
  for (let v of points) {
    const [x, y] = v[__DECODE_0__(0x188)]('\x20')[__DECODE_0__(0x185)](Number);
    if (Math[__DECODE_0__(0x183)](x ** 0x2 + y ** 0x2) <= D) {
      ans++;
    }
  }
  return console[__DECODE_0__(0x189)](ans);
};
process[__DECODE_0__(0x17b)][__DECODE_0__(0x17e)] ? test() : main(require('fs')[__DECODE_0__(0x18d)](__DECODE_0__(0x182), __DECODE_0__(0x18c)));
