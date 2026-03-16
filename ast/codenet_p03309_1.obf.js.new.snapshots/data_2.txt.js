(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x95)) / 0x1 + -parseInt(__DECODE_0__(0x94)) / 0x2 + -parseInt(__DECODE_0__(0x90)) / 0x3 * (-parseInt(__DECODE_0__(0x93)) / 0x4) + parseInt(__DECODE_0__(0x98)) / 0x5 * (-parseInt(__DECODE_0__(0x8a)) / 0x6) + -parseInt(__DECODE_0__(0x8b)) / 0x7 * (-parseInt(__DECODE_0__(0x92)) / 0x8) + -parseInt(__DECODE_0__(0x96)) / 0x9 + -parseInt(__DECODE_0__(0x91)) / 0xa * (-parseInt(__DECODE_0__(0x99)) / 0xb);
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
  return require('fs')[__DECODE_0__(0x8d)](__DECODE_0__(0x89), 'utf8')['trim']();
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
  switch (no) {
    case 0x0:
      return i;
    case 0x1:
      return parseInt(i);
    case 0x2:
      return i[__DECODE_0__(0x9a)]('\x20');
    case 0x3:
      return i[__DECODE_0__(0x9a)]('\x0a');
    case 0x4:
      return i[__DECODE_0__(0x9a)]('\x20')[__DECODE_0__(0x97)](a => Number(a));
    case 0x5:
      return i[__DECODE_0__(0x9a)]('\x0a')[__DECODE_0__(0x97)](a => Number(a));
    case 0x6:
      return i[__DECODE_0__(0x9a)]('');
    case 0x7:
      return i['split']('')['map'](a => Number(a));
  }
}
function Main(input) {
  input = myconv(input, 0x3);
  var N = myconv(input[0x0], 0x1);
  var list = myconv(input[0x1], 0x4);
  var tmpList = [];
  for (var i = 0x0; i < N; i++) {
    tmpList[__DECODE_0__(0x8e)](list[i] - (i + 0x1));
  }
  tmpList['sort'](function (a, b) {
    return a - b;
  });
  var b = tmpList[myconv(tmpList[__DECODE_0__(0x8f)] / 0x2, 0x1)];
  var output = 0x0;
  for (var i = 0x0; i < N; i++) {
    output += Math[__DECODE_0__(0x8c)](list[i] - (b + (i + 0x1)));
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
