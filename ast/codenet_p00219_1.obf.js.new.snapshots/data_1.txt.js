var a0_0x8014b1 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x27cd4e = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x27cd4e(0x1b5)) / 0x1 + parseInt(_0x27cd4e(0x1bd)) / 0x2 * (-parseInt(_0x27cd4e(0x1b8)) / 0x3) + -parseInt(_0x27cd4e(0x1b4)) / 0x4 + -parseInt(_0x27cd4e(0x1c2)) / 0x5 + parseInt(_0x27cd4e(0x1bf)) / 0x6 * (parseInt(_0x27cd4e(0x1c3)) / 0x7) + parseInt(_0x27cd4e(0x1ba)) / 0x8 + parseInt(_0x27cd4e(0x1bc)) / 0x9 * (parseInt(_0x27cd4e(0x1b9)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xb3fb8);
function __DECODE_0__(nzGSlc, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1b4;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(nzGSlc, key);
}
process[a0_0x8014b1(0x1c1)][a0_0x8014b1(0x1b7)]();
process[a0_0x8014b1(0x1c1)][a0_0x8014b1(0x1be)](a0_0x8014b1(0x1bb));
var input = '';
process[a0_0x8014b1(0x1c1)]['on'](a0_0x8014b1(0x1b6), function (chunk) {
  input += chunk;
});
function __STRING_ARRAY__() {
  var _0x1c0579 = ['length', 'stdin', '831545jibZOP', '9272823WZRNlA', 'log', '2708052khyNmh', '130676BxpUpY', 'data', 'resume', '4385007IiDylW', '5688610PmIMtJ', '10234600cUmiPu', 'utf8', '9pxhLhe', '2EpXfyD', 'setEncoding', '6kReEil'];
  __STRING_ARRAY__ = function () {
    return _0x1c0579;
  };
  return __STRING_ARRAY__();
}
process[a0_0x8014b1(0x1c1)]['on']('end', function () {
  var _0x4dcf8b = a0_0x8014b1;
  var lines = input['split']('\x0a');
  var l = 0x0;
  while (!![]) {
    var n = Number(lines[l++]);
    if (n === 0x0) {
      break;
    }
    var sales = [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0];
    for (var i = 0x0; i < n; i++) {
      sales[Number(lines[l++])]++;
    }
    for (var i = 0x0; i < sales[_0x4dcf8b(0x1c0)]; i++) {
      var bar = sales[i] === 0x0 ? '-' : '';
      for (var j = 0x0; j < sales[i]; j++) {
        bar += '*';
      }
      console[_0x4dcf8b(0x1c4)](bar);
    }
  }
});
