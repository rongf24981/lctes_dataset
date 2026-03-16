function __DECODE_0__(IGAjna, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 196;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(IGAjna, key);
}
function __STRING_ARRAY__() {
  var _0x2f164c = ["3356064FkxJLj", "/dev/stdin", "264KScOof", "floor", "1204LIzPxN", "119achAkO", "readFileSync", "681126aHzYFN", "1297281YycCsM", "17412130OcdhQk", "15FwAXun", "9cYCXpU", "23155pQVhWC", "451764hJDtkl", "416712efLMfX"];
  __STRING_ARRAY__ = function () {
    return _0x2f164c;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1297281YycCsM") / 1 + -parseInt("681126aHzYFN") / 2 * (-parseInt("15FwAXun") / 3) + -parseInt("1204LIzPxN") / 4 * (-parseInt("23155pQVhWC") / 5) + -parseInt("451764hJDtkl") / 6 * (-parseInt("119achAkO") / 7) + parseInt("3356064FkxJLj") / 8 + parseInt("9cYCXpU") / 9 * (-parseInt("17412130OcdhQk") / 10) + -parseInt("264KScOof") / 11 * (parseInt("416712efLMfX") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 924334);
function main(input) {
  console.log(10 - Math["floor"](input / 200));
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
