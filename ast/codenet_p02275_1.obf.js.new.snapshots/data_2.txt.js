function __DECODE_0__(fsALND, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x142;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(fsALND, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x14e)) / 0x1 * (parseInt(__DECODE_0__(0x150)) / 0x2) + parseInt(__DECODE_0__(0x148)) / 0x3 + parseInt(__DECODE_0__(0x14f)) / 0x4 * (parseInt(__DECODE_0__(0x143)) / 0x5) + parseInt(__DECODE_0__(0x14c)) / 0x6 + -parseInt(__DECODE_0__(0x146)) / 0x7 + -parseInt(__DECODE_0__(0x149)) / 0x8 + parseInt(__DECODE_0__(0x144)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x9996b);
(function main() {
  const lines = require('fs')[__DECODE_0__(0x14d)](__DECODE_0__(0x142), __DECODE_0__(0x147))['trim']()['split']('\x0a');
  const n = Number(lines[__DECODE_0__(0x14b)]());
  const arr = lines[__DECODE_0__(0x14b)]()['split']('\x20')[__DECODE_0__(0x145)](Number);
  const k = 0x2710;
  let cnt_arr = [];
  for (let i = 0x0; i <= k; i++) {
    cnt_arr[i] = 0x0;
  }
  for (let i = 0x0; i < n; i++) {
    cnt_arr[arr[i]]++;
  }
  for (let i = 0x1; i <= k; i++) {
    cnt_arr[i] += cnt_arr[i - 0x1];
  }
  let out_arr = [];
  for (let i = n - 0x1; i >= 0x0; i--) {
    out_arr[--cnt_arr[arr[i]]] = arr[i];
  }
  console[__DECODE_0__(0x14a)](out_arr[__DECODE_0__(0x151)]('\x20'));
})();
function __STRING_ARRAY__() {
  const _0x542035 = ['3007764qhNiKD', 'map', '3554509YdrQoH', 'utf8', '1588182BvdBRr', '3181488ArbJVZ', 'log', 'shift', '1273248HxUMpk', 'readFileSync', '40931jryZCC', '16YrUBBq', '4lxuOnx', 'join', '/dev/stdin', '675795wgXAfa'];
  __STRING_ARRAY__ = function () {
    return _0x542035;
  };
  return __STRING_ARRAY__();
}
