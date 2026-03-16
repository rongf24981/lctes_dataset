function __DECODE_0__(zeIfLt, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xd6;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(zeIfLt, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xd6)) / 0x1 * (-parseInt(__DECODE_0__(0xd9)) / 0x2) + -parseInt(__DECODE_0__(0xe4)) / 0x3 * (-parseInt(__DECODE_0__(0xe6)) / 0x4) + parseInt(__DECODE_0__(0xdf)) / 0x5 + parseInt(__DECODE_0__(0xdb)) / 0x6 * (-parseInt(__DECODE_0__(0xda)) / 0x7) + parseInt(__DECODE_0__(0xe1)) / 0x8 + -parseInt(__DECODE_0__(0xe0)) / 0x9 * (parseInt(__DECODE_0__(0xe5)) / 0xa) + parseInt(__DECODE_0__(0xe3)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xdbf4a);
var input = '';
function __STRING_ARRAY__() {
  var _0x6093be = ['6229304LOPZop', 'end', '25316500HnFRbD', '1384458Rdoozh', '20sMSdZs', '4YXmvZd', '49636AKUhCH', 'length', 'split', '18cDPiwP', '365540JMXQkJ', '126bRZdZV', 'resume', 'utf-8', 'stdin', '1723045fqrQTH', '6488892mWIwnA'];
  __STRING_ARRAY__ = function () {
    return _0x6093be;
  };
  return __STRING_ARRAY__();
}
var readable = process[__DECODE_0__(0xde)];
readable[__DECODE_0__(0xdc)]();
readable['setEncoding'](__DECODE_0__(0xdd));
readable['on']('data', function (chunk) {
  input += chunk;
});
readable['on'](__DECODE_0__(0xe2), function () {
  var data = input[__DECODE_0__(0xd8)]('\x0a');
  var n = data[0x0];
  var tscore = 0x0;
  var hscore = 0x0;
  for (var i = 0x1; i < data[__DECODE_0__(0xd7)]; i++) {
    var taha = data[i][__DECODE_0__(0xd8)]('\x20');
    if (taha[0x0] < taha[0x1]) {
      hscore += 0x3;
    } else {
      if (taha[0x1] < taha[0x0]) {
        tscore += 0x3;
      } else {
        hscore += 0x1;
        tscore += 0x1;
      }
    }
  }
  console['log'](tscore + '\x20' + hscore);
});
