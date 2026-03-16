function __STRING_ARRAY__() {
  const _0x272f13 = ['23958224VJSHLa', '4061680YdoLzK', '/dev/stdin', '1893598RApttc', 'shift', 'split', '1122432mweTFq', 'utf8', 'fill', 'map', '4119666pPptUk', '882048YEfbAA', '1jCJurX', '9697401xFHkWJ', 'log'];
  __STRING_ARRAY__ = function () {
    return _0x272f13;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(ErZyGi, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x14f;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ErZyGi, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x153)) / 0x1 * (-parseInt(__DECODE_0__(0x159)) / 0x2) + -parseInt(__DECODE_0__(0x15c)) / 0x3 + parseInt(__DECODE_0__(0x152)) / 0x4 + -parseInt(__DECODE_0__(0x157)) / 0x5 + -parseInt(__DECODE_0__(0x151)) / 0x6 + -parseInt(__DECODE_0__(0x154)) / 0x7 + parseInt(__DECODE_0__(0x156)) / 0x8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xdc9e7);
function max(array) {
  var result = -0x1 * Infinity;
  for (num of array) {
    if (result < num) {
      result = num;
    }
  }
  return result;
}
function main(input) {
  const lines = input[__DECODE_0__(0x15b)]('\x0a');
  const nums = lines[__DECODE_0__(0x150)](line => line[__DECODE_0__(0x15b)]('\x20')['map'](x => parseInt(x)));
  var n_c = nums[__DECODE_0__(0x15a)]();
  const N = n_c[0x0];
  const C = n_c[0x1];
  const t = Array(0x30d42);
  const max_recorders = Array(0x30d42);
  max_recorders[__DECODE_0__(0x14f)](0x0);
  for (var c = 0x1; c <= C; c++) {
    t[__DECODE_0__(0x14f)](0x0);
    for (var n = 0x0; n < N; n++) {
      if (nums[n][0x2] == c) {
        t[nums[n][0x0] * 0x2 - 0x1]++;
        t[nums[n][0x1] * 0x2]--;
      }
    }
    for (var i = 0x1; i < 0x30d42; i++) {
      t[i] += t[i - 0x1];
    }
    for (var i = 0x1; i < 0x30d42; i++) {
      if (t[i] > 0x0) {
        max_recorders[i]++;
      }
    }
  }
  console[__DECODE_0__(0x155)](max(max_recorders));
}
main(require('fs')['readFileSync'](__DECODE_0__(0x158), __DECODE_0__(0x15d)));
