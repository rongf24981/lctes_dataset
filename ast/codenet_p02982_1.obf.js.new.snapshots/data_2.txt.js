(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x9b)) / 0x1 + parseInt(__DECODE_0__(0x93)) / 0x2 + -parseInt(__DECODE_0__(0x90)) / 0x3 + -parseInt(__DECODE_0__(0x94)) / 0x4 + parseInt(__DECODE_0__(0x8e)) / 0x5 + -parseInt(__DECODE_0__(0x91)) / 0x6 + -parseInt(__DECODE_0__(0x8f)) / 0x7 * (-parseInt(__DECODE_0__(0x97)) / 0x8);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x6f742);
function __STRING_ARRAY__() {
  var _0x2c23e6 = ['2002968wPbMXW', '3245568tIkIwt', 'pow', '502964PGkDKs', '3096900YBYnjf', 'log', 'sqrt', '6568bNqxdC', 'split', 'isInteger', '/dev/stdin', '571733IjJqwS', '280105Mcytjo', '23051aDMLDg'];
  __STRING_ARRAY__ = function () {
    return _0x2c23e6;
  };
  return __STRING_ARRAY__();
}
function main(input) {
  const args = input[__DECODE_0__(0x98)]('\x0a');
  const aiueo = args[0x0][__DECODE_0__(0x98)]('\x20');
  const N = parseInt(aiueo[0x0], 0xa);
  const D = parseInt(aiueo[0x1], 0xa);
  var arr = [];
  for (var i = 0x0; i < N; i++) {
    arr[i] = [];
    var subArgs = args[i + 0x1][__DECODE_0__(0x98)]('\x20');
    for (var j = 0x0; j < D + 0x1; j++) {
      arr[i]['push'](parseInt(subArgs[j], 0xa));
    }
  }
  var kakunin = 0x0;
  function kyori(arr1, arr2) {
    var sum = 0x0;
    for (var i = 0x0; i < D; i++) {
      sum = sum + Math[__DECODE_0__(0x92)](arr1[i] - arr2[i], 0x2);
    }
    if (Number[__DECODE_0__(0x99)](Math[__DECODE_0__(0x96)](sum)) == !![]) {
      return !![];
    } else {
      return ![];
    }
  }
  for (var i = 0x0; i < N; i++) {
    for (var j = i + 0x1; j < N; j++) {
      if (kyori(arr[i], arr[j]) == !![]) {
        kakunin++;
      }
    }
  }
  console[__DECODE_0__(0x95)](kakunin);
}
function __DECODE_0__(VGyeJP, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x8e;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(VGyeJP, key);
}
main(require('fs')['readFileSync'](__DECODE_0__(0x9a), 'utf8'));
