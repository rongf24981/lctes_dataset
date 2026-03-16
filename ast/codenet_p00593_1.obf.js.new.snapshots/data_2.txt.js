(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xc1)) / 0x1 + parseInt(__DECODE_0__(0xbb)) / 0x2 * (-parseInt(__DECODE_0__(0xb9)) / 0x3) + -parseInt(__DECODE_0__(0xbc)) / 0x4 * (parseInt(__DECODE_0__(0xb2)) / 0x5) + parseInt(__DECODE_0__(0xb7)) / 0x6 * (-parseInt(__DECODE_0__(0xc0)) / 0x7) + parseInt(__DECODE_0__(0xb5)) / 0x8 + parseInt(__DECODE_0__(0xb3)) / 0x9 * (parseInt(__DECODE_0__(0xbd)) / 0xa) + -parseInt(__DECODE_0__(0xc3)) / 0xb * (-parseInt(__DECODE_0__(0xc2)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xd1797);
function bomb(y, x, cnt, f) {
  yx[y][x] = (__DECODE_0__(0xb0) + cnt)[__DECODE_0__(0xb8)](-0x3);
  if (y == n - 0x1 && x == n - 0x1) {
    return;
  } else {
    if (y == n - 0x1 && f == -0x1) {
      bomb(y, x + 0x1, cnt + 0x1, 0x1);
    } else {
      if (y == n - 0x1 && f == 0x1) {
        bomb(y - 0x1, x + 0x1, cnt + 0x1, 0x1);
      } else {
        if (x == n - 0x1 && f == 0x1) {
          bomb(y + 0x1, x, cnt + 0x1, -0x1);
        } else {
          if (x == n - 0x1 && f == -0x1) {
            bomb(y + 0x1, x - 0x1, cnt + 0x1, -0x1);
          } else {
            if (y == 0x0 && f == 0x1) {
              bomb(y, x + 0x1, cnt + 0x1, -0x1);
            } else {
              if (y == 0x0 && f == -0x1) {
                bomb(y + 0x1, x - 0x1, cnt + 0x1, -0x1);
              } else {
                if (x == 0x0 && f == -0x1) {
                  bomb(y + 0x1, x, cnt + 0x1, 0x1);
                } else {
                  if (x == 0x0 && f == 0x1) {
                    bomb(y - 0x1, x + 0x1, cnt + 0x1, 0x1);
                  } else {
                    if (f == 0x1) {
                      bomb(y - 0x1, x + 0x1, cnt + 0x1, 0x1);
                    } else {
                      if (f == -0x1) {
                        bomb(y + 0x1, x - 0x1, cnt + 0x1, -0x1);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
var input = require('fs')['readFileSync'](__DECODE_0__(0xbf), __DECODE_0__(0xbe));
var Arr = input[__DECODE_0__(0xae)]()[__DECODE_0__(0xb1)]('\x0a');
var I = 0x1;
function __STRING_ARRAY__() {
  var _0x12bd44 = ['284193VgyYxX', 'shift', '9914096slOLGC', 'replace', '1876290zsrxsy', 'slice', '3ijFkUn', 'log', '3372216gVxlUp', '2195008grsxRs', '10wsKuNd', 'utf8', '/dev/stdin', '21rgzpgd', '1429471NwTrNu', '12hsmvHW', '20673994IOBKXn', 'join', 'trim', 'Case\x20', '\x20\x20\x20', 'split', '10SrTEUu'];
  __STRING_ARRAY__ = function () {
    return _0x12bd44;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(Sgfyyj, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xad;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(Sgfyyj, key);
}
while (!![]) {
  var n = Arr[__DECODE_0__(0xb4)]() - 0x0;
  if (n == 0x0) {
    break;
  }
  var yx = [];
  for (var i = 0x0; i < n; i++) {
    yx[i] = [];
    for (var j = 0x0; j < n; j++) {
      yx[i][j] = 0x0;
    }
  }
  bomb(0x0, 0x0, 0x1, 0x1);
  console[__DECODE_0__(0xba)](__DECODE_0__(0xaf) + I + ':');
  I++;
  console[__DECODE_0__(0xba)](yx[__DECODE_0__(0xad)]('\x0a')[__DECODE_0__(0xb6)](/\,/g, ''));
}
