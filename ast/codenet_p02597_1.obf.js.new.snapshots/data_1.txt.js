function __DECODE_0__(PjuREK, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1cc;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(PjuREK, key);
}
const a0_0xe103ff = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x49a980 = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(_0x49a980(0x1cf)) / 0x1 * (parseInt(_0x49a980(0x1d0)) / 0x2) + parseInt(_0x49a980(0x1d4)) / 0x3 * (-parseInt(_0x49a980(0x1db)) / 0x4) + parseInt(_0x49a980(0x1d8)) / 0x5 * (parseInt(_0x49a980(0x1d3)) / 0x6) + parseInt(_0x49a980(0x1d9)) / 0x7 + parseInt(_0x49a980(0x1d5)) / 0x8 * (parseInt(_0x49a980(0x1cd)) / 0x9) + -parseInt(_0x49a980(0x1d1)) / 0xa * (-parseInt(_0x49a980(0x1d6)) / 0xb) + -parseInt(_0x49a980(0x1ce)) / 0xc * (parseInt(_0x49a980(0x1da)) / 0xd);
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
  const _0x27830b = __DECODE_0__;
  const arr = input[_0x27830b(0x1cc)]('\x0a');
  const N = arr[0x0];
  const Ci = arr[0x1][_0x27830b(0x1cc)]('');
  let answer = 0x0;
  let Wnum = 0x0;
  for (let i = 0x0; i < Ci[_0x27830b(0x1d7)]; i++) {
    if (Ci[i] === 'W') {
      Wnum++;
    }
  }
  if (Wnum === 0x0) {
    return console[_0x27830b(0x1dc)](0x0);
  }
  for (let i = Wnum - 0x1; i < Ci[_0x27830b(0x1d7)]; i++) {
    if (Ci[i] === 'R') {
      answer++;
    }
  }
  console[_0x27830b(0x1dc)](answer);
}
MainD(require('fs')['readFileSync'](a0_0xe103ff(0x1d2), 'utf8'));
