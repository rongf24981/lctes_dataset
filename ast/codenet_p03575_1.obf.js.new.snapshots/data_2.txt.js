function __DECODE_0__(UdxMYg, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1ef;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(UdxMYg, key);
}
function __STRING_ARRAY__() {
  var _0x421b38 = ['3973392hSodNv', '10131iripWh', '590fKcCCN', 'forEach', 'log', '872538azeyzH', '8neTtnl', '65RJLHnY', '574074DQDXfo', 'split', 'length', '2892652fDkQrL', 'splice', '/dev/stdin', 'readFileSync', 'keys', '648637QBoAzc', '1746451QVhdGP', '1056RhcfTK'];
  __STRING_ARRAY__ = function () {
    return _0x421b38;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1fe)) / 0x1 + parseInt(__DECODE_0__(0x1f1)) / 0x2 + parseInt(__DECODE_0__(0x1fa)) / 0x3 * (parseInt(__DECODE_0__(0x1f8)) / 0x4) + parseInt(__DECODE_0__(0x200)) / 0x5 * (parseInt(__DECODE_0__(0x201)) / 0x6) + -parseInt(__DECODE_0__(0x1f7)) / 0x7 * (-parseInt(__DECODE_0__(0x1ff)) / 0x8) + -parseInt(__DECODE_0__(0x1f9)) / 0x9 + -parseInt(__DECODE_0__(0x1fb)) / 0xa * (parseInt(__DECODE_0__(0x1f6)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xbf343);
function Main(input) {
  var N = input[0x0]['split']('\x20')[0x0] - 0x0;
  var M = input[0x0][__DECODE_0__(0x1ef)]('\x20')[0x1] - 0x0;
  var list = {};
  for (var i = 0x1; i <= M; i++) {
    var a = input[i][__DECODE_0__(0x1ef)]('\x20')[0x0] - 0x0;
    var b = input[i][__DECODE_0__(0x1ef)]('\x20')[0x1] - 0x0;
    list[a] = list[a] || {};
    list[b] = list[b] || {};
    list[a][b] = i;
    list[b][a] = i;
  }
  var ans = 0x0;
  for (var i = 0x1; i <= M; i++) {
    if (check(list, i) != N) {
      ans++;
    }
  }
  console[__DECODE_0__(0x1fd)](ans);
}
function check(list, i) {
  var stack = [0x1];
  var checked = {};
  while (stack[__DECODE_0__(0x1f0)] > 0x0) {
    var now = stack[__DECODE_0__(0x1f2)](0x0, 0x1)[0x0];
    if (checked[now]) {
      continue;
    }
    checked[now] = !![];
    var next = Object['keys'](list[now]);
    next[__DECODE_0__(0x1fc)](nxt => {
      if (list[now][nxt] != i) {
        stack['push'](nxt);
      }
    });
  }
  return Object[__DECODE_0__(0x1f5)](checked)[__DECODE_0__(0x1f0)];
}
Main(require('fs')[__DECODE_0__(0x1f4)](__DECODE_0__(0x1f3), 'utf8')['trim']()[__DECODE_0__(0x1ef)]('\x0a'));
