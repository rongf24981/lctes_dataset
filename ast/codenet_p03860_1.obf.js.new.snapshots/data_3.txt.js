(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("630225FSPCdl") / 1 + -parseInt("385604gCqNuC") / 2 * (-parseInt("3oQfimN") / 3) + parseInt("176CDmron") / 4 * (-parseInt("80050PTLNDF") / 5) + -parseInt("2165754tTNcQX") / 6 + parseInt("7EeUibf") / 7 * (-parseInt("596784QPoZzt") / 8) + parseInt("4408785GDwkuU") / 9 + parseInt("2428130aNuiZf") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 415708);
function __DECODE_0__(kHPYqo, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 463;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(kHPYqo, key);
}
function __STRING_ARRAY__() {
  var _0xfeee04 = ["385604gCqNuC", "2165754tTNcQX", "3oQfimN", "utf8", "630225FSPCdl", "596784QPoZzt", "4408785GDwkuU", "split", "176CDmron", "7EeUibf", "2428130aNuiZf", "/dev/stdin", "readFileSync", "80050PTLNDF"];
  __STRING_ARRAY__ = function () {
    return _0xfeee04;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  input = input["split"](" ");
  tmp = input[1][0];
  console.log("A" + tmp + "C");
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
