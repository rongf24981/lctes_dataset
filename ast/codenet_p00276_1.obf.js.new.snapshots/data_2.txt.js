function __DECODE_0__(YZOsoD, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x177;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YZOsoD, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x187)) / 0x1 + -parseInt(__DECODE_0__(0x17e)) / 0x2 + parseInt(__DECODE_0__(0x17d)) / 0x3 * (parseInt(__DECODE_0__(0x17c)) / 0x4) + -parseInt(__DECODE_0__(0x18a)) / 0x5 + parseInt(__DECODE_0__(0x17a)) / 0x6 + parseInt(__DECODE_0__(0x17b)) / 0x7 * (-parseInt(__DECODE_0__(0x179)) / 0x8) + parseInt(__DECODE_0__(0x178)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x35d3e);
Main(function (input) {
  input = input['trim']()['split']('\x0a');
  input[__DECODE_0__(0x17f)]();
  input[__DECODE_0__(0x186)](function (line) {
    var tmp = line[__DECODE_0__(0x188)]('\x20');
    var c = +tmp[0x0];
    var a = +tmp[0x1];
    var n = +tmp[0x2];
    var ans = 0x0;
    var min;
    min = Math[__DECODE_0__(0x181)](c, a, n);
    c -= min;
    a -= min;
    n -= min;
    ans += min;
    min = Math[__DECODE_0__(0x181)](Math[__DECODE_0__(0x182)](c / 0x2), a);
    c -= min * 0x2;
    a -= min;
    ans += min;
    ans += Math[__DECODE_0__(0x182)](c / 0x3);
    console[__DECODE_0__(0x177)](ans);
  });
});
function __STRING_ARRAY__() {
  var _0x175e26 = ['forEach', '429455BDpoJx', 'split', 'utf8', '688510QkcmNR', 'log', '2554632hoWrKn', '2559992Qfaowy', '1274070JHItmq', '7RmaYBO', '12QkqIjG', '65955zFnUjm', '626848ZmKswf', 'shift', 'setEncoding', 'min', 'floor', 'stdin', 'end', 'resume'];
  __STRING_ARRAY__ = function () {
    return _0x175e26;
  };
  return __STRING_ARRAY__();
}
function Main(main) {
  var input = '';
  process[__DECODE_0__(0x183)][__DECODE_0__(0x185)]();
  process[__DECODE_0__(0x183)][__DECODE_0__(0x180)](__DECODE_0__(0x189));
  process[__DECODE_0__(0x183)]['on']('data', function (chunk) {
    input += chunk;
  });
  process[__DECODE_0__(0x183)]['on'](__DECODE_0__(0x184), function () {
    main(input);
  });
}
;
