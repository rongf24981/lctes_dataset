'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0xc2)) / 0x1 * (-parseInt(__DECODE_0__(0xcc)) / 0x2) + parseInt(__DECODE_0__(0xc5)) / 0x3 * (-parseInt(__DECODE_0__(0xcb)) / 0x4) + -parseInt(__DECODE_0__(0xc6)) / 0x5 * (-parseInt(__DECODE_0__(0xd5)) / 0x6) + -parseInt(__DECODE_0__(0xd4)) / 0x7 * (parseInt(__DECODE_0__(0xce)) / 0x8) + -parseInt(__DECODE_0__(0xcd)) / 0x9 + parseInt(__DECODE_0__(0xca)) / 0xa * (-parseInt(__DECODE_0__(0xd1)) / 0xb) + parseInt(__DECODE_0__(0xcf)) / 0xc;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x1988d);
function __DECODE_0__(hzgggL, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xc2;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(hzgggL, key);
}
const permutation = ({
  result = [],
  pre = [],
  post: post,
  n = post[__DECODE_0__(0xc4)]
}) => {
  if (n > 0x0) {
    post[__DECODE_0__(0xc8)]((_, i) => {
      const rest = [...post];
      const elem = rest['splice'](i, 0x1);
      permutation({
        'result': result,
        'pre': [...pre, ...elem],
        'post': rest,
        'n': n - 0x1
      });
    });
  } else {
    result['push'](pre);
  }
  return result;
};
function Main(inputs) {
  const input = inputs[__DECODE_0__(0xd6)]('\x0a');
  const n = Number(input[0x0]);
  const p = input[0x1];
  const q = input[0x2];
  const perm = permutation({
    'post': new Array(n)[__DECODE_0__(0xc7)](0x0)['map']((_, i) => i + 0x1)
  })[__DECODE_0__(0xd3)](v => v[__DECODE_0__(0xc3)]('\x20'));
  const a = perm[__DECODE_0__(0xd0)](p);
  const b = perm[__DECODE_0__(0xd0)](q);
  console['log'](Math['abs'](a - b));
}
function __STRING_ARRAY__() {
  const _0xbf71f6 = ['1470978EYWWLy', '109896JhiFKj', '6312876PJZTsF', 'indexOf', '11UtKmQW', '/dev/stdin', 'map', '35KYYxKH', '12QBvBmq', 'split', '1bOKHmO', 'join', 'length', '312681uZZmpB', '57035XFFzCJ', 'fill', 'forEach', 'utf8', '232510rlvluV', '8VxBvsv', '39068MlOTQa'];
  __STRING_ARRAY__ = function () {
    return _0xbf71f6;
  };
  return __STRING_ARRAY__();
}
Main(require('fs')['readFileSync'](__DECODE_0__(0xd2), __DECODE_0__(0xc9)));
