function __DECODE_0__(rUkREt, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x154;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(rUkREt, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x163)) / 0x1 * (-parseInt(__DECODE_0__(0x155)) / 0x2) + -parseInt(__DECODE_0__(0x165)) / 0x3 * (-parseInt(__DECODE_0__(0x15e)) / 0x4) + parseInt(__DECODE_0__(0x15f)) / 0x5 + parseInt(__DECODE_0__(0x161)) / 0x6 * (parseInt(__DECODE_0__(0x159)) / 0x7) + parseInt(__DECODE_0__(0x15b)) / 0x8 + parseInt(__DECODE_0__(0x162)) / 0x9 * (-parseInt(__DECODE_0__(0x15a)) / 0xa) + -parseInt(__DECODE_0__(0x160)) / 0xb * (-parseInt(__DECODE_0__(0x157)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x54b34);
function search(h) {
  var is_start = ![];
  for (var i = 0x0; i < h[__DECODE_0__(0x15d)]; i++) {
    if (is_start) {
      if (h[i] == 0x0) {
        break;
      }
      h[i] -= 0x1;
    } else {
      if (h[i] == 0x0) {
        continue;
      }
      is_start = !![];
      h[i] -= 0x1;
    }
  }
  return h;
}
function main(arg) {
  var h = arg[__DECODE_0__(0x154)]('\x0a')[0x1][__DECODE_0__(0x154)]('\x20')['map'](e => Number(e));
  var arr = [];
  var i = 0x0;
  for (i = 0x1;; i++) {
    h = search(h);
    if (h[0x0] == 0x0) {
      var b = h[__DECODE_0__(0x164)]((x, i, self) => self['indexOf'](x) === i);
      if (b[__DECODE_0__(0x15d)] == 0x1) {
        break;
      }
    }
  }
  console[__DECODE_0__(0x156)](i);
}
function __STRING_ARRAY__() {
  var _0x45e31b = ['62NXBNkJ', 'log', '517596Ghwuma', '/dev/stdin', '7KbbTof', '34410esezMY', '2074440MaUxQy', 'utf8', 'length', '515196nZYRsa', '194400fggwSk', '99vmySeH', '112752afhYbe', '252TSwskA', '12603lQiERA', 'filter', '3YNPRjV', 'split'];
  __STRING_ARRAY__ = function () {
    return _0x45e31b;
  };
  return __STRING_ARRAY__();
}
main(require('fs')['readFileSync'](__DECODE_0__(0x158), __DECODE_0__(0x15c)));
