'use strict';

function __DECODE_0__(qAhnCC, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xab;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(qAhnCC, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0xb5)) / 0x1 + -parseInt(__DECODE_0__(0xb1)) / 0x2 * (-parseInt(__DECODE_0__(0xb7)) / 0x3) + -parseInt(__DECODE_0__(0xb3)) / 0x4 * (-parseInt(__DECODE_0__(0xae)) / 0x5) + -parseInt(__DECODE_0__(0xad)) / 0x6 + parseInt(__DECODE_0__(0xb8)) / 0x7 * (parseInt(__DECODE_0__(0xb2)) / 0x8) + -parseInt(__DECODE_0__(0xac)) / 0x9 + parseInt(__DECODE_0__(0xbb)) / 0xa * (parseInt(__DECODE_0__(0xaf)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x2153f);
function main(input) {
  let pass_friend_num = parseInt(input[__DECODE_0__(0xb0)]('\x0a')[0x0][__DECODE_0__(0xb0)]('\x20')[0x0]);
  const pass_height = parseInt(input[__DECODE_0__(0xb0)]('\x0a')[0x0][__DECODE_0__(0xb0)]('\x20')[0x1]);
  const friend_height_data = input[__DECODE_0__(0xb0)]('\x0a')[0x1][__DECODE_0__(0xb0)]('\x20');
  for (let i = 0x0; i < friend_height_data[__DECODE_0__(0xab)]; i++) {
    if (pass_height > parseInt(friend_height_data[i])) {
      pass_friend_num--;
    }
  }
  console[__DECODE_0__(0xb6)](pass_friend_num);
}
function __STRING_ARRAY__() {
  const _0x34666a = ['426534LNkXBA', '255WgIlpJ', '242PKGvwy', 'split', '2DxWFfD', '425032MgjmDg', '2632wtiWIb', 'readFileSync', '137381UokrEx', 'log', '494313RLxBVt', '7EPdErj', 'UTF-8', '/dev/stdin', '15970aJcrXG', 'length', '1947357tjBlik'];
  __STRING_ARRAY__ = function () {
    return _0x34666a;
  };
  return __STRING_ARRAY__();
}
main(require('fs')[__DECODE_0__(0xb4)](__DECODE_0__(0xba), __DECODE_0__(0xb9)));
