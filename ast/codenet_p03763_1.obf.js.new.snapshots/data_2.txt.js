function __DECODE_0__(lzUPfu, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x66;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(lzUPfu, key);
}
function __STRING_ARRAY__() {
  var _0x5e06b7 = ['281202xXajKp', 'utf8', 'readFileSync', '1977004MrDVBv', '403767oNUbqK', '1155500HLOOoj', '861573XjeKpx', 'repeat', 'abcdefghijklmnopqrstuvwxyz', '396eEJgfq', '/dev/stdin', '7TkqbmP', '11177950fkgSOX', 'findIndex', '104KcRcRe', '397XAkkhn', 'forEach', 'split', 'fill'];
  __STRING_ARRAY__ = function () {
    return _0x5e06b7;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x6e)) / 0x1 * (-parseInt(__DECODE_0__(0x68)) / 0x2) + -parseInt(__DECODE_0__(0x78)) / 0x3 + -parseInt(__DECODE_0__(0x75)) / 0x4 + -parseInt(__DECODE_0__(0x77)) / 0x5 + -parseInt(__DECODE_0__(0x72)) / 0x6 * (parseInt(__DECODE_0__(0x6a)) / 0x7) + -parseInt(__DECODE_0__(0x6d)) / 0x8 * (-parseInt(__DECODE_0__(0x76)) / 0x9) + parseInt(__DECODE_0__(0x6b)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x89737);
function Main(input) {
  input = input[__DECODE_0__(0x70)]('\x0a');
  var S = __DECODE_0__(0x67)[__DECODE_0__(0x70)]('');
  var array = new Array(0x1a);
  array[__DECODE_0__(0x71)](0x0);
  var temp;
  for (var i = 0x1; i < input['length']; i++) {
    temp = new Array(0x1a);
    temp[__DECODE_0__(0x71)](0x0);
    for (var j = 0x0; j < input[i]['length']; j++) {
      temp[S[__DECODE_0__(0x6c)](e => {
        return e === input[i][j];
      })]++;
    }
    for (var j = 0x0; j < 0x1a; j++) {
      if (array[j] > temp[j] || i === 0x1) {
        array[j] = temp[j];
      }
    }
  }
  var ret = '';
  array[__DECODE_0__(0x6f)]((e, i) => {
    ret += S[i][__DECODE_0__(0x66)](e);
  });
  console['log'](ret);
}
Main(require('fs')[__DECODE_0__(0x74)](__DECODE_0__(0x69), __DECODE_0__(0x73)));
