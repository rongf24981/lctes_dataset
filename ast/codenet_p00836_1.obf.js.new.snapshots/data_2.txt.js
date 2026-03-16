(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1b8)) / 0x1 + -parseInt(__DECODE_0__(0x1c0)) / 0x2 * (parseInt(__DECODE_0__(0x1b3)) / 0x3) + parseInt(__DECODE_0__(0x1b6)) / 0x4 + -parseInt(__DECODE_0__(0x1b7)) / 0x5 * (-parseInt(__DECODE_0__(0x1b9)) / 0x6) + parseInt(__DECODE_0__(0x1bb)) / 0x7 + parseInt(__DECODE_0__(0x1b5)) / 0x8 * (-parseInt(__DECODE_0__(0x1ba)) / 0x9) + parseInt(__DECODE_0__(0x1b1)) / 0xa * (-parseInt(__DECODE_0__(0x1c2)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x96662);
function prime(max) {
  var arr = [];
  for (var i = 0x0; i <= max; i++) {
    arr[i] = i;
  }
  arr[0x0] = ![];
  arr[0x1] = ![];
  var sqrt = Math[__DECODE_0__(0x1bc)](Math[__DECODE_0__(0x1ae)](max));
  for (var i = 0x2; i <= sqrt; i++) {
    if (arr[i] == ![]) {
      continue;
    }
    for (var j = i + i; j <= max; j += i) {
      arr[j] = ![];
    }
  }
  var result = [];
  for (var i = 0x0; i <= max; i++) {
    if (arr[i] !== ![]) {
      result['push'](arr[i]);
    }
  }
  return result;
}
var p = prime(0x2710);
function __STRING_ARRAY__() {
  var _0x47b4ed = ['6oROJko', '8739SsiUrk', '7483525qQhcrR', 'floor', '/dev/stdin', 'some', 'utf8', '4vgtbnF', 'length', '14379959MFfesX', 'sqrt', 'map', 'trim', '20uAOHBZ', 'readFileSync', '283749YoMebT', 'forEach', '72LGfrGE', '4013480ywGaLF', '1895945iVxhGA', '976843mwHjCW'];
  __STRING_ARRAY__ = function () {
    return _0x47b4ed;
  };
  return __STRING_ARRAY__();
}
var input = require('fs')[__DECODE_0__(0x1b2)](__DECODE_0__(0x1bd), __DECODE_0__(0x1bf));
var arr = input[__DECODE_0__(0x1b0)]()['split']('\x0a')[__DECODE_0__(0x1af)](Number);
var cnt = [];
for (var i = 0x0; i <= 0x2710; i++) {
  cnt[i] = 0x0;
}
function __DECODE_0__(HdwesK, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1ae;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(HdwesK, key);
}
p[__DECODE_0__(0x1b4)](function (v, index) {
  cnt[v]++;
  for (var i = index + 0x1; i < p[__DECODE_0__(0x1c1)]; i++) {
    v += p[i];
    if (v > 0x2710) {
      break;
    }
    cnt[v]++;
  }
});
arr[__DECODE_0__(0x1be)](function (v) {
  if (v == 0x0) {
    return !![];
  }
  console['log'](cnt[v]);
});
