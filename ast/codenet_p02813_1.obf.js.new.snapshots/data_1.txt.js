'use strict';

const a0_0x114c34 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x44ef00 = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(_0x44ef00(0xc2)) / 0x1 * (-parseInt(_0x44ef00(0xcc)) / 0x2) + parseInt(_0x44ef00(0xc5)) / 0x3 * (-parseInt(_0x44ef00(0xcb)) / 0x4) + -parseInt(_0x44ef00(0xc6)) / 0x5 * (-parseInt(_0x44ef00(0xd5)) / 0x6) + -parseInt(_0x44ef00(0xd4)) / 0x7 * (parseInt(_0x44ef00(0xce)) / 0x8) + -parseInt(_0x44ef00(0xcd)) / 0x9 + parseInt(_0x44ef00(0xca)) / 0xa * (-parseInt(_0x44ef00(0xd1)) / 0xb) + parseInt(_0x44ef00(0xcf)) / 0xc;
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
  n = post[a0_0x114c34(0xc4)]
}) => {
  const _0x5bce10 = a0_0x114c34;
  if (n > 0x0) {
    post[_0x5bce10(0xc8)]((_, i) => {
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
  const _0x43cc56 = a0_0x114c34;
  const input = inputs[_0x43cc56(0xd6)]('\x0a');
  const n = Number(input[0x0]);
  const p = input[0x1];
  const q = input[0x2];
  const perm = permutation({
    'post': new Array(n)[_0x43cc56(0xc7)](0x0)['map']((_, i) => i + 0x1)
  })[_0x43cc56(0xd3)](v => v[_0x43cc56(0xc3)]('\x20'));
  const a = perm[_0x43cc56(0xd0)](p);
  const b = perm[_0x43cc56(0xd0)](q);
  console['log'](Math['abs'](a - b));
}
function __STRING_ARRAY__() {
  const _0xbf71f6 = ['1470978EYWWLy', '109896JhiFKj', '6312876PJZTsF', 'indexOf', '11UtKmQW', '/dev/stdin', 'map', '35KYYxKH', '12QBvBmq', 'split', '1bOKHmO', 'join', 'length', '312681uZZmpB', '57035XFFzCJ', 'fill', 'forEach', 'utf8', '232510rlvluV', '8VxBvsv', '39068MlOTQa'];
  __STRING_ARRAY__ = function () {
    return _0xbf71f6;
  };
  return __STRING_ARRAY__();
}
Main(require('fs')['readFileSync'](a0_0x114c34(0xd2), a0_0x114c34(0xc9)));
