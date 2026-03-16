function __DECODE_0__(KySuAS, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 410;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(KySuAS, key);
}
function __STRING_ARRAY__() {
  var _0x5717a2 = ["trim", "30KnudZW", "/dev/stdin", "readFileSync", "round", "88rtlVtu", "split", "pow", "4816895ULsPpz", "length", "1918642MibGhk", "412615mbHiVY", "2472288MVeHbP", "468153omhjxL", "2558985bOMYfp", "787258GtLPTx", "utf8"];
  __STRING_ARRAY__ = function () {
    return _0x5717a2;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("787258GtLPTx") / 1 + parseInt("1918642MibGhk") / 2 + -parseInt("2558985bOMYfp") / 3 + parseInt("2472288MVeHbP") / 4 + parseInt("4816895ULsPpz") / 5 + -parseInt("30KnudZW") / 6 * (-parseInt("412615mbHiVY") / 7) + parseInt("88rtlVtu") / 8 * (-parseInt("468153omhjxL") / 9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 623057);
function myout(text) {
  console.log(text);
}
function Main(input) {
  input = input["trim"]()["split"]("\n");
  var N = parseInt(input[0]);
  var list = input[1]["split"](" ").map(a => Number(a));
  var ave;
  var sum = 0;
  var output = 0;
  for (var i = 0; i < list["length"]; i++) {
    sum += list[i];
  }
  ave = Math["round"](sum / N);
  for (var i = 0; i < list.length; i++) {
    output += Math["pow"](list[i] - ave, 2);
  }
  myout(output);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8")["trim"]());
