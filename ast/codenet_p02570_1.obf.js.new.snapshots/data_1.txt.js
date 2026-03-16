const a0_0x5ddf93 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x62f794 = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(_0x62f794(0x142)) / 0x1 * (parseInt(_0x62f794(0x143)) / 0x2) + -parseInt(_0x62f794(0x14e)) / 0x3 + parseInt(_0x62f794(0x14c)) / 0x4 * (parseInt(_0x62f794(0x146)) / 0x5) + -parseInt(_0x62f794(0x148)) / 0x6 + -parseInt(_0x62f794(0x144)) / 0x7 + -parseInt(_0x62f794(0x145)) / 0x8 * (-parseInt(_0x62f794(0x140)) / 0x9) + parseInt(_0x62f794(0x13f)) / 0xa;
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
  const _0x30ab01 = __DECODE_0__;
  const [line] = raw_input['split']('\x0a');
  const [d, t, s] = toNumArray(line);
  let isYes = t * s >= d;
  console[_0x30ab01(0x14d)](isYes ? _0x30ab01(0x14a) : 'No');
}
Main(require('fs')['readFileSync']('/dev/stdin', a0_0x5ddf93(0x14b)));
function toNumArray(str, delimitor = '\x20') {
  const _0x246ff5 = a0_0x5ddf93;
  return str[_0x246ff5(0x147)](delimitor)[_0x246ff5(0x141)](s => parseInt(s, 0xa));
}
function toBitIntArray(str, delimitor = '\x20') {
  const _0x478038 = a0_0x5ddf93;
  return str[_0x478038(0x147)](delimitor)['map'](s => BigInt(s));
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
  const _0x15e021 = a0_0x5ddf93;
  const result = array[_0x15e021(0x141)](v => v[_0x15e021(0x147)](delimitor));
  return result;
}
function sum(n) {
  const _0x455ecf = a0_0x5ddf93;
  return n[_0x455ecf(0x149)]((a, b) => a + b);
}
