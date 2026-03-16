(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("485916nKqVvv") / 1 + -parseInt("2674TwLHYN") / 2 * (-parseInt("27pImIkF") / 3) + -parseInt("4OgVobX") / 4 * (parseInt("1251305VJtCdW") / 5) + -parseInt("57948LVjFCm") / 6 * (parseInt("476ZZoCrM") / 7) + parseInt("4718576UVlHHP") / 8 + -parseInt("5353542IRtsrB") / 9 + -parseInt("10igcfgk") / 10 * (-parseInt("8466414KkLSOZ") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 355602);
const main = inputs => {
  var array = inputs[0].split(" ");
  var array2 = inputs[1].split(" ");
  var N = array[0] - 0;
  var M = array[1] - 0;
  var sum = 0;
  for (var i = 0; i < M; i++) {
    sum = sum + Number(array2[i]);
  }
  console["log"](N - sum < 0 ? -1 : N - sum);
};
function __STRING_ARRAY__() {
  var _0x24c13a = ["27pImIkF", "log", "split", "4718576UVlHHP", "57948LVjFCm", "10igcfgk", "476ZZoCrM", "485916nKqVvv", "/dev/stdin", "8466414KkLSOZ", "5353542IRtsrB", "4OgVobX", "2674TwLHYN", "trim", "1251305VJtCdW"];
  __STRING_ARRAY__ = function () {
    return _0x24c13a;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(EFjVOp, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 393;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(EFjVOp, key);
}
main(require("fs").readFileSync("/dev/stdin", "UTF-8")["trim"]()["split"]("\n"));
