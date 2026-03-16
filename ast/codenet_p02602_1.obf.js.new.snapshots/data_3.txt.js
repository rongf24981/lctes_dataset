function __DECODE_0__(akkqJd, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 466;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(akkqJd, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("742014QngXTU") / 1 + -parseInt("4fKoBpY") / 2 * (-parseInt("549663WHoheT") / 3) + -parseInt("5938776ixnYfj") / 4 * (-parseInt("5jTznsn") / 5) + -parseInt("807582ZFaVxc") / 6 * (parseInt("7nsuUkt") / 7) + parseInt("2892912WEexPu") / 8 * (-parseInt("9zVePjb") / 9) + parseInt("48610qmxZJa") / 10 * (-parseInt("4015aVrnmV") / 11) + parseInt("7461924RcQiyr") / 12 * (parseInt("13oRPocp") / 13);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 944501);
function Main(input) {
  input = input["replace"](/\n/g, " ");
  input = input["split"](" ");
  var A = Number(input[0]);
  var B = Number(input[1]);
  input = input.slice(2);
  for (var i = 0; i < input["length"] - B; i++) {
    if (Number(input[i]) < Number(input[i + B])) {
      console["log"]("Yes");
    } else {
      console.log("No");
    }
  }
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  var _0x21f700 = ["4015aVrnmV", "length", "13oRPocp", "742014QngXTU", "48610qmxZJa", "5938776ixnYfj", "split", "5jTznsn", "7nsuUkt", "readFileSync", "549663WHoheT", "807582ZFaVxc", "log", "2892912WEexPu", "utf8", "Yes", "replace", "/dev/stdin", "9zVePjb", "7461924RcQiyr", "4fKoBpY"];
  __STRING_ARRAY__ = function () {
    return _0x21f700;
  };
  return __STRING_ARRAY__();
}
