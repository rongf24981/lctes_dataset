(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x116)) / 0x1 * (-parseInt(__DECODE_0__(0x10c)) / 0x2) + -parseInt(__DECODE_0__(0x10b)) / 0x3 + -parseInt(__DECODE_0__(0x106)) / 0x4 * (-parseInt(__DECODE_0__(0x114)) / 0x5) + parseInt(__DECODE_0__(0x109)) / 0x6 + parseInt(__DECODE_0__(0x103)) / 0x7 * (parseInt(__DECODE_0__(0x10e)) / 0x8) + parseInt(__DECODE_0__(0x107)) / 0x9 * (-parseInt(__DECODE_0__(0x108)) / 0xa) + -parseInt(__DECODE_0__(0x102)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xf2068);
function main() {
  var hands;
  var pattern;
  var swap;
  var i = 0x0;
  var j;
  for (;;) {
    if (input[i] == 0x0) {
      break;
    }
    hands = [];
    for (j = 0x0; j < 0x5; j++) {
      hands['push'](Number(input[i++]));
    }
    pattern = hands[__DECODE_0__(0x10a)](function (pat, h) {
      pat[h] = !![];
      return pat;
    }, {});
    keys = Object[__DECODE_0__(0x110)](pattern)[__DECODE_0__(0x112)](Number)[__DECODE_0__(0x113)](function (x, y) {
      return x - y;
    });
    if (keys['length'] === 0x2) {
      if (keys[0x1] - keys[0x0] == 0x2) {
        swap = keys[0x0];
        keys[0x0] = keys[0x1];
        keys[0x1] = swap;
      }
      hands[__DECODE_0__(0x115)](function (h) {
        console[__DECODE_0__(0x111)](keys[__DECODE_0__(0x105)](h) + 0x1);
      });
    } else {
      hands[__DECODE_0__(0x115)](function () {
        console[__DECODE_0__(0x111)](0x3);
      });
    }
  }
}
function __STRING_ARRAY__() {
  var _0x4375b0 = ['12OaOmhU', 'utf8', '8gDpJLv', 'resume', 'keys', 'log', 'map', 'sort', '10BhUflS', 'forEach', '234611phaGXS', 'end', '2146815qcITWe', '277158ThxFyZ', 'stdin', 'indexOf', '1654192eMMRQq', '63nnistR', '849790axXexF', '247668OciKxT', 'reduce', '1602840tfYTFc'];
  __STRING_ARRAY__ = function () {
    return _0x4375b0;
  };
  return __STRING_ARRAY__();
}
var input = '';
process[__DECODE_0__(0x104)][__DECODE_0__(0x10f)]();
function __DECODE_0__(SCdYDV, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x102;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(SCdYDV, key);
}
process[__DECODE_0__(0x104)]['setEncoding'](__DECODE_0__(0x10d));
process[__DECODE_0__(0x104)]['on']('data', function (chunk) {
  input += chunk;
});
process[__DECODE_0__(0x104)]['on'](__DECODE_0__(0x117), function () {
  input = input['split']('\x0a');
  main();
});
