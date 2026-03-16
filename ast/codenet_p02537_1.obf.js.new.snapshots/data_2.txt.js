function __STRING_ARRAY__() {
  const _0xce1934 = ['push', '1265600mgLmdJ', '4253979gVMbbW', 'length', 'slice', 'map', '8rlDENl', '8266460CnHyMo', '1418210TpHBby', '5PLeoMj', '839506uWVXKR', '11478195ZwOBLA', '4dEHbZu', 'utf8', 'split', '8625588bgxbqx', 'abs', '/dev/stdin'];
  __STRING_ARRAY__ = function () {
    return _0xce1934;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x99)) / 0x1 + parseInt(__DECODE_0__(0x97)) / 0x2 + parseInt(__DECODE_0__(0x91)) / 0x3 * (-parseInt(__DECODE_0__(0x9b)) / 0x4) + parseInt(__DECODE_0__(0x98)) / 0x5 * (-parseInt(__DECODE_0__(0x9e)) / 0x6) + parseInt(__DECODE_0__(0x90)) / 0x7 + parseInt(__DECODE_0__(0x95)) / 0x8 * (parseInt(__DECODE_0__(0x9a)) / 0x9) + parseInt(__DECODE_0__(0x96)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xee3cd);
function __DECODE_0__(iPTUXs, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x8d;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(iPTUXs, key);
}
const main = arg => {
  const [N, K] = arg[__DECODE_0__(0x9d)]('\x0a')[0x0][__DECODE_0__(0x9d)]('\x20')[__DECODE_0__(0x94)](Number);
  arg = arg[__DECODE_0__(0x9d)]('\x0a')[__DECODE_0__(0x93)](0x1);
  const a = arg['map'](Number);
  let b = [];
  b[__DECODE_0__(0x8f)](a[0x0]);
  for (let i = 0x1; i < N; i++) {
    if (Math[__DECODE_0__(0x8d)](a[i] - b[b[__DECODE_0__(0x92)] - 0x1]) <= K) {
      b[__DECODE_0__(0x8f)](a[i]);
    }
  }
  console['log'](b[__DECODE_0__(0x92)]);
};
main(require('fs')['readFileSync'](__DECODE_0__(0x8e), __DECODE_0__(0x9c)));
