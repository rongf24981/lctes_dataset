function __DECODE_0__(RYMKkg, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1f4;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(RYMKkg, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x204)) / 0x1 + -parseInt(__DECODE_0__(0x1f5)) / 0x2 * (-parseInt(__DECODE_0__(0x1f4)) / 0x3) + parseInt(__DECODE_0__(0x1f9)) / 0x4 * (-parseInt(__DECODE_0__(0x202)) / 0x5) + -parseInt(__DECODE_0__(0x1f7)) / 0x6 * (parseInt(__DECODE_0__(0x1fa)) / 0x7) + -parseInt(__DECODE_0__(0x1ff)) / 0x8 + parseInt(__DECODE_0__(0x200)) / 0x9 + parseInt(__DECODE_0__(0x1fc)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xd7698);
function __STRING_ARRAY__() {
  var _0x54f242 = ['/dev/stdin', '39618640UYAuPz', 'log', 'YYMM', '14001224DHTquJ', '2622717pJYTAB', 'MMYY', '670NnhHUJ', 'utf8', '475881Fakvbf', '3jbpJWk', '1264024HuCZvc', 'readFileSync', '6LOpaIv', 'charAt', '7144LTZZva', '10763221gaQUfI'];
  __STRING_ARRAY__ = function () {
    return _0x54f242;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  var a = parseInt(input[__DECODE_0__(0x1f8)](0x0) + input[__DECODE_0__(0x1f8)](0x1));
  var b = parseInt(input[__DECODE_0__(0x1f8)](0x2) + input[__DECODE_0__(0x1f8)](0x3));
  var r = 0x0;
  if (a >= 0xd || a == 0x0) {
    r = 0x1;
  }
  if (b >= 0xd || b == 0x0) {
    r = 0x2;
  }
  if (a >= 0x1 && a <= 0xc && b >= 0x1 && b <= 0xc) {
    r = 0x3;
  }
  if (a >= 0xd && b >= 0xd || a >= 0xd && b == 0x0 || a == 0x0 && b >= 0xd || a == 0x0 && b == 0x0) {
    r = 0x4;
  }
  if (r == 0x1) {
    console['log'](__DECODE_0__(0x1fe));
  }
  if (r == 0x2) {
    console[__DECODE_0__(0x1fd)](__DECODE_0__(0x201));
  }
  if (r == 0x3) {
    console[__DECODE_0__(0x1fd)]('AMBIGUOUS');
  }
  if (r == 0x4) {
    console['log']('NA');
  }
}
Main(require('fs')[__DECODE_0__(0x1f6)](__DECODE_0__(0x1fb), __DECODE_0__(0x203)));
