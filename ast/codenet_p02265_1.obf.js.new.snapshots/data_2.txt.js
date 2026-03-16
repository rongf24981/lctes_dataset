(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0xb0)) / 0x1 + -parseInt(__DECODE_0__(0xaf)) / 0x2 * (-parseInt(__DECODE_0__(0xbb)) / 0x3) + parseInt(__DECODE_0__(0xb2)) / 0x4 + parseInt(__DECODE_0__(0xb8)) / 0x5 * (parseInt(__DECODE_0__(0xb4)) / 0x6) + -parseInt(__DECODE_0__(0xae)) / 0x7 + parseInt(__DECODE_0__(0xc1)) / 0x8 * (parseInt(__DECODE_0__(0xb9)) / 0x9) + -parseInt(__DECODE_0__(0xb3)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xea87c);
function __DECODE_0__(eioQln, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xac;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(eioQln, key);
}
const config = {
  'input': __DECODE_0__(0xbf),
  'newline': '\x0a'
};
const line = require('fs')[__DECODE_0__(0xb1)](config[__DECODE_0__(0xbd)], __DECODE_0__(0xc2))[__DECODE_0__(0xbc)](config[__DECODE_0__(0xb7)]);
const insert = (arr, x) => arr['unshift'](x);
const del = (arr, x) => {
  for (var i = 0x0; i < arr[__DECODE_0__(0xb6)]; i++) {
    if (x === arr[i]) {
      break;
    }
  }
  if (i !== arr[__DECODE_0__(0xb6)]) {
    arr[__DECODE_0__(0xbe)](i, 0x1);
  }
};
const delFirst = arr => arr[__DECODE_0__(0xba)]();
const delLast = arr => arr['pop']();
const cmds = line[__DECODE_0__(0xc0)](0x1);
function __STRING_ARRAY__() {
  const _0x1bc900 = ['1775286KiCdTJ', 'shift', '3veTgFt', 'split', 'input', 'splice', '/dev/stdin', 'slice', '72NkuMeJ', 'utf-8', 'log', 'map', 'reduce', '2625574lZRFhW', '3400462mbAKBQ', '109550WBPKJK', 'readFileSync', '404004fGmXPX', '28598740BtMydf', '312PLJfkE', 'deleteLast', 'length', 'newline', '70060DquEYO'];
  __STRING_ARRAY__ = function () {
    return _0x1bc900;
  };
  return __STRING_ARRAY__();
}
const ans = cmds[__DECODE_0__(0xad)]((acc, x) => {
  const cmd = x[__DECODE_0__(0xbc)]('\x20');
  switch (cmd[0x0]) {
    case 'insert':
      insert(acc, parseInt(cmd[0x1]));
      break;
    case 'delete':
      del(acc, parseInt(cmd[0x1]));
      break;
    case 'deleteFirst':
      delFirst(acc);
      break;
    case __DECODE_0__(0xb5):
      delLast(acc);
      break;
  }
  return acc;
}, [])[__DECODE_0__(0xac)](x => x['toString']())['join']('\x20');
console[__DECODE_0__(0xc3)](ans);
