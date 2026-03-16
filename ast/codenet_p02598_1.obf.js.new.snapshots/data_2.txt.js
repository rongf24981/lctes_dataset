(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x8b)) / 0x1 * (-parseInt(__DECODE_0__(0x88)) / 0x2) + parseInt(__DECODE_0__(0x90)) / 0x3 * (parseInt(__DECODE_0__(0x85)) / 0x4) + parseInt(__DECODE_0__(0x89)) / 0x5 * (parseInt(__DECODE_0__(0x8d)) / 0x6) + -parseInt(__DECODE_0__(0x81)) / 0x7 + -parseInt(__DECODE_0__(0x83)) / 0x8 + parseInt(__DECODE_0__(0x86)) / 0x9 + -parseInt(__DECODE_0__(0x8a)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x37dd7);
function main(input) {
  const lines = input[__DECODE_0__(0x87)]('\x0a');
  const K = 0x0 | lines[0x0]['split']('\x20')[0x1];
  let arr = new Int32Array(lines[0x1][__DECODE_0__(0x87)]('\x20'));
  let isOk = (t = 0x0, k = 0x0) => {
    arr[__DECODE_0__(0x82)](v => {
      let d = 0x0 | v / t;
      if (v === d * t) {
        d--;
      }
      k -= d;
    });
    return k >= 0x0;
  };
  let l = 0x0;
  let r = Math['max'](...arr);
  let mid = 0x0 | (r + l) * 0.5;
  let res = r;
  while (l < r) {
    if (isOk(mid, K)) {
      res = mid;
      r = mid - 0x1;
    } else {
      l = mid + 0x1;
    }
    mid = 0x0 | (r + l) * 0.5;
  }
  return res;
}
function __DECODE_0__(Ctxyqk, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x7f;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(Ctxyqk, key);
}
exports[__DECODE_0__(0x8c)] = main;
function Main(input) {
  console[__DECODE_0__(0x80)](main(input[__DECODE_0__(0x7f)]()));
}
if (process['argv'][0x2] !== __DECODE_0__(0x8f)) {
  Main(require('fs')[__DECODE_0__(0x8e)](__DECODE_0__(0x84), 'utf8'));
}
function __STRING_ARRAY__() {
  const _0x3be7de = ['trim', 'log', '1105384HYkcjc', 'forEach', '3294136AsEPvr', '/dev/stdin', '249608ULqDWs', '511938qHiDYc', 'split', '66fFgzWh', '1630195YoioOy', '1669960VtpDUc', '8199tRddhJ', 'main', '6bvWMYl', 'readFileSync', 'test', '15YjJAXX'];
  __STRING_ARRAY__ = function () {
    return _0x3be7de;
  };
  return __STRING_ARRAY__();
}
