(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x6e)) / 0x1 + parseInt(__DECODE_0__(0x76)) / 0x2 + parseInt(__DECODE_0__(0x6c)) / 0x3 + -parseInt(__DECODE_0__(0x70)) / 0x4 + -parseInt(__DECODE_0__(0x74)) / 0x5 * (parseInt(__DECODE_0__(0x77)) / 0x6) + -parseInt(__DECODE_0__(0x6f)) / 0x7 + parseInt(__DECODE_0__(0x71)) / 0x8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x60bd8);
i = require('fs')['readFileSync'](__DECODE_0__(0x72), __DECODE_0__(0x73))['trim']()['split'](/\n/)[__DECODE_0__(0x75)](function (a, b) {
  return a - b;
});
console[__DECODE_0__(0x78)](i[i[__DECODE_0__(0x6d)] - 0x1] - i[0x0]);
function __DECODE_0__(YEBVdK, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x6c;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YEBVdK, key);
}
function __STRING_ARRAY__() {
  var _0xd4315e = ['/dev/stdin', 'utf8', '35925RuoZpH', 'sort', '619588BhnSvn', '648jeqiyc', 'log', '2255109SzVjRg', 'length', '179597aVZhoo', '1686874yrbafT', '1336648jyoxoR', '6923776OsXLem'];
  __STRING_ARRAY__ = function () {
    return _0xd4315e;
  };
  return __STRING_ARRAY__();
}
