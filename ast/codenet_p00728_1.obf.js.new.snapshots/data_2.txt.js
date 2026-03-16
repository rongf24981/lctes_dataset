function __DECODE_0__(VQVEQu, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x7f;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(VQVEQu, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x8b)) / 0x1 + -parseInt(__DECODE_0__(0x90)) / 0x2 * (-parseInt(__DECODE_0__(0x9b)) / 0x3) + parseInt(__DECODE_0__(0x85)) / 0x4 * (-parseInt(__DECODE_0__(0x8f)) / 0x5) + parseInt(__DECODE_0__(0x88)) / 0x6 * (parseInt(__DECODE_0__(0x97)) / 0x7) + -parseInt(__DECODE_0__(0x99)) / 0x8 * (-parseInt(__DECODE_0__(0x81)) / 0x9) + -parseInt(__DECODE_0__(0x89)) / 0xa * (parseInt(__DECODE_0__(0x94)) / 0xb) + -parseInt(__DECODE_0__(0x7f)) / 0xc * (parseInt(__DECODE_0__(0x8c)) / 0xd);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x9f962);
process[__DECODE_0__(0x8d)][__DECODE_0__(0x98)]();
process[__DECODE_0__(0x8d)][__DECODE_0__(0x84)](__DECODE_0__(0x96));
function __STRING_ARRAY__() {
  var _0x33f3dc = ['resume', '8uFexcj', 'split', '21705CdYYnD', '4588332SApznQ', 'splice', '6282072bOxvcy', 'filter', 'apply', 'setEncoding', '20PdlzCd', 'log', 'indexOf', '108XLhYDr', '20nKFSyz', 'reduce', '778152vRBTnp', '26XxcmDG', 'stdin', 'min', '1304730lnnXxe', '220dEqBom', 'length', 'round', 'shift', '2435345kfBRaT', 'max', 'utf8', '347627PXbHHS'];
  __STRING_ARRAY__ = function () {
    return _0x33f3dc;
  };
  return __STRING_ARRAY__();
}
process['stdin']['on']('data', function (line) {
  before(line);
});
var log = console[__DECODE_0__(0x86)];
function before(line) {
  var lines = line[__DECODE_0__(0x9a)]('\x0a');
  lines = lines[__DECODE_0__(0x82)](function (e) {
    return e !== '';
  });
  main(lines);
}
function main(lines) {
  var ls = lines['map'](function (e) {
    return Number(e);
  });
  while (ls[__DECODE_0__(0x91)] > 0x1) {
    var tpl = ls[__DECODE_0__(0x93)]();
    var arr = ls['slice'](0x0, tpl);
    ls = ls['slice'](tpl);
    var mid = arr[__DECODE_0__(0x87)](Math[__DECODE_0__(0x8e)][__DECODE_0__(0x83)](this, arr));
    arr[__DECODE_0__(0x80)](mid, 0x1);
    var Mid = arr[__DECODE_0__(0x87)](Math[__DECODE_0__(0x95)][__DECODE_0__(0x83)](this, arr));
    arr[__DECODE_0__(0x80)](Mid, 0x1);
    var sum = arr[__DECODE_0__(0x8a)](function (p, c, i, a) {
      return p + c;
    });
    log(Math[__DECODE_0__(0x92)](sum / arr[__DECODE_0__(0x91)]));
  }
}
