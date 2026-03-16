function __STRING_ARRAY__() {
  const _0x28f774 = ['log', 'fill', '463298GjhGjL', '524ekrFuU', '56GVwYqY', '20PWtKsY', 'readFileSync', 'length', '16AnBVet', '/dev/stdin', '33524lZcLFl', '15265foSjve', 'map', '3839048snVIGC', 'split', '407634LdyRqM', '30060gHzBza', '9gvNXOc', 'reduce', 'utf8', 'push', '3906420ylgPQW'];
  __STRING_ARRAY__ = function () {
    return _0x28f774;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x193)) / 0x1 + parseInt(__DECODE_0__(0x191)) / 0x2 * (-parseInt(__DECODE_0__(0x199)) / 0x3) + parseInt(__DECODE_0__(0x18c)) / 0x4 * (-parseInt(__DECODE_0__(0x194)) / 0x5) + parseInt(__DECODE_0__(0x198)) / 0x6 * (parseInt(__DECODE_0__(0x18d)) / 0x7) + -parseInt(__DECODE_0__(0x196)) / 0x8 * (-parseInt(__DECODE_0__(0x184)) / 0x9) + -parseInt(__DECODE_0__(0x18e)) / 0xa * (-parseInt(__DECODE_0__(0x18b)) / 0xb) + -parseInt(__DECODE_0__(0x188)) / 0xc;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x51e9b);
const input = require('fs')[__DECODE_0__(0x18f)](__DECODE_0__(0x192), __DECODE_0__(0x186));
const lines = input[__DECODE_0__(0x197)]('\x0a');
const [N, K] = lines[0x0][__DECODE_0__(0x197)]('\x20')['map'](Number);
const k = [];
for (let i = 0x1; i <= K; i++) {
  const [L, R] = lines[i][__DECODE_0__(0x197)]('\x20')[__DECODE_0__(0x195)](Number);
  k[__DECODE_0__(0x187)]([L, R]);
}
const ksum = Array(K)['fill'](0x0);
function __DECODE_0__(EaAhFn, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x184;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(EaAhFn, key);
}
const mod = 0x3b800001;
const map = Array(N)[__DECODE_0__(0x18a)](0x0);
map[0x0] = 0x1;
for (let i = 0x1; i < map[__DECODE_0__(0x190)]; i++) {
  let c = 0x0;
  for (let j = 0x0; j < k['length']; j++) {
    ksum[j] = ksum[j] + (map[i - k[j][0x0]] || 0x0) - (map[i - k[j][0x1] - 0x1] || 0x0);
  }
  map[i] = ksum[__DECODE_0__(0x185)]((a, b) => a + b) % mod;
}
console[__DECODE_0__(0x189)](map['pop']());
