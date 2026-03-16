'use strict';

var a0_0x2a76f7 = __DECODE_0__;
function __STRING_ARRAY__() {
  var _0x5a462e = ['weight', 'prototype', 'top', '8268858uNPceL', '1572876oxkHfv', '21122864PurFfc', 'shift', 'parent', '9618336ItJgWd', '291678ZvmjAH', 'trim', '/dev/stdin', 'value', 'map', 'split', '92403nKuSqe', '144616nYOHGu', 'merge', 'adopt', '30GtjgoL'];
  __STRING_ARRAY__ = function () {
    return _0x5a462e;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var _0x2c0e7c = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0x2c0e7c(0x1f1)) / 0x1 + parseInt(_0x2c0e7c(0x200)) / 0x2 + -parseInt(_0x2c0e7c(0x1f7)) / 0x3 + parseInt(_0x2c0e7c(0x1f8)) / 0x4 * (-parseInt(_0x2c0e7c(0x1fb)) / 0x5) + -parseInt(_0x2c0e7c(0x1ff)) / 0x6 + -parseInt(_0x2c0e7c(0x204)) / 0x7 + parseInt(_0x2c0e7c(0x201)) / 0x8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xaf6de);
function Main(input) {
  var _0x2994f8 = __DECODE_0__;
  input = input[_0x2994f8(0x1f2)]()[_0x2994f8(0x1f6)](/\s+/)[_0x2994f8(0x1f5)](x => x - 0x0);
  var N = input[_0x2994f8(0x202)]();
  var M = input[_0x2994f8(0x202)]();
  var p = input['splice'](0x0, N);
  var nodes = [];
  for (let k = 0x0; k < N; k++) {
    nodes[k] = new Node(k);
  }
  for (let k = 0x0; k < M; k++) {
    nodes[input[0x2 * k] - 0x1][_0x2994f8(0x1f9)](nodes[input[0x2 * k + 0x1] - 0x1]);
  }
  var counter = 0x0;
  for (let k = 0x0; k < N; k++) {
    if (nodes[k][_0x2994f8(0x1fe)]() === nodes[p[k] - 0x1]['top']()) {
      counter++;
    }
  }
  console['log'](counter);
}
function Node(v) {
  var _0x3c7936 = __DECODE_0__;
  var t = this;
  t[_0x3c7936(0x1f4)] = v;
  t[_0x3c7936(0x203)] = null;
  t['weight'] = 0x1;
}
Node[a0_0x2a76f7(0x1fd)][a0_0x2a76f7(0x1fe)] = function () {
  var t = this;
  var p = t['parent'];
  if (!p) {
    return t;
  } else {
    return p['top']();
  }
};
Node[a0_0x2a76f7(0x1fd)][a0_0x2a76f7(0x1fa)] = function (progeny) {
  var _0x1baceb = a0_0x2a76f7;
  var t = this[_0x1baceb(0x1fe)]();
  var c = progeny[_0x1baceb(0x1fe)]();
  c[_0x1baceb(0x203)] = t;
  t[_0x1baceb(0x1fc)] += c[_0x1baceb(0x1fc)];
};
Node[a0_0x2a76f7(0x1fd)]['merge'] = function (b) {
  var _0x589ab2 = a0_0x2a76f7;
  var a = this[_0x589ab2(0x1fe)]();
  b = b[_0x589ab2(0x1fe)]();
  if (a === b) {
    return;
  }
  if (a[_0x589ab2(0x1fc)] < b['weight']) {
    b[_0x589ab2(0x1fa)](a);
  } else {
    a['adopt'](b);
  }
};
function __DECODE_0__(sMKtTs, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1f1;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(sMKtTs, key);
}
Main(require('fs')['readFileSync'](a0_0x2a76f7(0x1f3), 'utf8'));
