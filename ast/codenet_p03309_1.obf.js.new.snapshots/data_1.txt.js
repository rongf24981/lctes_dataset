(function (stringArrayFunction, comparisonValue) {
  var _0x3c5a81 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0x3c5a81(0x95)) / 0x1 + -parseInt(_0x3c5a81(0x94)) / 0x2 + -parseInt(_0x3c5a81(0x90)) / 0x3 * (-parseInt(_0x3c5a81(0x93)) / 0x4) + parseInt(_0x3c5a81(0x98)) / 0x5 * (-parseInt(_0x3c5a81(0x8a)) / 0x6) + -parseInt(_0x3c5a81(0x8b)) / 0x7 * (-parseInt(_0x3c5a81(0x92)) / 0x8) + -parseInt(_0x3c5a81(0x96)) / 0x9 + -parseInt(_0x3c5a81(0x91)) / 0xa * (-parseInt(_0x3c5a81(0x99)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x23aa9);
function myin() {
  var _0xc6ad38 = __DECODE_0__;
  return require('fs')[_0xc6ad38(0x8d)](_0xc6ad38(0x89), 'utf8')['trim']();
}
function __DECODE_0__(ZTPKLl, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x89;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ZTPKLl, key);
}
function myout(t) {
  console['log'](t);
}
function myconv(i, no) {
  var _0xe7d28b = __DECODE_0__;
  switch (no) {
    case 0x0:
      return i;
    case 0x1:
      return parseInt(i);
    case 0x2:
      return i[_0xe7d28b(0x9a)]('\x20');
    case 0x3:
      return i[_0xe7d28b(0x9a)]('\x0a');
    case 0x4:
      return i[_0xe7d28b(0x9a)]('\x20')[_0xe7d28b(0x97)](a => Number(a));
    case 0x5:
      return i[_0xe7d28b(0x9a)]('\x0a')[_0xe7d28b(0x97)](a => Number(a));
    case 0x6:
      return i[_0xe7d28b(0x9a)]('');
    case 0x7:
      return i['split']('')['map'](a => Number(a));
  }
}
function Main(input) {
  var _0x30490d = __DECODE_0__;
  input = myconv(input, 0x3);
  var N = myconv(input[0x0], 0x1);
  var list = myconv(input[0x1], 0x4);
  var tmpList = [];
  for (var i = 0x0; i < N; i++) {
    tmpList[_0x30490d(0x8e)](list[i] - (i + 0x1));
  }
  tmpList['sort'](function (a, b) {
    return a - b;
  });
  var b = tmpList[myconv(tmpList[_0x30490d(0x8f)] / 0x2, 0x1)];
  var output = 0x0;
  for (var i = 0x0; i < N; i++) {
    output += Math[_0x30490d(0x8c)](list[i] - (b + (i + 0x1)));
  }
  myout(output);
}
function __STRING_ARRAY__() {
  var _0x1c60fe = ['138500YIfWPJ', '136568SgvJzJ', '96HKPVgy', '578626GVNBMw', '2123qBhYBW', '10026MGeTvc', 'map', '86585ULHXut', '275MZtXOs', 'split', '/dev/stdin', '60AtPFdn', '49AdFgsT', 'abs', 'readFileSync', 'push', 'length', '17727fpAcbv'];
  __STRING_ARRAY__ = function () {
    return _0x1c60fe;
  };
  return __STRING_ARRAY__();
}
Main(myin());
