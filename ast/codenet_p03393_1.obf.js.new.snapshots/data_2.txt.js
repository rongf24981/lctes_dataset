function __DECODE_0__(VVubkk, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x93;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(VVubkk, key);
}
function __STRING_ARRAY__() {
  var _0x3e704b = ['533940CfThHv', '527566UDvVBD', 'utf8', '36ICEYJm', '/dev/stdin', 'zyxwvutsrqponmlkjihgfedcba', '177950nCwMzo', 'fill', '12vkcvwD', '40156MMAPIL', 'charCodeAt', 'length', 'slice', '709144LzfZrS', 'trim', '3ZXysvo', '2818340hmNNcG', 'log', '16415920ItQZaT', 'fromCharCode'];
  __STRING_ARRAY__ = function () {
    return _0x3e704b;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x96)) / 0x1 + -parseInt(__DECODE_0__(0xa5)) / 0x2 + parseInt(__DECODE_0__(0x9f)) / 0x3 * (parseInt(__DECODE_0__(0x99)) / 0x4) + parseInt(__DECODE_0__(0xa4)) / 0x5 * (-parseInt(__DECODE_0__(0x98)) / 0x6) + -parseInt(__DECODE_0__(0xa0)) / 0x7 + parseInt(__DECODE_0__(0x9d)) / 0x8 * (-parseInt(__DECODE_0__(0x93)) / 0x9) + parseInt(__DECODE_0__(0xa2)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x3a61a);
function Main(s) {
  const n = s[__DECODE_0__(0x9b)];
  const a = 'a'[__DECODE_0__(0x9a)]();
  var b = Array(0x1a)[__DECODE_0__(0x97)](0x1);
  var i;
  if (n < 0x1a) {
    for (i = 0x0; i < n; i++) {
      b[s['charCodeAt'](i) - a] = 0x0;
    }
    for (i = 0x0; i < 0x1a; i++) {
      if (b[i]) {
        s += String[__DECODE_0__(0xa3)](a + i);
        break;
      }
    }
  } else {
    if (s === __DECODE_0__(0x95)) {
      console[__DECODE_0__(0xa1)](-0x1);
      return;
    }
    var c = s[0x19];
    b[s[__DECODE_0__(0x9a)](0x19) - a] = 0x0;
    for (i = 0x18; i >= 0x0; i--) {
      if (c > s[i]) {
        c = s[__DECODE_0__(0x9a)](i) - a;
        s = s[__DECODE_0__(0x9c)](0x0, i);
        break;
      } else {
        b[s[__DECODE_0__(0x9a)](i) - a] = 0x0;
      }
    }
    for (var j = c - a; j < 0x1a; j++) {
      if (b[j] === 0x0) {
        s += String[__DECODE_0__(0xa3)](a + j);
        break;
      }
    }
  }
  console[__DECODE_0__(0xa1)](s);
}
Main(require('fs')['readFileSync'](__DECODE_0__(0x94), __DECODE_0__(0xa6))[__DECODE_0__(0x9e)]());
