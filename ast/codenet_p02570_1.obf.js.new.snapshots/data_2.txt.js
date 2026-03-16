(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x142)) / 0x1 * (parseInt(__DECODE_0__(0x143)) / 0x2) + -parseInt(__DECODE_0__(0x14e)) / 0x3 + parseInt(__DECODE_0__(0x14c)) / 0x4 * (parseInt(__DECODE_0__(0x146)) / 0x5) + -parseInt(__DECODE_0__(0x148)) / 0x6 + -parseInt(__DECODE_0__(0x144)) / 0x7 + -parseInt(__DECODE_0__(0x145)) / 0x8 * (-parseInt(__DECODE_0__(0x140)) / 0x9) + parseInt(__DECODE_0__(0x13f)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xa9936);
function Main(raw_input) {
  const [line] = raw_input['split']('\x0a');
  const [d, t, s] = toNumArray(line);
  let isYes = t * s >= d;
  console[__DECODE_0__(0x14d)](isYes ? __DECODE_0__(0x14a) : 'No');
}
Main(require('fs')['readFileSync']('/dev/stdin', __DECODE_0__(0x14b)));
function toNumArray(str, delimitor = '\x20') {
  return str[__DECODE_0__(0x147)](delimitor)[__DECODE_0__(0x141)](s => parseInt(s, 0xa));
}
function toBitIntArray(str, delimitor = '\x20') {
  return str[__DECODE_0__(0x147)](delimitor)['map'](s => BigInt(s));
}
function __DECODE_0__(oQaqjU, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x13f;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(oQaqjU, key);
}
function __STRING_ARRAY__() {
  const _0x277260 = ['48UgbNQP', '5XatKNl', 'split', '6209508gYOJrk', 'reduce', 'Yes', 'utf8', '3973552SJEWgE', 'log', '2608707jstJvJ', '6164870puBsAi', '1155699oxDKwV', 'map', '1165586LgWFNg', '2PeypZG', '6628006VTWwEd'];
  __STRING_ARRAY__ = function () {
    return _0x277260;
  };
  return __STRING_ARRAY__();
}
function toMatrix(array, delimitor = '\x20') {
  const result = array[__DECODE_0__(0x141)](v => v[__DECODE_0__(0x147)](delimitor));
  return result;
}
function sum(n) {
  return n[__DECODE_0__(0x149)]((a, b) => a + b);
}
