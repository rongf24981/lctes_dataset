function __DECODE_0__(PjuREK, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1cc;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(PjuREK, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x1cf)) / 0x1 * (parseInt(__DECODE_0__(0x1d0)) / 0x2) + parseInt(__DECODE_0__(0x1d4)) / 0x3 * (-parseInt(__DECODE_0__(0x1db)) / 0x4) + parseInt(__DECODE_0__(0x1d8)) / 0x5 * (parseInt(__DECODE_0__(0x1d3)) / 0x6) + parseInt(__DECODE_0__(0x1d9)) / 0x7 + parseInt(__DECODE_0__(0x1d5)) / 0x8 * (parseInt(__DECODE_0__(0x1cd)) / 0x9) + -parseInt(__DECODE_0__(0x1d1)) / 0xa * (-parseInt(__DECODE_0__(0x1d6)) / 0xb) + -parseInt(__DECODE_0__(0x1ce)) / 0xc * (parseInt(__DECODE_0__(0x1da)) / 0xd);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xa98bc);
function __STRING_ARRAY__() {
  const _0x58a1a9 = ['split', '8532414ndIUUT', '1644RQbFeA', '7ojoqoQ', '341468aCGmWn', '20NWmEBH', '/dev/stdin', '6Leicfi', '3bGxyHV', '8SBbXqE', '5117849TzlgsP', 'length', '6084645Vgdree', '4548705QasxQM', '169481TbJpDo', '278564LAKXCn', 'log'];
  __STRING_ARRAY__ = function () {
    return _0x58a1a9;
  };
  return __STRING_ARRAY__();
}
function MainD(input) {
  const arr = input[__DECODE_0__(0x1cc)]('\x0a');
  const N = arr[0x0];
  const Ci = arr[0x1][__DECODE_0__(0x1cc)]('');
  let answer = 0x0;
  let Wnum = 0x0;
  for (let i = 0x0; i < Ci[__DECODE_0__(0x1d7)]; i++) {
    if (Ci[i] === 'W') {
      Wnum++;
    }
  }
  if (Wnum === 0x0) {
    return console[__DECODE_0__(0x1dc)](0x0);
  }
  for (let i = Wnum - 0x1; i < Ci[__DECODE_0__(0x1d7)]; i++) {
    if (Ci[i] === 'R') {
      answer++;
    }
  }
  console[__DECODE_0__(0x1dc)](answer);
}
MainD(require('fs')['readFileSync'](__DECODE_0__(0x1d2), 'utf8'));
