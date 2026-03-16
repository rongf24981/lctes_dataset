function __DECODE_0__(HDJUTj, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x78;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(HDJUTj, key);
}
function __STRING_ARRAY__() {
  var _0x5cb310 = ['/dev/stdin', '583ZQAPes', '6yQfisT', '3rLIhKW', '1834126GcqKpm', '249596NNnfLZ', '23470BgUbwD', '25AFxMGP', 'push', '9rQtUzP', '1598155dTYHwK', 'readFileSync', 'join', 'log', 'map', 'split', '133872YTVQvd', 'length', '1831540KBzuXM', '1852200YHQeKi'];
  __STRING_ARRAY__ = function () {
    return _0x5cb310;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x80)) / 0x1 * (-parseInt(__DECODE_0__(0x7f)) / 0x2) + parseInt(__DECODE_0__(0x7c)) / 0x3 * (parseInt(__DECODE_0__(0x7e)) / 0x4) + -parseInt(__DECODE_0__(0x83)) / 0x5 + -parseInt(__DECODE_0__(0x7b)) / 0x6 * (parseInt(__DECODE_0__(0x7d)) / 0x7) + parseInt(__DECODE_0__(0x78)) / 0x8 + parseInt(__DECODE_0__(0x82)) / 0x9 * (parseInt(__DECODE_0__(0x8b)) / 0xa) + parseInt(__DECODE_0__(0x7a)) / 0xb * (parseInt(__DECODE_0__(0x89)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x2f32a);
function Main(input) {
  a = input['split']('\x0a');
  b = a[0x0]['split']('\x20')['map'](Number);
  c = a[0x1][__DECODE_0__(0x88)]('\x20')[__DECODE_0__(0x87)](Number);
  N = b[0x0];
  K = b[0x1];
  r = 0x0;
  while (c[__DECODE_0__(0x8a)] > 0x1) {
    r++;
    d = [];
    for (i = 0x0; i < K; i++) {
      d[__DECODE_0__(0x81)](c[i]);
    }
    for (i = 0x0; i < K; i++) {
      if (d['sort']()[0x0] !== c[i]) {
        c[i] = '';
      }
    }
    c = c[__DECODE_0__(0x85)]('')[__DECODE_0__(0x88)]('')[__DECODE_0__(0x87)](Number);
  }
  console[__DECODE_0__(0x86)](r);
}
Main(require('fs')[__DECODE_0__(0x84)](__DECODE_0__(0x79), 'utf8'));
