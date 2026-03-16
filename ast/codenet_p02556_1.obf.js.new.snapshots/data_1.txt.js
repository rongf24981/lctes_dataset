function __STRING_ARRAY__() {
  const _0x4626df = ['shift', '1329811ZVfrNa', 'min', '1437705HYhgoE', '4278190HRdJzU', 'max', 'readFileSync', '18MUPEEo', '1352272mYFlll', 'map', '185602HGUcGY', '256LQCBaK', '/dev/stdin', '3381608UlJyNW', '190737qiNqmN'];
  __STRING_ARRAY__ = function () {
    return _0x4626df;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(OHqWvw, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x159;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(OHqWvw, key);
}
const a0_0x1fa7af = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x159491 = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(_0x159491(0x160)) / 0x1 + -parseInt(_0x159491(0x15e)) / 0x2 + -parseInt(_0x159491(0x159)) / 0x3 + parseInt(_0x159491(0x163)) / 0x4 + parseInt(_0x159491(0x15a)) / 0x5 + -parseInt(_0x159491(0x15d)) / 0x6 * (parseInt(_0x159491(0x166)) / 0x7) + -parseInt(_0x159491(0x161)) / 0x8 * (-parseInt(_0x159491(0x164)) / 0x9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x72564);
function Main(input) {
  const _0x19c1ec = __DECODE_0__;
  input = input['split']('\x0a');
  input[_0x19c1ec(0x165)]();
  let xy = input[_0x19c1ec(0x15f)](val => val['split']('\x20')[_0x19c1ec(0x15f)](Number));
  let arr0 = xy[_0x19c1ec(0x15f)](val => val[0x0] + val[0x1]);
  let arr1 = xy[_0x19c1ec(0x15f)](val => val[0x0] - val[0x1]);
  let arr0_calc = Math[_0x19c1ec(0x15b)](...arr0) - Math[_0x19c1ec(0x167)](...arr0);
  let arr1_calc = Math[_0x19c1ec(0x15b)](...arr1) - Math[_0x19c1ec(0x167)](...arr1);
  console['log'](Math['max'](arr0_calc, arr1_calc));
}
Main(require('fs')[a0_0x1fa7af(0x15c)](a0_0x1fa7af(0x162), 'utf8'));
