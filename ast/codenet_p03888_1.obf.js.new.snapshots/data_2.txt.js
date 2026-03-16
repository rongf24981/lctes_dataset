(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0xe1)) / 0x1 + -parseInt(__DECODE_0__(0xe7)) / 0x2 * (parseInt(__DECODE_0__(0xdc)) / 0x3) + parseInt(__DECODE_0__(0xeb)) / 0x4 + -parseInt(__DECODE_0__(0xdf)) / 0x5 + parseInt(__DECODE_0__(0xe4)) / 0x6 + -parseInt(__DECODE_0__(0xe8)) / 0x7 * (-parseInt(__DECODE_0__(0xe2)) / 0x8) + -parseInt(__DECODE_0__(0xe5)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x58db4);
function Main(inputData) {
  init(inputData);
  var a = inI();
  var b = inI();
  outln((a * b / (a + b))[__DECODE_0__(0xe3)](0xa));
}
var input;
var inputCnt;
function debug() {
  Main(document[__DECODE_0__(0xdb)](__DECODE_0__(0xe0))[__DECODE_0__(0xe9)]);
}
function init(inputData) {
  input = inputData[__DECODE_0__(0xea)](/\n/g, '\x20');
  input = input[__DECODE_0__(0xec)]('\x20');
  inputCnt = 0x0;
}
const out = output => {
  console[__DECODE_0__(0xdd)](output);
};
const outln = output => {
  console[__DECODE_0__(0xdd)](output + '\x0a');
};
const inS = () => {
  return input[inputCnt++];
};
const inI = () => {
  return parseInt(inS(), 0xa);
};
function __STRING_ARRAY__() {
  const _0x5594ca = ['240821aXTKlc', 'value', 'replace', '2776248UHRVwm', 'split', 'getElementById', '36snZXfj', 'log', 'utf8', '1576535bagVAX', 'input', '486699AecpkT', '152wskEfK', 'toFixed', '1051416NAQMWk', '2190177eORyCY', '/dev/stdin', '18940tqvRRP'];
  __STRING_ARRAY__ = function () {
    return _0x5594ca;
  };
  return __STRING_ARRAY__();
}
const inF = () => {
  return parseFloat(inS());
};
function __DECODE_0__(zhQoOg, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xdb;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(zhQoOg, key);
}
Main(require('fs')['readFileSync'](__DECODE_0__(0xe6), __DECODE_0__(0xde)));
