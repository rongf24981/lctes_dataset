function __DECODE_0__(MByGhh, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 155;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(MByGhh, key);
}
function __STRING_ARRAY__() {
  var _0x193bcc = ["144044BaGtbq", "Yes", "30714hQitqi", "23800uiTQEC", "readFileSync", "map", "log", "434692kDsDfK", "326841RCEAJp", "194210XDWztA", "1078DLsMWJ", "split", "ceil", "2374146pHbvzu", "365SXqeIz", "517HnnSyg", "9xKWHBW"];
  __STRING_ARRAY__ = function () {
    return _0x193bcc;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("326841RCEAJp") / 1 + parseInt("144044BaGtbq") / 2 + -parseInt("9xKWHBW") / 3 * (parseInt("434692kDsDfK") / 4) + -parseInt("365SXqeIz") / 5 * (-parseInt("30714hQitqi") / 6) + parseInt("1078DLsMWJ") / 7 * (parseInt("23800uiTQEC") / 8) + parseInt("2374146pHbvzu") / 9 + parseInt("194210XDWztA") / 10 * (-parseInt("517HnnSyg") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 255688);
function main(input) {
  var line = input["split"](/\r?\n/g);
  var arr = line[0]["split"](" ");
  const H = arr[0];
  const N = arr[1];
  var A = line[1].split(" ")["map"](Number);
  A = A.reduce((A, x) => A + x);
  console["log"](Math["ceil"](H / A) > 1 ? "No" : "Yes");
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
