function __DECODE_0__(lOcGGb, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x133;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(lOcGGb, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x13e)) / 0x1 + -parseInt(__DECODE_0__(0x147)) / 0x2 * (-parseInt(__DECODE_0__(0x133)) / 0x3) + parseInt(__DECODE_0__(0x144)) / 0x4 + parseInt(__DECODE_0__(0x140)) / 0x5 * (parseInt(__DECODE_0__(0x139)) / 0x6) + parseInt(__DECODE_0__(0x136)) / 0x7 * (parseInt(__DECODE_0__(0x13a)) / 0x8) + parseInt(__DECODE_0__(0x146)) / 0x9 * (parseInt(__DECODE_0__(0x138)) / 0xa) + -parseInt(__DECODE_0__(0x13c)) / 0xb * (parseInt(__DECODE_0__(0x142)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x7e269);
process[__DECODE_0__(0x13b)]['resume']();
function __STRING_ARRAY__() {
  var _0x3c359b = ['379544Mvayps', 'log', '78297lFcszk', 'map', '74640zTmbth', 'data', '372SJQzzr', 'setEncoding', '165164vxmUXg', 'min', '1466622UVBKCN', '2cWijzI', '377127xtYaon', 'fill', 'end', '1638YxSlOQ', 'split', '10hrZJic', '72wpouFg', '34152ZrpLuf', 'stdin'];
  __STRING_ARRAY__ = function () {
    return _0x3c359b;
  };
  return __STRING_ARRAY__();
}
process['stdin'][__DECODE_0__(0x143)]('utf8');
var g_input = '';
process[__DECODE_0__(0x13b)]['on'](__DECODE_0__(0x141), function (chunk) {
  g_input += chunk;
});
process[__DECODE_0__(0x13b)]['on'](__DECODE_0__(0x135), function () {
  main(g_input[__DECODE_0__(0x137)](/\r?\n/));
});
function main(inputs) {
  var N = parseInt(inputs[0x0]);
  var rs = inputs[0x1]['split']('\x20')[__DECODE_0__(0x13f)](function (a) {
    return parseInt(a);
  });
  var a = new Array(0x7)[__DECODE_0__(0x134)](![]);
  var a8 = 0x0;
  var count = 0x0;
  for (var i = 0x0; i < N; i++) {
    for (var j = 0x0; j < 0x9; j++) {
      if (j != 0x8) {
        if (rs[i] < (j + 0x1) * 0x190) {
          if (!a[j]) {
            a[j] = !![];
            count += 0x1;
          }
          break;
        }
      } else {
        a8 += 0x1;
      }
    }
  }
  var min = count;
  if (min == 0x0 && N > 0x0) {
    min = 0x1;
    if (a8 > 0x0) {
      a8 -= 0x1;
    }
  }
  var max = Math[__DECODE_0__(0x145)](0x8, min + a8);
  console[__DECODE_0__(0x13d)]('' + min + '\x20' + max);
}
