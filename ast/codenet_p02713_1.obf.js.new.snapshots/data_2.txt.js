(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xca)) / 0x1 * (parseInt(__DECODE_0__(0xd3)) / 0x2) + parseInt(__DECODE_0__(0xd9)) / 0x3 + parseInt(__DECODE_0__(0xcf)) / 0x4 * (parseInt(__DECODE_0__(0xcd)) / 0x5) + parseInt(__DECODE_0__(0xd7)) / 0x6 * (parseInt(__DECODE_0__(0xcb)) / 0x7) + parseInt(__DECODE_0__(0xd2)) / 0x8 * (-parseInt(__DECODE_0__(0xd6)) / 0x9) + -parseInt(__DECODE_0__(0xd1)) / 0xa * (parseInt(__DECODE_0__(0xd0)) / 0xb) + -parseInt(__DECODE_0__(0xd5)) / 0xc;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x6f250);
function gcd(i, j, k) {
  var max = 0x0;
  if (max < i) {
    max = i;
  }
  if (max < j) {
    max = j;
  }
  if (max < k) {
    max = k;
  }
  var a = 0x0;
  for (var count = 0x1; count <= max; count++) {
    if (i % count == 0x0 && i >= count && j % count == 0x0 && j >= count && k % count == 0x0 && k >= count) {
      a = count;
    }
  }
  return a;
}
function __DECODE_0__(wjWwcO, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xca;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(wjWwcO, key);
}
function __STRING_ARRAY__() {
  var _0x59f0e8 = ['120TYaIpm', '114532eNhtQu', '190KvEmxE', '24AbeFCN', '7830FUpQHh', 'log', '20173476PHCJch', '606834JXhnht', '78UmVawQ', 'utf8', '1271373cPpBee', '139yPyQUt', '380009zVaPhZ', 'readFileSync', '143795BamTiw', '/dev/stdin'];
  __STRING_ARRAY__ = function () {
    return _0x59f0e8;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  var N = parseInt(input, 0xa);
  var sum = 0x0;
  for (var i = 0x1; i <= N; i++) {
    for (var j = 0x1; j <= N; j++) {
      for (var k = 0x1; k <= N; k++) {
        sum += gcd(i, j, k);
      }
    }
  }
  console[__DECODE_0__(0xd4)](sum);
}
Main(require('fs')[__DECODE_0__(0xcc)](__DECODE_0__(0xce), __DECODE_0__(0xd8)));
