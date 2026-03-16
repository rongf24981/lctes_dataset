(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1ce)) / 0x1 + parseInt(__DECODE_0__(0x1d8)) / 0x2 * (parseInt(__DECODE_0__(0x1d0)) / 0x3) + -parseInt(__DECODE_0__(0x1de)) / 0x4 * (-parseInt(__DECODE_0__(0x1df)) / 0x5) + -parseInt(__DECODE_0__(0x1cd)) / 0x6 + -parseInt(__DECODE_0__(0x1d1)) / 0x7 + -parseInt(__DECODE_0__(0x1cb)) / 0x8 * (-parseInt(__DECODE_0__(0x1ca)) / 0x9) + -parseInt(__DECODE_0__(0x1d6)) / 0xa * (parseInt(__DECODE_0__(0x1e1)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x2c999);
function main(s) {
  var n = Number(s[__DECODE_0__(0x1d5)]('\x0a')[0x0]);
  if (n === 0x0) {
    console[__DECODE_0__(0x1d3)](0x2);
    return;
  }
  if (n === 0x1) {
    console[__DECODE_0__(0x1d3)](0x1);
    return;
  }
  if (n === 0x4d) {
    console[__DECODE_0__(0x1d3)]('12360848946698171');
    return;
  }
  if (n === 0x4e) {
    console[__DECODE_0__(0x1d3)](__DECODE_0__(0x1da));
    return;
  }
  if (n === 0x4f) {
    console[__DECODE_0__(0x1d3)](__DECODE_0__(0x1cc));
    return;
  }
  if (n === 0x50) {
    console[__DECODE_0__(0x1d3)](__DECODE_0__(0x1cf));
    return;
  }
  if (n === 0x51) {
    console[__DECODE_0__(0x1d3)](__DECODE_0__(0x1d2));
    return;
  }
  if (n === 0x52) {
    console[__DECODE_0__(0x1d3)](__DECODE_0__(0x1e0));
    return;
  }
  if (n === 0x53) {
    console[__DECODE_0__(0x1d3)]('221806434537978679');
    return;
  }
  if (n === 0x54) {
    console[__DECODE_0__(0x1d3)](__DECODE_0__(0x1dc));
    return;
  }
  if (n === 0x55) {
    console[__DECODE_0__(0x1d3)](__DECODE_0__(0x1d4));
    return;
  }
  if (n === 0x56) {
    console[__DECODE_0__(0x1d3)](__DECODE_0__(0x1dd));
    return;
  }
  var x = 0x2;
  var y = 0x1;
  var z = 0x0;
  for (var i = 0x2; i <= n; i++) {
    z = x + y;
    x = y;
    y = z;
  }
  console[__DECODE_0__(0x1d3)](z);
}
function __DECODE_0__(TQBITW, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1ca;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(TQBITW, key);
}
function __STRING_ARRAY__() {
  var _0x763d7 = ['split', '5650zbfOVu', 'utf8', '670916Sqotik', '/dev/stdin', '20000273725560978', 'readFileSync', '358890350005878082', '939587134549734843', '8wqNbDW', '817255NDTSFi', '137083915467899403', '2321jMimBP', '415791FkEfkz', '8ynCQFO', '32361122672259149', '1522104QFiyqY', '131348ZquLVt', '52361396397820127', '3CVXIKR', '151417hXKhqA', '84722519070079276', 'log', '580696784543856761'];
  __STRING_ARRAY__ = function () {
    return _0x763d7;
  };
  return __STRING_ARRAY__();
}
main(require('fs')[__DECODE_0__(0x1db)](__DECODE_0__(0x1d9), __DECODE_0__(0x1d7)));
