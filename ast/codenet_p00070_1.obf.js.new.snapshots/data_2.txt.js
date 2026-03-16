(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x133)) / 0x1 + parseInt(__DECODE_0__(0x136)) / 0x2 * (parseInt(__DECODE_0__(0x137)) / 0x3) + parseInt(__DECODE_0__(0x126)) / 0x4 * (parseInt(__DECODE_0__(0x124)) / 0x5) + -parseInt(__DECODE_0__(0x135)) / 0x6 + -parseInt(__DECODE_0__(0x139)) / 0x7 + -parseInt(__DECODE_0__(0x12c)) / 0x8 * (-parseInt(__DECODE_0__(0x12b)) / 0x9) + parseInt(__DECODE_0__(0x12e)) / 0xa * (parseInt(__DECODE_0__(0x13a)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xd5981);
function perm(xs, n, s, callback) {
  var x;
  var i;
  var len = xs['length'];
  s = s || [];
  if (n === 0x0) {
    callback(s);
  } else {
    for (i = 0x0; i < len; i++) {
      x = xs[__DECODE_0__(0x128)]();
      s[__DECODE_0__(0x12a)](x);
      perm(xs, n - 0x1, s, callback);
      s[__DECODE_0__(0x134)]();
      xs[__DECODE_0__(0x12a)](x);
    }
  }
}
function main() {
  input[__DECODE_0__(0x12d)](function (line) {
    var n;
    var s;
    var r = 0x0;
    if (line['trim']() === '') {
      return;
    }
    line = line[__DECODE_0__(0x138)]('\x20')[__DECODE_0__(0x127)](parseFloat);
    n = line[0x0];
    s = line[0x1];
    perm([0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9], n, [], function (xs) {
      r += xs[__DECODE_0__(0x12f)](function (m, x, i) {
        return m + x * (i + 0x1);
      }, 0x0) === s ? 0x1 : 0x0;
    });
    console[__DECODE_0__(0x132)](r);
  });
}
var input = '';
process[__DECODE_0__(0x131)]['resume']();
process[__DECODE_0__(0x131)]['setEncoding'](__DECODE_0__(0x125));
function __DECODE_0__(uIJboF, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x124;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(uIJboF, key);
}
process['stdin']['on'](__DECODE_0__(0x130), function (chunk) {
  input += chunk;
});
process[__DECODE_0__(0x131)]['on'](__DECODE_0__(0x129), function () {
  input = input[__DECODE_0__(0x138)]('\x0a');
  main();
});
function __STRING_ARRAY__() {
  var _0x4644f9 = ['3aTsHlw', 'split', '1303162idJpBf', '12509299iQYvsr', '645TIazYu', 'utf8', '26628uvbGfP', 'map', 'shift', 'end', 'push', '9KYYrUd', '3986104PfyvgJ', 'forEach', '10OBDkMA', 'reduce', 'data', 'stdin', 'log', '794480kkJyka', 'pop', '8546742KHZxhm', '1571518YfKHGA'];
  __STRING_ARRAY__ = function () {
    return _0x4644f9;
  };
  return __STRING_ARRAY__();
}
