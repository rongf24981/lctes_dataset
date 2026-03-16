(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x1e2)) / 0x1 * (parseInt(__DECODE_0__(0x1dd)) / 0x2) + -parseInt(__DECODE_0__(0x1d4)) / 0x3 * (parseInt(__DECODE_0__(0x1db)) / 0x4) + parseInt(__DECODE_0__(0x1d8)) / 0x5 + parseInt(__DECODE_0__(0x1de)) / 0x6 * (-parseInt(__DECODE_0__(0x1d6)) / 0x7) + parseInt(__DECODE_0__(0x1e1)) / 0x8 * (-parseInt(__DECODE_0__(0x1d9)) / 0x9) + parseInt(__DECODE_0__(0x1d7)) / 0xa + parseInt(__DECODE_0__(0x1df)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xdb97e);
function __STRING_ARRAY__() {
  const _0x329d97 = ['875131jRAivb', 'utf8', 'log', '341283XdiVph', 'readFileSync', '7teIqqi', '13744970BVOEEI', '7672680PkGJQL', '189vRRXmQ', '/dev/stdin', '52CJckQl', 'map', '2LDeeVl', '3580350nEvqYa', '17382431YyQTFg', 'Yes', '243448krDAfh'];
  __STRING_ARRAY__ = function () {
    return _0x329d97;
  };
  return __STRING_ARRAY__();
}
function main(input) {
  let numarray = input['split']('\x20')[__DECODE_0__(0x1dc)](Number);
  let W;
  let H;
  let x;
  let y;
  let r;
  W = numarray[0x0];
  H = numarray[0x1];
  x = numarray[0x2];
  y = numarray[0x3];
  r = numarray[0x4];
  if (x < r || y < r || x + r > W || y + r > H) {
    console[__DECODE_0__(0x1d3)]('No');
  } else {
    console['log'](__DECODE_0__(0x1e0));
  }
}
function __DECODE_0__(GVIwPz, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1d3;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(GVIwPz, key);
}
main(require('fs')[__DECODE_0__(0x1d5)](__DECODE_0__(0x1da), __DECODE_0__(0x1e3)));
