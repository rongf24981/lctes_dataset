(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0xde)) / 0x1 + -parseInt(__DECODE_0__(0xe0)) / 0x2 * (-parseInt(__DECODE_0__(0xdf)) / 0x3) + parseInt(__DECODE_0__(0xdc)) / 0x4 * (parseInt(__DECODE_0__(0xd3)) / 0x5) + -parseInt(__DECODE_0__(0xd9)) / 0x6 * (-parseInt(__DECODE_0__(0xd0)) / 0x7) + parseInt(__DECODE_0__(0xd7)) / 0x8 * (parseInt(__DECODE_0__(0xd4)) / 0x9) + parseInt(__DECODE_0__(0xd6)) / 0xa + -parseInt(__DECODE_0__(0xdb)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x6ff7c);
function __DECODE_0__(gTMDnA, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xd0;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(gTMDnA, key);
}
new Promise(function (resolve, reject) {
  let cin = '';
  process[__DECODE_0__(0xd2)]['on'](__DECODE_0__(0xdd), chunk => {
    cin += chunk;
  })['on'](__DECODE_0__(0xda), () => {
    resolve([cin, process[__DECODE_0__(0xd8)]]);
  });
})[__DECODE_0__(0xd1)](function ([cin, cout]) {
  for (const b of cin['split'](/[ \n]/)['map'](elt => parseInt(elt))) {
    if (b === 0x0) {
      break;
    }
    let opt = '\x0a';
    for (let m = 0x1; m * (m - 0x1) < 0x2 * b; ++m) {
      const det = 0x2 * b - m * (m - 0x1);
      if (det % (0x2 * m) === 0x0) {
        opt = det / (0x2 * m) + '\x20' + m + '\x0a';
      }
    }
    cout[__DECODE_0__(0xd5)](opt);
  }
});
function __STRING_ARRAY__() {
  const _0x24639f = ['stdout', '6WMcutx', 'end', '17412362PTGqXW', '3396JqSrYJ', 'data', '705124pmeavs', '6141NQKuaY', '388VWyjsD', '128681jcHqph', 'then', 'stdin', '2570GpbFtn', '81OdTxQE', 'write', '742500PpKmcb', '364712HYQcGe'];
  __STRING_ARRAY__ = function () {
    return _0x24639f;
  };
  return __STRING_ARRAY__();
}
