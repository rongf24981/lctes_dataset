(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x7b)) / 0x1 + -parseInt(__DECODE_0__(0x69)) / 0x2 + -parseInt(__DECODE_0__(0x73)) / 0x3 + parseInt(__DECODE_0__(0x6c)) / 0x4 * (-parseInt(__DECODE_0__(0x72)) / 0x5) + -parseInt(__DECODE_0__(0x70)) / 0x6 * (parseInt(__DECODE_0__(0x6d)) / 0x7) + parseInt(__DECODE_0__(0x74)) / 0x8 * (-parseInt(__DECODE_0__(0x71)) / 0x9) + parseInt(__DECODE_0__(0x7a)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x55d11);
function BFS() {
  var bfs = [[s0, 0x0]];
  while (!![]) {
    if (bfs[__DECODE_0__(0x78)] == 0x0) {
      break;
    }
    var [leaf, cnt] = bfs[__DECODE_0__(0x6f)]();
    if (leaf == s1) {
      flag = !![];
      console['log'](cnt);
      break;
    }
    ab[__DECODE_0__(0x79)](v => {
      if (leaf['includes'](v[0x0])) {
        var re = new RegExp(v[0x0], 'g');
        var str = leaf[__DECODE_0__(0x6b)](re, v[0x1]);
        if (str[__DECODE_0__(0x78)] <= 0xa) {
          bfs[__DECODE_0__(0x77)]([str, cnt + 0x1]);
        }
      }
    });
  }
}
var input = require('fs')[__DECODE_0__(0x6a)](__DECODE_0__(0x7c), 'utf8');
var arr = input[__DECODE_0__(0x6e)]()[__DECODE_0__(0x76)]('\x0a');
while (!![]) {
  var n = arr[__DECODE_0__(0x6f)]() - 0x0;
  if (n == 0x0) {
    break;
  }
  var ab = arr[__DECODE_0__(0x75)](0x0, n)[__DECODE_0__(0x7d)](v => v['split']('\x20'));
  ;
  arr = arr[__DECODE_0__(0x75)](n);
  var s0 = arr[__DECODE_0__(0x6f)]();
  var s1 = arr[__DECODE_0__(0x6f)]();
  var flag = ![];
  BFS();
  if (!flag) {
    console['log'](-0x1);
  }
}
function __DECODE_0__(YeyMMU, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x69;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YeyMMU, key);
}
function __STRING_ARRAY__() {
  var _0x3903e1 = ['260986HZSjzx', '/dev/stdin', 'map', '622074FhHzUo', 'readFileSync', 'replace', '260GIEIhP', '400127AVzrrK', 'trim', 'shift', '12oqcUGO', '8559hioRAh', '45565uWYNSB', '931674OwkBRs', '408ocfEQw', 'slice', 'split', 'push', 'length', 'forEach', '14672820APBOHW'];
  __STRING_ARRAY__ = function () {
    return _0x3903e1;
  };
  return __STRING_ARRAY__();
}
