(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("74Hrrcij") / 1 * (parseInt("14932MtXpKb") / 2) + -parseInt("780258mZMKPp") / 3 + -parseInt("734512TyieLh") / 4 + parseInt("24095HmpXHG") / 5 * (parseInt("348mfJjCA") / 6) + -parseInt("606515QByvKl") / 7 + parseInt("664624YXaHoF") / 8 * (parseInt("63ELpxHc") / 9) + -parseInt("3919670giUXYx") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 491206);
process.stdin.resume();
function __DECODE_0__(QyDCAw, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 268;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(QyDCAw, key);
}
process["stdin"]["setEncoding"]("utf8");
function __STRING_ARRAY__() {
  var _0x2902c8 = ["14932MtXpKb", "664624YXaHoF", "3919670giUXYx", "24095HmpXHG", "join", "734512TyieLh", "stdin", "setEncoding", "348mfJjCA", "606515QByvKl", "63ELpxHc", "data", "toString", "trim", "780258mZMKPp", "log", "split", "74Hrrcij"];
  __STRING_ARRAY__ = function () {
    return _0x2902c8;
  };
  return __STRING_ARRAY__();
}
process.stdin.on("data", function (chunk) {
  var nums = chunk["trim"]().split("\n");
  function digit(e) {
    var a = e["split"](" ");
    var wa = parseInt(a[0]) + parseInt(a[1]);
    return wa["toString"]().length;
  }
  console["log"](nums.map(digit)["join"]("\n"));
});
