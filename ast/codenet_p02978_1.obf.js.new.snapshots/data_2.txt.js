function __DECODE_0__(aRylai, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x77;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(aRylai, key);
}
function __STRING_ARRAY__() {
  var _0x249d15 = ['length', 'utf8', '8000368VWdaqR', 'split', 'log', '/dev/stdin', '1511290xTlWbR', '4293RKlvpC', 'push', '58yhUkns', '8068IWKnaU', '4tZNkuz', '3881568jSqYhk', '121nuySzx', '594595yHOjyE', '2663457IiHABB', '7rKIyZn'];
  __STRING_ARRAY__ = function () {
    return _0x249d15;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x7e)) / 0x1 * (-parseInt(__DECODE_0__(0x7f)) / 0x2) + parseInt(__DECODE_0__(0x84)) / 0x3 * (-parseInt(__DECODE_0__(0x80)) / 0x4) + -parseInt(__DECODE_0__(0x83)) / 0x5 + -parseInt(__DECODE_0__(0x81)) / 0x6 * (-parseInt(__DECODE_0__(0x85)) / 0x7) + -parseInt(__DECODE_0__(0x77)) / 0x8 + parseInt(__DECODE_0__(0x7c)) / 0x9 + parseInt(__DECODE_0__(0x7b)) / 0xa * (parseInt(__DECODE_0__(0x82)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x831b4);
function Main(input) {
  input = input['split']('\x0a');
  const N = parseInt(input[0x0]);
  const As = input[0x1][__DECODE_0__(0x78)]('\x20')['map'](x => parseInt(x));
  var now = As;
  while (!![]) {
    var min = -0x1;
    var next = [];
    for (i = 0x1; i < now['length'] - 0x1; i++) {
      if (min == -0x1 || now[min] > now[i]) {
        min = i;
      }
      if (min == now[i] && now[i - 0x1] + now[i + 0x1] < now[min - 0x1] + now[min + 0x1]) {
        min = i;
      }
    }
    if (now[min] * 0x2 > now[now[__DECODE_0__(0x86)] - 0x2]) {
      min = now[__DECODE_0__(0x86)] - 0x2;
    }
    for (i = 0x0; i < now[__DECODE_0__(0x86)]; i++) {
      if (i == min - 0x1) {
        next[__DECODE_0__(0x7d)](now[min - 0x1] + now[min]);
      } else {
        if (i == min) {} else {
          if (i == min + 0x1) {
            next['push'](now[min + 0x1] + now[min]);
          } else {
            next[__DECODE_0__(0x7d)](now[i]);
          }
        }
      }
    }
    now = next;
    if (now[__DECODE_0__(0x86)] == 0x2) {
      break;
    }
  }
  console[__DECODE_0__(0x79)](now[0x0] + now[0x1]);
}
Main(require('fs')['readFileSync'](__DECODE_0__(0x7a), __DECODE_0__(0x87)));
