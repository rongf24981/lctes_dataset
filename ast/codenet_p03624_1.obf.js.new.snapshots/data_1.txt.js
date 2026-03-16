var a0_0xb38e1b = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x316404 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x316404(0x170)) / 0x1 + parseInt(_0x316404(0x168)) / 0x2 * (parseInt(_0x316404(0x15f)) / 0x3) + -parseInt(_0x316404(0x16f)) / 0x4 + parseInt(_0x316404(0x163)) / 0x5 + -parseInt(_0x316404(0x167)) / 0x6 + parseInt(_0x316404(0x161)) / 0x7 * (-parseInt(_0x316404(0x160)) / 0x8) + parseInt(_0x316404(0x169)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x7dae4);
function __STRING_ARRAY__() {
  var _0x8fb2ee = ['/dev/stdin', '397026NsIyun', '15932JrWmUO', '23469939jxidCm', 'None', 'length', 'abcdefghijklmnopqrstuvwxyz', 'utf8', 'push', '3861252vQJbVG', '649803ZiOLTy', 'indexOf', '9shIdAq', '72bmwbXt', '387401SIwzPO', 'split', '312465tufcAz', 'filter', 'log'];
  __STRING_ARRAY__ = function () {
    return _0x8fb2ee;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(jRcakP, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x15e;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(jRcakP, key);
}
function main(input) {
  var _0x242f30 = __DECODE_0__;
  const S = input[_0x242f30(0x162)]('');
  alphabetList = _0x242f30(0x16c)[_0x242f30(0x162)]('');
  arr = S[_0x242f30(0x164)](function (x, i, self) {
    var _0x240c0a = _0x242f30;
    return self[_0x240c0a(0x15e)](x) === i;
  })['sort']();
  tmp = arrDiff(arr, alphabetList);
  function arrDiff(arr, alphabetList) {
    var _0x3974d6 = _0x242f30;
    var a = [];
    var diff = [];
    for (var i = 0x0; i < arr[_0x3974d6(0x16b)]; i++) {
      a[arr[i]] = !![];
    }
    for (var i = 0x0; i < alphabetList[_0x3974d6(0x16b)]; i++) {
      if (a[alphabetList[i]]) {
        delete a[alphabetList[i]];
      } else {
        a[alphabetList[i]] = !![];
      }
    }
    for (var k in a) {
      diff[_0x3974d6(0x16e)](k);
    }
    return diff;
  }
  if (tmp[_0x242f30(0x16b)] > 0x0) {
    ans = tmp[0x0];
  } else {
    ans = _0x242f30(0x16a);
  }
  console[_0x242f30(0x165)](ans);
}
main(require('fs')['readFileSync'](a0_0xb38e1b(0x166), a0_0xb38e1b(0x16d)));
