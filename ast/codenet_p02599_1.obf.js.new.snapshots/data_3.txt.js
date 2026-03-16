function __DECODE_0__(CHsckY, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 207;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(CHsckY, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("337138dumAyG") / 1 + -parseInt("655526NaOFAJ") / 2 + parseInt("158073RyFrfa") / 3 * (-parseInt("28PEQand") / 4) + parseInt("726890owhSle") / 5 + -parseInt("6yMfAcq") / 6 * (-parseInt("315203DbIMZP") / 7) + parseInt("206512cCJASQ") / 8 * (parseInt("9gtTArG") / 9) + parseInt("650PHHHNt") / 10 * (parseInt("55979kXFqLz") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 187544);
function __STRING_ARRAY__() {
  var _0x13b850 = ["315203DbIMZP", "726890owhSle", "split", "indexOf", "6yMfAcq", "55979kXFqLz", "655526NaOFAJ", "map", "337138dumAyG", "/dev/stdin", "length", "readFileSync", "utf8", "push", "158073RyFrfa", "650PHHHNt", "9gtTArG", "206512cCJASQ", "28PEQand"];
  __STRING_ARRAY__ = function () {
    return _0x13b850;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  input = input["split"]("\n");
  var [n, q] = input[0]["split"](" ")["map"](a => parseInt(a, 10));
  var colors = input[1]["split"](" ");
  for (var i = 0; i < q; i++) {
    var [start, end] = input[i + 2]["split"](" ")["map"](a => parseInt(a, 10));
    var cs = [];
    for (var j = start - 1; j < end; j++) {
      var color = colors[j];
      if (cs["indexOf"](color) === -1) {
        cs["push"](color);
      }
    }
    console.log(cs["length"]);
  }
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
