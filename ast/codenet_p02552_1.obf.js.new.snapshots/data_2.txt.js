(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x155)) / 0x1 * (parseInt(__DECODE_0__(0x159)) / 0x2) + -parseInt(__DECODE_0__(0x15a)) / 0x3 + parseInt(__DECODE_0__(0x152)) / 0x4 * (parseInt(__DECODE_0__(0x150)) / 0x5) + parseInt(__DECODE_0__(0x14e)) / 0x6 + parseInt(__DECODE_0__(0x156)) / 0x7 + -parseInt(__DECODE_0__(0x158)) / 0x8 + -parseInt(__DECODE_0__(0x151)) / 0x9 * (parseInt(__DECODE_0__(0x14f)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xba4fb);
function __DECODE_0__(glHbjf, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x14e;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(glHbjf, key);
}
function __STRING_ARRAY__() {
  const _0xc890a = ['/dev/stdin', '70056KsUfwT', '24184jCxnYU', '2627184dmARVt', '6322722OCIUwN', '30QxZLKS', '65pMRnoF', '799983LsQiGt', '55020WIloHc', 'readFileSync', 'utf8', '1hMTPgg', '4856369SIGQDs'];
  __STRING_ARRAY__ = function () {
    return _0xc890a;
  };
  return __STRING_ARRAY__();
}
const main = arg => {
  console['log'](+arg === 0x0 ? 0x1 : 0x0);
};
main(require('fs')[__DECODE_0__(0x153)](__DECODE_0__(0x157), __DECODE_0__(0x154)));
