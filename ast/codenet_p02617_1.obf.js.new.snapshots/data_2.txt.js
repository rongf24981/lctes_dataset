(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x140)) / 0x1 * (-parseInt(__DECODE_0__(0x13e)) / 0x2) + parseInt(__DECODE_0__(0x13b)) / 0x3 + parseInt(__DECODE_0__(0x139)) / 0x4 + -parseInt(__DECODE_0__(0x13d)) / 0x5 + -parseInt(__DECODE_0__(0x135)) / 0x6 + -parseInt(__DECODE_0__(0x138)) / 0x7 + parseInt(__DECODE_0__(0x136)) / 0x8 * (parseInt(__DECODE_0__(0x134)) / 0x9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x85625);
function __STRING_ARRAY__() {
  const _0x253633 = ['63WEtMKU', '2780748PRsRkz', '1682216foQdPx', 'readFileSync', '4738804cRFYRp', '862920xrWEux', 'map', '2265105xeWvne', '/dev/stdin', '4123585RQBdDK', '5732HnizuR', 'utf8', '24LceGWX'];
  __STRING_ARRAY__ = function () {
    return _0x253633;
  };
  return __STRING_ARRAY__();
}
const [_n, ..._edges] = require('fs')[__DECODE_0__(0x137)](__DECODE_0__(0x13c), __DECODE_0__(0x13f))['split'](/\n/);
function __DECODE_0__(wbPfGI, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x134;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(wbPfGI, key);
}
const n = Number(_n);
let result = n * (n + 0x1) * (n + 0x2) / 0x6;
for (const _edge of _edges) {
  let [u, v] = _edge['split'](/\s/)[__DECODE_0__(0x13a)](Number);
  if (u > v) {
    [u, v] = [v, u];
  }
  result -= u * (n - v + 0x1);
}
console['log'](result);
