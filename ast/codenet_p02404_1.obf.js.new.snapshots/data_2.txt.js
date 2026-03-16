function __DECODE_0__(HUHQek, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xb2;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(HUHQek, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0xbf)) / 0x1 * (-parseInt(__DECODE_0__(0xc4)) / 0x2) + -parseInt(__DECODE_0__(0xc0)) / 0x3 + parseInt(__DECODE_0__(0xba)) / 0x4 * (parseInt(__DECODE_0__(0xb4)) / 0x5) + -parseInt(__DECODE_0__(0xbc)) / 0x6 * (-parseInt(__DECODE_0__(0xb7)) / 0x7) + parseInt(__DECODE_0__(0xc8)) / 0x8 + parseInt(__DECODE_0__(0xb9)) / 0x9 * (-parseInt(__DECODE_0__(0xc1)) / 0xa) + -parseInt(__DECODE_0__(0xc6)) / 0xb * (parseInt(__DECODE_0__(0xbe)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x6fb27);
let content = '';
process[__DECODE_0__(0xb2)][__DECODE_0__(0xbd)]();
process['stdin'][__DECODE_0__(0xc3)](__DECODE_0__(0xc5));
function __STRING_ARRAY__() {
  const _0x20be5f = ['end', '477dCVKRa', '30044UZyAoM', 'split', '2005986eLtdby', 'resume', '6540byTVJJ', '26WdUMyb', '836862QqGaex', '163810oGybfV', 'data', 'setEncoding', '24392ZmvyHW', 'utf8', '17963dFLyaM', 'log', '6663160GodOTr', 'stdin', 'trim', '450rIANLp', 'repeat', 'map', '14eFzQnr'];
  __STRING_ARRAY__ = function () {
    return _0x20be5f;
  };
  return __STRING_ARRAY__();
}
process[__DECODE_0__(0xb2)]['on'](__DECODE_0__(0xc2), buf => {
  content += buf;
});
process[__DECODE_0__(0xb2)]['on'](__DECODE_0__(0xb8), () => {
  const rects = content[__DECODE_0__(0xb3)]()[__DECODE_0__(0xbb)]('\x0a')[__DECODE_0__(0xb6)](line => line[__DECODE_0__(0xbb)]('\x20')['map'](n => parseInt(n, 0xa)));
  for (const rect of rects) {
    if (rect[0x0] !== 0x0 || rect[0x1] !== 0x0) {
      console[__DECODE_0__(0xc7)](drawReact(rect));
    }
  }
});
const drawReact = ([h, w]) => {
  const hline = '#'[__DECODE_0__(0xb5)](w) + '\x0a';
  return hline + ('#' + '.'[__DECODE_0__(0xb5)](w - 0x2) + '#\x0a')[__DECODE_0__(0xb5)](h - 0x2) + hline;
};
