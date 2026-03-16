function __STRING_ARRAY__() {
  var _0x3bbc65 = ['415212leXbZR', '12812TrvwQN', '1048607jYXOXN', '/dev/stdin', 'slice', '276lMrkyE', '1213003QFMBsa', 'length', '4JsyIZX', '635nCUErY', 'push', 'Yes', '9ACTvdO', '2909334UUSJlh', '2515146cEdcSZ', 'log', 'utf8', '16RNoEia', '8296930vqIyye'];
  __STRING_ARRAY__ = function () {
    return _0x3bbc65;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(UulWeI, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1b7;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(UulWeI, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1c1)) / 0x1 * (parseInt(__DECODE_0__(0x1c9)) / 0x2) + -parseInt(__DECODE_0__(0x1bc)) / 0x3 + -parseInt(__DECODE_0__(0x1c2)) / 0x4 * (parseInt(__DECODE_0__(0x1b7)) / 0x5) + -parseInt(__DECODE_0__(0x1bb)) / 0x6 + -parseInt(__DECODE_0__(0x1c3)) / 0x7 * (parseInt(__DECODE_0__(0x1bf)) / 0x8) + parseInt(__DECODE_0__(0x1ba)) / 0x9 * (parseInt(__DECODE_0__(0x1c0)) / 0xa) + -parseInt(__DECODE_0__(0x1c7)) / 0xb * (-parseInt(__DECODE_0__(0x1c6)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x7b826);
function Main(input) {
  var data = input['split']('\x0a');
  var split = parseInt(data[0x0]) / 0x2;
  var cdn = [];
  for (let i = 0x0; i < data[0x1][__DECODE_0__(0x1c8)]; i += split) {
    cdn[__DECODE_0__(0x1b8)](data[0x1][__DECODE_0__(0x1c5)](i, i + split));
  }
  if (cdn[0x0] == cdn[0x1]) {
    console[__DECODE_0__(0x1bd)](__DECODE_0__(0x1b9));
  } else {
    console[__DECODE_0__(0x1bd)]('No');
  }
}
Main(require('fs')['readFileSync'](__DECODE_0__(0x1c4), __DECODE_0__(0x1be)));
