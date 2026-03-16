'use strict';

function __STRING_ARRAY__() {
  const _0x10c2e0 = ['6lSZnRy', '136ieSHLL', '/dev/stdin', 'trim', '14625559FiBPga', '554309UmYqaT', '33UvizRB', '309070NSnink', 'utf8', '7959130aUQFOP', 'split', '72RvXfom', '28DkAdXa', '3YczFPZ', '2qzCMYY', '5946336QVJQnB', 'log', 'floor', 'readFileSync', '6184184MZxhjO', '398423FDbVIY'];
  __STRING_ARRAY__ = function () {
    return _0x10c2e0;
  };
  return __STRING_ARRAY__();
}
const a0_0x4e0b32 = __DECODE_0__;
function __DECODE_0__(rIyIhc, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x14b;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(rIyIhc, key);
}
(function (stringArrayFunction, comparisonValue) {
  const _0x286170 = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(_0x286170(0x14d)) / 0x1 * (-parseInt(_0x286170(0x15c)) / 0x2) + -parseInt(_0x286170(0x15b)) / 0x3 * (-parseInt(_0x286170(0x14c)) / 0x4) + parseInt(_0x286170(0x157)) / 0x5 * (parseInt(_0x286170(0x14e)) / 0x6) + parseInt(_0x286170(0x153)) / 0x7 * (parseInt(_0x286170(0x14f)) / 0x8) + parseInt(_0x286170(0x159)) / 0x9 * (-parseInt(_0x286170(0x155)) / 0xa) + -parseInt(_0x286170(0x154)) / 0xb * (parseInt(_0x286170(0x15d)) / 0xc) + -parseInt(_0x286170(0x152)) / 0xd * (parseInt(_0x286170(0x15a)) / 0xe);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xdb5f4);
const main = arg => {
  const _0x5d6887 = __DECODE_0__;
  arg = arg[_0x5d6887(0x151)]()['split']('\x0a');
  const A = parseInt(arg[0x0][_0x5d6887(0x158)]('\x20')[0x0]);
  const B = parseInt(arg[0x0][_0x5d6887(0x158)]('\x20')[0x1]);
  for (let i = 0x1; i <= 0x2710; i++) {
    const temp1 = Math[_0x5d6887(0x15f)](i * 0.08);
    const temp2 = Math['floor'](i * 0.1);
    if (temp1 === A && temp2 === B) {
      console['log'](i);
      return;
    }
  }
  console[_0x5d6887(0x15e)](-0x1);
};
main(require('fs')[a0_0x4e0b32(0x14b)](a0_0x4e0b32(0x150), a0_0x4e0b32(0x156)));
