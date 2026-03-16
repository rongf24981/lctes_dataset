function __DECODE_0__(Rgyqdb, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 317;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(Rgyqdb, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("337488mexBLW") / 1 + parseInt("2XnNFEh") / 2 * (-parseInt("464301IKUWWU") / 3) + -parseInt("1669780SltnGA") / 4 + -parseInt("3097355AhKTCY") / 5 + -parseInt("127770IdsoOo") / 6 * (parseInt("231kpKAsC") / 7) + parseInt("248656GBfAvq") / 8 * (-parseInt("45fuEIOO") / 9) + parseInt("27732590pTNiQL") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 385943);
function Main(input) {
  input = input["split"]("\n");
  var inputs = input[1]["split"](" ");
  function avg(args) {
    var num = 0;
    for (var n of args) {
      num += Number(n);
    }
    return num / args.length;
  }
  var average = Math["round"](avg(inputs));
  var useStamina = 0;
  for (var point of inputs) {
    useStamina += Math.pow(average - point, 2);
  }
  console["log"](useStamina);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  var _0x2c39c2 = ["utf8", "248656GBfAvq", "1669780SltnGA", "2XnNFEh", "/dev/stdin", "3097355AhKTCY", "337488mexBLW", "27732590pTNiQL", "464301IKUWWU", "log", "127770IdsoOo", "split", "231kpKAsC", "45fuEIOO", "round"];
  __STRING_ARRAY__ = function () {
    return _0x2c39c2;
  };
  return __STRING_ARRAY__();
}
