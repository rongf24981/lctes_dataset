function __STRING_ARRAY__() {
  var _0x6e0875 = ["200265MUDFMV", "sort", "11AobbRE", "map", "2429112Bodara", "2282110FvIhuB", "6LjVbAV", "4iyCBQC", "forEach", "6xLZhpc", "filter", "39896kPgEgQ", "push", "965915TkLTHu", "pop", "split", "975264dqLhMU", "9VyBjNB", "/dev/stdin", "2586392OeIbiU", "readFileSync", "log", "104tDlTgU"];
  __STRING_ARRAY__ = function () {
    return _0x6e0875;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("200265MUDFMV") / 1 + -parseInt("39896kPgEgQ") / 2 * (parseInt("6LjVbAV") / 3) + parseInt("4iyCBQC") / 4 * (-parseInt("965915TkLTHu") / 5) + parseInt("6xLZhpc") / 6 * (-parseInt("2429112Bodara") / 7) + parseInt("2586392OeIbiU") / 8 * (-parseInt("9VyBjNB") / 9) + parseInt("2282110FvIhuB") / 10 * (parseInt("11AobbRE") / 11) + -parseInt("975264dqLhMU") / 12 * (-parseInt("104tDlTgU") / 13);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 175258);
log = console["log"];
var stdin = require("fs")["readFileSync"]("/dev/stdin", "UTF-8");
var lines = stdin.split("\n")["filter"](v => v !== "")["map"](v => v["split"](" ")["map"](Number));
var N = lines[0];
var A = lines[1];
var processList = [];
A["sort"]((a, b) => a - b);
var plusList = [];
var minusList = [];
plusList["push"](A["pop"]());
minusList["push"](A.shift());
A["forEach"](v => {
  if (v >= 0) {
    plusList["push"](v);
  } else {
    minusList.push(v);
  }
});
function __DECODE_0__(ueArPe, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 238;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ueArPe, key);
}
var tmp = minusList["pop"]();
for (var i = 0; i < plusList.length - 1; i++) {
  var plus = plusList["pop"]();
  processList["push"](tmp + " " + plus);
  tmp = tmp - plus;
}
var lastplus = plusList["pop"]();
for (var i = 0; i < minusList.length; i++) {
  var minus = minusList["pop"]();
  processList.push(lastplus + " " + minus);
  lastplus = lastplus - minus;
}
processList["push"](lastplus + " " + tmp);
log(lastplus - tmp);
processList["forEach"](v => log(v));
