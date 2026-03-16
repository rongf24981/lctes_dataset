(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x1bd)) / 0x1 * (parseInt(__DECODE_0__(0x1b7)) / 0x2) + -parseInt(__DECODE_0__(0x1b8)) / 0x3 * (parseInt(__DECODE_0__(0x1b1)) / 0x4) + parseInt(__DECODE_0__(0x1bc)) / 0x5 * (parseInt(__DECODE_0__(0x1bf)) / 0x6) + parseInt(__DECODE_0__(0x1bb)) / 0x7 * (-parseInt(__DECODE_0__(0x1ae)) / 0x8) + parseInt(__DECODE_0__(0x1b3)) / 0x9 + -parseInt(__DECODE_0__(0x1b0)) / 0xa + -parseInt(__DECODE_0__(0x1ac)) / 0xb * (-parseInt(__DECODE_0__(0x1b6)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x71fc4);
function __DECODE_0__(TJFAsZ, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1ac;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(TJFAsZ, key);
}
function Main(input) {
  const inputs = input[__DECODE_0__(0x1af)]('\x0a')[__DECODE_0__(0x1b4)](v => v);
  const n = Number(inputs[0x0]);
  const strs = inputs[0x1][__DECODE_0__(0x1af)]('');
  console[__DECODE_0__(0x1b9)](strs[__DECODE_0__(0x1be)](function (s) {
    let c = s['charCodeAt']() + n;
    if (c > 0x5a) {
      c -= 0x1a;
    }
    return String['fromCharCode'](c);
  })[__DECODE_0__(0x1b5)](''));
}
function __STRING_ARRAY__() {
  const _0x3adc43 = ['30TcGsmb', '5894581FtDUNd', '/dev/stdin', '190496XQwokN', 'split', '6051100GSXECA', '36dDGgIg', 'utf8', '2512971CzqkSw', 'filter', 'join', '24Qlfmbj', '1132ojpklt', '47478WNmWRQ', 'log', 'readFileSync', '35izSmij', '838885VGiuQV', '1513xZbgJG', 'map'];
  __STRING_ARRAY__ = function () {
    return _0x3adc43;
  };
  return __STRING_ARRAY__();
}
Main(require('fs')[__DECODE_0__(0x1ba)](__DECODE_0__(0x1ad), __DECODE_0__(0x1b2)));
