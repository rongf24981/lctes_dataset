function __DECODE_0__(xGgshj, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x66;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(xGgshj, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x71)) / 0x1 * (parseInt(__DECODE_0__(0x68)) / 0x2) + -parseInt(__DECODE_0__(0x6d)) / 0x3 * (-parseInt(__DECODE_0__(0x6c)) / 0x4) + parseInt(__DECODE_0__(0x77)) / 0x5 * (parseInt(__DECODE_0__(0x67)) / 0x6) + -parseInt(__DECODE_0__(0x79)) / 0x7 * (-parseInt(__DECODE_0__(0x7a)) / 0x8) + -parseInt(__DECODE_0__(0x69)) / 0x9 * (parseInt(__DECODE_0__(0x6a)) / 0xa) + -parseInt(__DECODE_0__(0x70)) / 0xb * (parseInt(__DECODE_0__(0x66)) / 0xc) + parseInt(__DECODE_0__(0x75)) / 0xd * (parseInt(__DECODE_0__(0x78)) / 0xe);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x70386);
function __STRING_ARRAY__() {
  var _0x20e664 = ['4341440BcRweQ', '276fxflNT', '150dudhsB', '250EFUQKg', '726858aCaMTe', '90BdycGX', 'length', '60920YHkctJ', '45soVvlE', 'map', 'from', '134299QeHIwQ', '5282TJcrxA', 'join', 'utf8', 'log', '24973UYHfMU', 'readFileSync', '18100LtcWhn', '9226cqnRbP', '7WGxBin'];
  __STRING_ARRAY__ = function () {
    return _0x20e664;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  var s;
  var K;
  var ref;
  ref = input['split']('\x0a');
  s = ref[0x0];
  K = parseInt(ref[0x1]);
  console[__DECODE_0__(0x74)](Array[__DECODE_0__(0x6f)](s)[__DECODE_0__(0x6e)]((v, i, arr) => {
    var code = v['charCodeAt']();
    if (i === arr[__DECODE_0__(0x6b)] - 0x1) {
      code += K % 0x1a;
      code -= code > 0x7a ? 0x1a : 0x0;
      return String['fromCharCode'](code);
    } else {
      if (v === 'a') {
        return v;
      }
      return 0x7b - code <= K ? (K -= 0x7b - code, 'a') : v;
    }
  })[__DECODE_0__(0x72)](''));
}
Main(require('fs')[__DECODE_0__(0x76)]('/dev/stdin', __DECODE_0__(0x73)));
