(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1bc)) / 0x1 + -parseInt(__DECODE_0__(0x1c7)) / 0x2 + -parseInt(__DECODE_0__(0x1ce)) / 0x3 + -parseInt(__DECODE_0__(0x1c1)) / 0x4 * (parseInt(__DECODE_0__(0x1cf)) / 0x5) + -parseInt(__DECODE_0__(0x1ca)) / 0x6 + -parseInt(__DECODE_0__(0x1c4)) / 0x7 * (-parseInt(__DECODE_0__(0x1c2)) / 0x8) + parseInt(__DECODE_0__(0x1c6)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x7ab54);
var lines = [];
function __DECODE_0__(aLNdgU, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1bc;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(aLNdgU, key);
}
var readline = require(__DECODE_0__(0x1c9));
var rl = readline[__DECODE_0__(0x1c5)]({
  'input': process[__DECODE_0__(0x1be)],
  'output': process[__DECODE_0__(0x1cd)]
});
rl['on'](__DECODE_0__(0x1c8), function (x) {
  lines[__DECODE_0__(0x1cb)](x);
});
function __STRING_ARRAY__() {
  var _0x57ad6f = ['indexOf', 'stdout', '1955313Ihasof', '5mmaNoq', '626049sJYQtl', 'close', 'stdin', 'map', 'shift', '3598968SYsejc', '1085912yRbyNH', 'filter', '7iQcXuv', 'createInterface', '16037199AIVxqT', '844330stwdeD', 'line', 'readline', '404454HdZhxh', 'push'];
  __STRING_ARRAY__ = function () {
    return _0x57ad6f;
  };
  return __STRING_ARRAY__();
}
rl['on'](__DECODE_0__(0x1bd), function () {
  var N = Number(lines[0x0]);
  lines[__DECODE_0__(0x1c0)]();
  var D = lines[__DECODE_0__(0x1bf)](i => Number(i));
  D = D[__DECODE_0__(0x1c3)]((value, index, array) => {
    return array[__DECODE_0__(0x1cc)](value) === index;
  });
  console['log'](D['length']);
});
