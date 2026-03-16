function __STRING_ARRAY__() {
  var _0x15d955 = ["5322312aYvcYv", "map", "95930jfSJte", "22OhizCv", "5338071hHZalX", "/dev/stdin", "638443PkZCSa", "12yutDyN", "7pPLtTC", "trim", "1549140XUhTRq", "1900374ZWGRAL", "100146sJnjgd", "split", "12uCwRvU", "8BvWimm", "readFileSync", "length"];
  __STRING_ARRAY__ = function () {
    return _0x15d955;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("638443PkZCSa") / 1 + -parseInt("12uCwRvU") / 2 * (-parseInt("100146sJnjgd") / 3) + -parseInt("12yutDyN") / 4 * (-parseInt("95930jfSJte") / 5) + parseInt("1900374ZWGRAL") / 6 * (-parseInt("7pPLtTC") / 7) + -parseInt("8BvWimm") / 8 * (-parseInt("5338071hHZalX") / 9) + -parseInt("1549140XUhTRq") / 10 * (parseInt("22OhizCv") / 11) + -parseInt("5322312aYvcYv") / 12;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 419329);
function __DECODE_0__(iWGWNQ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 311;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(iWGWNQ, key);
}
function Main(s) {
  const sl = s["length"] - 1;
  const sa = s["split"]("")["map"](a => parseInt(a));
  var ans = 0;
  for (var i = 0; i < 1 << sl; i++) {
    var b = 0;
    for (var j = 0; j < sl; j++) {
      b += sa[j];
      if (i & 1 << j) {
        ans += b;
        b = 0;
      } else {
        b *= 10;
      }
    }
    ans += b + sa[sl];
  }
  console.log(ans);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8")["trim"]());
