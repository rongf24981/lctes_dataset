function __STRING_ARRAY__() {
  const _0x302bb2 = ['217716bQFcTv', '8lnqlsO', 'Yes', '110jSSyAl', '2776100mUoiyL', 'log', 'split', '10705437SHMUDL', '9769753CkzwkC', '1636681QswKMQ', 'utf8', '1050KLxBoX', '7632340AKanrA', 'readFileSync', '/dev/stdin', '215AloEnA'];
  __STRING_ARRAY__ = function () {
    return _0x302bb2;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(zbkqyZ, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x18c;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(zbkqyZ, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x18e)) / 0x1 + parseInt(__DECODE_0__(0x198)) / 0x2 * (-parseInt(__DECODE_0__(0x190)) / 0x3) + parseInt(__DECODE_0__(0x199)) / 0x4 + parseInt(__DECODE_0__(0x194)) / 0x5 * (-parseInt(__DECODE_0__(0x195)) / 0x6) + parseInt(__DECODE_0__(0x18d)) / 0x7 * (parseInt(__DECODE_0__(0x196)) / 0x8) + parseInt(__DECODE_0__(0x18c)) / 0x9 + parseInt(__DECODE_0__(0x191)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xc9b5a);
function Main(args) {
  const firstRow = args['split']('\x0a')[0x0];
  const row = args[__DECODE_0__(0x19b)]('\x0a')[0x1][__DECODE_0__(0x19b)]('\x20');
  for (var i = row['length'] - 0x1; i > 0x0; i--) {
    if (row[i - 0x1] > row[i]) {
      row[i - 0x1] -= 0x1;
    }
    if (row[i - 0x1] > row[i]) {
      return console[__DECODE_0__(0x19a)]('No');
    }
  }
  console[__DECODE_0__(0x19a)](__DECODE_0__(0x197));
}
Main(require('fs')[__DECODE_0__(0x192)](__DECODE_0__(0x193), __DECODE_0__(0x18f)));
