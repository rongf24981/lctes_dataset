function __STRING_ARRAY__() {
  var _0x14469d = ['/dev/stdin', 'log', 'shift', 'replace', '1443162GXAvfk', 'this', 'map', '7Imbuay', '5lEQhfX', 'split', '2BcGxau', '288jfiqDE', '429107IZsvzV', 'readFileSync', '84fnhUJt', '5653420AcqOMo', 'charCodeAt', '629199IKqIxe', '1846916vFRcWO', 'length', '395197LYPqaI', 'utf8', '5512fHYCJS'];
  __STRING_ARRAY__ = function () {
    return _0x14469d;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1f9)) / 0x1 + -parseInt(__DECODE_0__(0x1f7)) / 0x2 * (parseInt(__DECODE_0__(0x1e7)) / 0x3) + parseInt(__DECODE_0__(0x1e8)) / 0x4 * (-parseInt(__DECODE_0__(0x1f5)) / 0x5) + -parseInt(__DECODE_0__(0x1f1)) / 0x6 * (parseInt(__DECODE_0__(0x1f4)) / 0x7) + -parseInt(__DECODE_0__(0x1ec)) / 0x8 * (parseInt(__DECODE_0__(0x1f8)) / 0x9) + parseInt(__DECODE_0__(0x1e5)) / 0xa + parseInt(__DECODE_0__(0x1ea)) / 0xb * (parseInt(__DECODE_0__(0x1e4)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x4c25d);
(function (input) {
  var p = input[__DECODE_0__(0x1f0)](/\n$/, '')[__DECODE_0__(0x1f6)]('\x0a');
  var n = Number(p[__DECODE_0__(0x1ef)]());
  for (var i = 0x0; i < n; i++) {
    console[__DECODE_0__(0x1ee)](conv(p[__DECODE_0__(0x1ef)]()));
  }
})(require('fs')[__DECODE_0__(0x1fa)](__DECODE_0__(0x1ed), __DECODE_0__(0x1eb)));
function __DECODE_0__(nIgsNY, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1e4;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(nIgsNY, key);
}
function conv(s) {
  a = s[__DECODE_0__(0x1f6)]('\x20');
  for (var i = 0x0; i < a[__DECODE_0__(0x1e9)]; i++) {
    var r = check(a[i]);
    if (r) {
      return conv_(s, r);
    }
  }
  return s;
}
function conv_(s, r) {
  var a = r[0x0];
  var b = r[0x1];
  var s = s['split']('')[__DECODE_0__(0x1f3)](function (e) {
    if (e === '\x20') {
      return e;
    }
    return String['fromCharCode']((a * e[__DECODE_0__(0x1e6)](0x0) + b) % 0x1a + 'a'[__DECODE_0__(0x1e6)](0x0));
  })['join']('');
  return s;
}
function check(str) {
  if (str[__DECODE_0__(0x1e9)] !== 0x4) {
    return ![];
  }
  for (var i = 0x0; i < 0x1a; i++) {
    for (var j = 0x0; j < 0x1a; j++) {
      var s = conv_(str, [i, j]);
      if (s === __DECODE_0__(0x1f2) || s === 'that') {
        return [i, j];
      }
    }
  }
  return ![];
}
