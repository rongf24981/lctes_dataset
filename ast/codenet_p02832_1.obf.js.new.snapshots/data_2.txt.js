(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x108)) / 0x1 + parseInt(__DECODE_0__(0xfa)) / 0x2 + parseInt(__DECODE_0__(0xf3)) / 0x3 + parseInt(__DECODE_0__(0xf4)) / 0x4 * (-parseInt(__DECODE_0__(0xfb)) / 0x5) + -parseInt(__DECODE_0__(0x109)) / 0x6 + -parseInt(__DECODE_0__(0x105)) / 0x7 * (parseInt(__DECODE_0__(0xf5)) / 0x8) + parseInt(__DECODE_0__(0xf8)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x34c86);
process['stdin'][__DECODE_0__(0xf6)]();
process[__DECODE_0__(0x103)][__DECODE_0__(0xff)](__DECODE_0__(0x102));
var lines = [];
var reader = require(__DECODE_0__(0xfe))[__DECODE_0__(0xfc)]({
  'input': process[__DECODE_0__(0x103)],
  'output': process[__DECODE_0__(0xf9)]
});
function __STRING_ARRAY__() {
  var _0x90e2ab = ['log', 'utf8', 'stdin', 'line', '28euVPQS', 'length', 'splice', '22885DBmugE', '1530534mrIPnQ', '579489mhaDUd', '108ifkvyN', '271760KDpyva', 'resume', 'map', '3935637SfMnMP', 'stdout', '283708pOqAXc', '34820sxkMDx', 'createInterface', 'close', 'readline', 'setEncoding', 'push'];
  __STRING_ARRAY__ = function () {
    return _0x90e2ab;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(ZkafML, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xf3;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ZkafML, key);
}
reader['on'](__DECODE_0__(0x104), line => {
  lines[__DECODE_0__(0x100)](line);
});
reader['on'](__DECODE_0__(0xfd), () => {
  var count = lines[0x0];
  var ary = lines[0x1]['split']('\x20')[__DECODE_0__(0xf7)](x => Number(x));
  var break_count = 0x0;
  var tmp_count = 0x1;
  var c = 0x0;
  for (var i = 0x0; i < count; i++) {
    if (ary[tmp_count - 0x1] == tmp_count) {
      c += tmp_count;
      tmp_count++;
    } else {
      break_count++;
      ary[__DECODE_0__(0x107)](tmp_count - 0x1, 0x1);
    }
  }
  var judge = ![];
  if (ary['length'] == 0x0) {
    judge = !![];
  }
  if (sum(ary[__DECODE_0__(0x106)]) != c) {
    judge = !![];
  }
  if (break_count == 0x0 && judge) {
    console[__DECODE_0__(0x101)](0x0);
  } else {
    if (judge) {
      console[__DECODE_0__(0x101)](-0x1);
    } else {
      console[__DECODE_0__(0x101)](break_count);
    }
  }
  function sum(n) {
    return n * (n + 0x1) * 0.5;
  }
});
