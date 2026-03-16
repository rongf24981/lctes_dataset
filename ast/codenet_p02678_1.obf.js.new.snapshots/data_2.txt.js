function __STRING_ARRAY__() {
  const _0x480739 = ['/dev/stdin', '8havHWg', '306268rojGBZ', 'log', '1054932flYmYv', '1FluytB', '769602abFLvK', '693948fbagDL', '1412720CeehYC', 'utf8', '7GdbmrA', 'slice', 'trim', 'push', 'map', '1561095deGqbL', 'split', '1193301tmbmuB', 'some'];
  __STRING_ARRAY__ = function () {
    return _0x480739;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0xdd)) / 0x1 * (-parseInt(__DECODE_0__(0xda)) / 0x2) + parseInt(__DECODE_0__(0xde)) / 0x3 + parseInt(__DECODE_0__(0xdc)) / 0x4 + -parseInt(__DECODE_0__(0xd4)) / 0x5 + parseInt(__DECODE_0__(0xdf)) / 0x6 * (parseInt(__DECODE_0__(0xe2)) / 0x7) + parseInt(__DECODE_0__(0xd9)) / 0x8 * (-parseInt(__DECODE_0__(0xd6)) / 0x9) + parseInt(__DECODE_0__(0xe0)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x2bc37);
function __DECODE_0__(SNyShp, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xd0;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(SNyShp, key);
}
(args => {
  const [[N, M], ...path] = args[__DECODE_0__(0xd1)]()['split']('\x0a')[__DECODE_0__(0xd3)](a => a[__DECODE_0__(0xd5)]('\x20')[__DECODE_0__(0xd3)](a => a | 0x0));
  const dist = [];
  const sign = [0x0];
  const branch = [];
  for (let i = 0x1; i <= N; i++) {
    dist[i] = Infinity;
    sign[i] = Infinity;
    branch[i] = [];
  }
  for (let i = 0x0; i < M; i++) {
    const [A, B] = path[i];
    branch[A][__DECODE_0__(0xd2)](B);
    branch[B][__DECODE_0__(0xd2)](A);
  }
  let stack = [];
  function mark(step, i) {
    for (let next of branch[i]) {
      if (dist[next] > step) {
        dist[next] = step;
        sign[next] = i;
        stack[__DECODE_0__(0xd2)](() => mark(step + 0x1, next));
      }
    }
  }
  mark(0x0, 0x1);
  while (stack['length']) {
    let s;
    while (s = stack['pop']()) {
      s();
    }
  }
  if (sign['slice'](0x2)[__DECODE_0__(0xd7)](v => v > N)) {
    return console['log']('No');
  }
  console[__DECODE_0__(0xdb)]('Yes\x0a' + sign[__DECODE_0__(0xd0)](0x2)['join']('\x0a'));
})(require('fs')['readFileSync'](__DECODE_0__(0xd8), __DECODE_0__(0xe1)));
