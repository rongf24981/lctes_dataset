(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1b9)) / 0x1 + parseInt(__DECODE_0__(0x1b4)) / 0x2 * (parseInt(__DECODE_0__(0x1bc)) / 0x3) + -parseInt(__DECODE_0__(0x1b5)) / 0x4 + -parseInt(__DECODE_0__(0x1b0)) / 0x5 + parseInt(__DECODE_0__(0x1be)) / 0x6 + -parseInt(__DECODE_0__(0x1b2)) / 0x7 * (parseInt(__DECODE_0__(0x1bb)) / 0x8) + -parseInt(__DECODE_0__(0x1b1)) / 0x9 * (-parseInt(__DECODE_0__(0x1b6)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe3fd3);
function __DECODE_0__(FtyJGC, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1ad;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(FtyJGC, key);
}
(function (input) {
  var inputs = input[__DECODE_0__(0x1b7)](/\r/g, '')[__DECODE_0__(0x1ad)]('\x0a');
  while (!![]) {
    var cards = [];
    var line = inputs['shift']()[__DECODE_0__(0x1ad)]('\x20');
    var n = parseInt(line[0x0]);
    var r = parseInt(line[0x1]);
    if (n === 0x0 && r === 0x0) {
      break;
    }
    for (var i = n; i > 0x0; i--) {
      cards[__DECODE_0__(0x1b8)](i);
    }
    while (r--) {
      var line = inputs[__DECODE_0__(0x1bd)]()['split']('\x20');
      var p = parseInt(line[0x0]) - 0x1;
      var c = parseInt(line[0x1]);
      var tmp;
      tmp = cards['splice'](p, c);
      cards = tmp[__DECODE_0__(0x1b3)](cards);
    }
    console[__DECODE_0__(0x1bf)](cards[__DECODE_0__(0x1bd)]());
  }
})(require('fs')[__DECODE_0__(0x1ae)](__DECODE_0__(0x1ba), __DECODE_0__(0x1af)));
function __STRING_ARRAY__() {
  var _0x4c8553 = ['replace', 'push', '405773UmVdhu', '/dev/stdin', '17144gcQXRa', '24JjCueY', 'shift', '5630874RiMzxc', 'log', 'split', 'readFileSync', 'utf8', '6174440wKqjCc', '26161983gHrJwb', '1253JlNrqr', 'concat', '161998HxibEx', '6141028EloaAv', '10nBOjaO'];
  __STRING_ARRAY__ = function () {
    return _0x4c8553;
  };
  return __STRING_ARRAY__();
}
