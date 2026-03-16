(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xdf)) / 0x1 + parseInt(__DECODE_0__(0xd7)) / 0x2 * (-parseInt(__DECODE_0__(0xd9)) / 0x3) + -parseInt(__DECODE_0__(0xe4)) / 0x4 * (parseInt(__DECODE_0__(0xe2)) / 0x5) + parseInt(__DECODE_0__(0xdc)) / 0x6 * (parseInt(__DECODE_0__(0xe5)) / 0x7) + parseInt(__DECODE_0__(0xe6)) / 0x8 * (-parseInt(__DECODE_0__(0xda)) / 0x9) + -parseInt(__DECODE_0__(0xe1)) / 0xa + parseInt(__DECODE_0__(0xde)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x5c9af);
function __DECODE_0__(qRBKsP, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xd7;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(qRBKsP, key);
}
var input = require('fs')['readFileSync'](__DECODE_0__(0xdd), 'utf8');
var arr = input[__DECODE_0__(0xdb)]()[__DECODE_0__(0xe3)]('\x0a')['map'](Number);
arr[__DECODE_0__(0xd8)](function (v) {
  if (v == 0x0) {
    return !![];
  }
  var cnt = 0x0;
  for (var a = 0x1; a <= 0xb5; a++) {
    var A = a * a;
    if (v < A) {
      break;
    }
    if (A == v) {
      cnt++;
    }
    for (var b = a; b <= 0xb5; b++) {
      var B = A + b * b;
      if (v < B) {
        break;
      }
      if (B == v) {
        cnt++;
      }
      for (var c = b; c <= 0xb5; c++) {
        var C = B + c * c;
        if (v < C) {
          break;
        }
        if (C == v) {
          cnt++;
        }
        for (var d = c; d <= 0xb5; d++) {
          var D = C + d * d;
          if (v < D) {
            break;
          }
          if (D == v) {
            cnt++;
          }
        }
      }
    }
  }
  console[__DECODE_0__(0xe0)](cnt);
});
function __STRING_ARRAY__() {
  var _0x433c1f = ['1860cqXJqY', 'split', '296nWqnMT', '7mTIWrx', '8EJEXKO', '4UFgtRG', 'some', '1096734xAQwBF', '3960279ZoKkNL', 'trim', '3413490LtxDTS', '/dev/stdin', '7973735DMTSMN', '705020fSjhzg', 'log', '4207940BFJKER'];
  __STRING_ARRAY__ = function () {
    return _0x433c1f;
  };
  return __STRING_ARRAY__();
}
