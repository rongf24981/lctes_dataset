var a0_0x36399e = __DECODE_0__;
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
  var _0x334b48 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0x334b48(0x163)) / 0x1 * (-parseInt(_0x334b48(0x155)) / 0x2) + -parseInt(_0x334b48(0x165)) / 0x3 * (-parseInt(_0x334b48(0x15e)) / 0x4) + parseInt(_0x334b48(0x15f)) / 0x5 + parseInt(_0x334b48(0x161)) / 0x6 * (parseInt(_0x334b48(0x159)) / 0x7) + parseInt(_0x334b48(0x15b)) / 0x8 + parseInt(_0x334b48(0x162)) / 0x9 * (-parseInt(_0x334b48(0x15a)) / 0xa) + -parseInt(_0x334b48(0x160)) / 0xb * (-parseInt(_0x334b48(0x157)) / 0xc);
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
  var _0x36baef = __DECODE_0__;
  var is_start = ![];
  for (var i = 0x0; i < h[_0x36baef(0x15d)]; i++) {
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
  var _0x56f5b3 = __DECODE_0__;
  var h = arg[_0x56f5b3(0x154)]('\x0a')[0x1][_0x56f5b3(0x154)]('\x20')['map'](e => Number(e));
  var arr = [];
  var i = 0x0;
  for (i = 0x1;; i++) {
    h = search(h);
    if (h[0x0] == 0x0) {
      var b = h[_0x56f5b3(0x164)]((x, i, self) => self['indexOf'](x) === i);
      if (b[_0x56f5b3(0x15d)] == 0x1) {
        break;
      }
    }
  }
  console[_0x56f5b3(0x156)](i);
}
function __STRING_ARRAY__() {
  var _0x45e31b = ['62NXBNkJ', 'log', '517596Ghwuma', '/dev/stdin', '7KbbTof', '34410esezMY', '2074440MaUxQy', 'utf8', 'length', '515196nZYRsa', '194400fggwSk', '99vmySeH', '112752afhYbe', '252TSwskA', '12603lQiERA', 'filter', '3YNPRjV', 'split'];
  __STRING_ARRAY__ = function () {
    return _0x45e31b;
  };
  return __STRING_ARRAY__();
}
main(require('fs')['readFileSync'](a0_0x36399e(0x158), a0_0x36399e(0x15c)));
