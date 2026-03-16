function __DECODE_0__(xrfNsx, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xc1;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(xrfNsx, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xcf)) / 0x1 + -parseInt(__DECODE_0__(0xc7)) / 0x2 + parseInt(__DECODE_0__(0xd1)) / 0x3 + -parseInt(__DECODE_0__(0xcc)) / 0x4 * (-parseInt(__DECODE_0__(0xd0)) / 0x5) + -parseInt(__DECODE_0__(0xc9)) / 0x6 + parseInt(__DECODE_0__(0xc4)) / 0x7 + parseInt(__DECODE_0__(0xc6)) / 0x8 * (-parseInt(__DECODE_0__(0xcb)) / 0x9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x86b41);
function __STRING_ARRAY__() {
  var _0x36c3af = ['614140aICzPt', '55iBimzE', '1507365nCuHlB', 'resume', 'split', 'pow', 'length', '7049245WiMxYL', 'log', '8qrZUii', '833040lqBsqF', 'replace', '4837722HUJBJx', 'stdin', '12330189yELmyD', '371252GhoGoE', 'utf8', 'data'];
  __STRING_ARRAY__ = function () {
    return _0x36c3af;
  };
  return __STRING_ARRAY__();
}
process[__DECODE_0__(0xca)][__DECODE_0__(0xd2)]();
process[__DECODE_0__(0xca)]['setEncoding'](__DECODE_0__(0xcd));
process[__DECODE_0__(0xca)]['on'](__DECODE_0__(0xce), function (chunk) {
  var line;
  var lines = chunk[__DECODE_0__(0xc1)]('\x0a');
  var i;
  var len = lines['length'];
  var j;
  var jLen;
  var deg;
  var pow;
  var max;
  for (i = 0x0; i < len; i++) {
    line = lines[i];
    if (line == '#') {
      break;
    }
    line = line[__DECODE_0__(0xc8)](/north/g, 0x0);
    line = line[__DECODE_0__(0xc8)](/west/g, 0x1);
    deg = 0x0;
    jLen = line['length'];
    pow = line[__DECODE_0__(0xc3)] - 0x1;
    max = 0x5a * Math[__DECODE_0__(0xc2)](0x2, pow);
    for (j = jLen; j >= 0x0; j--) {
      if (line[j] * 0x1) {
        if (deg < max) {
          deg += 0x5a * Math['pow'](0x2, j);
        }
      } else {
        if (deg > 0x0) {
          deg -= 0x5a * Math[__DECODE_0__(0xc2)](0x2, j);
        }
      }
    }
    while (pow > 0x0 && deg % 0x2 === 0x0) {
      deg = deg / 0x2;
      pow--;
    }
    if (pow > 0x0) {
      console[__DECODE_0__(0xc5)](deg + '/' + Math['pow'](0x2, pow));
    } else {
      console[__DECODE_0__(0xc5)](deg);
    }
  }
});
