var a0_0x363c43 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x3b80b3 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x3b80b3(0x1c1)) / 0x1 + parseInt(_0x3b80b3(0x1bf)) / 0x2 + parseInt(_0x3b80b3(0x1b8)) / 0x3 + -parseInt(_0x3b80b3(0x1b3)) / 0x4 * (parseInt(_0x3b80b3(0x1b9)) / 0x5) + parseInt(_0x3b80b3(0x1ba)) / 0x6 + -parseInt(_0x3b80b3(0x1b7)) / 0x7 * (-parseInt(_0x3b80b3(0x1b5)) / 0x8) + -parseInt(_0x3b80b3(0x1b4)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x88524);
function __DECODE_0__(QjZpRV, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1b0;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(QjZpRV, key);
}
var input = require('fs')[a0_0x363c43(0x1c0)](a0_0x363c43(0x1b0), a0_0x363c43(0x1b2));
var arr = input['trim']()[a0_0x363c43(0x1b1)]('\x0a');
function __STRING_ARRAY__() {
  var _0x2c0bc3 = ['min', 'shift', 'map', '995732tbNZWr', 'readFileSync', '106547UpXhkZ', 'log', '/dev/stdin', 'split', 'utf8', '4amnsOW', '8554599wnGAIi', '7722064jntStH', 'floor', '7jkXRuU', '112881kmZqvx', '1477955eQwwXM', '2461620urVYJF', '0\x200\x200\x200\x200'];
  __STRING_ARRAY__ = function () {
    return _0x2c0bc3;
  };
  return __STRING_ARRAY__();
}
while (!![]) {
  var abc = arr['shift']();
  if (abc == a0_0x363c43(0x1bb)) {
    break;
  }
  var ary = (abc + '\x20' + arr[a0_0x363c43(0x1bd)]())[a0_0x363c43(0x1b1)]('\x20')[a0_0x363c43(0x1be)](Number);
  (function (a, b, c, d, e, na, nb, nc) {
    var _0x5cfaba = a0_0x363c43;
    var ans = Math[_0x5cfaba(0x1b6)](nc / d) * d * e;
    var nokori = nc % d;
    var A = function (ans) {
      ans += nokori * c;
      ans += na * a + nb * b;
      return ans;
    }(ans);
    var B = function (ans, na, nb) {
      if (ans == 0x0) {
        var yobun = nokori == 0x0 ? 0x0 : d - nokori;
        if (yobun > 0x0) {
          ans += e * d;
        }
        while (yobun--) {
          if (nb > 0x0) {
            nb--;
          } else {
            if (na > 0x0) {
              na--;
            }
          }
        }
        ans += na * a + nb * b;
        return ans;
      }
      if (ans != 0x0) {
        return na * a + nb * b + nc * e;
      }
    }(ans, na, nb);
    console[_0x5cfaba(0x1c2)](Math[_0x5cfaba(0x1bc)](A, B));
  })['apply'](null, ary);
}
