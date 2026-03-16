(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1dd)) / 0x1 + parseInt(__DECODE_0__(0x1d6)) / 0x2 + -parseInt(__DECODE_0__(0x1d2)) / 0x3 * (parseInt(__DECODE_0__(0x1cf)) / 0x4) + parseInt(__DECODE_0__(0x1d5)) / 0x5 * (parseInt(__DECODE_0__(0x1ce)) / 0x6) + -parseInt(__DECODE_0__(0x1d0)) / 0x7 + -parseInt(__DECODE_0__(0x1d1)) / 0x8 + parseInt(__DECODE_0__(0x1d4)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xa7140);
(function () {
  var max;
  var max_log2;
  var series;
  var col;
  var j;
  var str;
  var i;
  var line;
  var hw;
  var even;
  var odd;
  max = 0x12c;
  max_log2 = max[__DECODE_0__(0x1de)](0x2)[__DECODE_0__(0x1d9)] - 0x1;
  series = [0x1, 0x2];
  col = ['#', '#.'];
  j = 0x2;
  str = '#.';
  for (i = 0x2; i <= max_log2; i++) {
    series[__DECODE_0__(0x1da)](j *= 0x2);
    col['push'](str = str + str);
  }
  series[__DECODE_0__(0x1da)](series[series[__DECODE_0__(0x1d9)] - 0x1] * 0x2);
  function get_column(w) {
    var i;
    var res;
    res = '';
    for (i = 0x1; i < series[__DECODE_0__(0x1d9)]; i++) {
      if (w < series[i]) {
        break;
      }
      if (w % series[i + 0x1] >= series[i]) {
        res = res + col[i];
      }
    }
    if (w % 0x2 === 0x1) {
      res = res + '#';
    }
    return res;
  }
  line = require('fs')['readFileSync'](__DECODE_0__(0x1d3), __DECODE_0__(0x1cc))['split']('\x0a');
  for (i in line) {
    if (line[i] === __DECODE_0__(0x1d8)) {
      break;
    }
    hw = line[i][__DECODE_0__(0x1cd)]('\x20')[__DECODE_0__(0x1d7)](Number);
    even = get_column(hw[0x1]);
    odd = even[__DECODE_0__(0x1db)](0x1) + (hw[0x1] % 0x2 === 0x0 ? '#' : '.');
    for (j = 0x0; j < hw[0x0]; j++) {
      if (j % 0x2 === 0x0) {
        console['log'](even);
      } else {
        console[__DECODE_0__(0x1dc)](odd);
      }
    }
    console[__DECODE_0__(0x1dc)]('');
  }
})();
function __DECODE_0__(hAZbHI, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1cc;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(hAZbHI, key);
}
function __STRING_ARRAY__() {
  var _0x18d1a5 = ['5nciGQm', '1650860BblotM', 'map', '0\x200', 'length', 'push', 'slice', 'log', '164538cSZInj', 'toString', 'ascii', 'split', '450888WawIqq', '26932eebpzd', '8232000BQpqIu', '6162760gMRSjI', '315ybWKhM', '/dev/stdin', '20452914XNRcZq'];
  __STRING_ARRAY__ = function () {
    return _0x18d1a5;
  };
  return __STRING_ARRAY__();
}
