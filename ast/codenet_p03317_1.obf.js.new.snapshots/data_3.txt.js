function __DECODE_0__(HDJUTj, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 120;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(HDJUTj, key);
}
function __STRING_ARRAY__() {
  var _0x5cb310 = ["/dev/stdin", "583ZQAPes", "6yQfisT", "3rLIhKW", "1834126GcqKpm", "249596NNnfLZ", "23470BgUbwD", "25AFxMGP", "push", "9rQtUzP", "1598155dTYHwK", "readFileSync", "join", "log", "map", "split", "133872YTVQvd", "length", "1831540KBzuXM", "1852200YHQeKi"];
  __STRING_ARRAY__ = function () {
    return _0x5cb310;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("25AFxMGP") / 1 * (-parseInt("23470BgUbwD") / 2) + parseInt("3rLIhKW") / 3 * (parseInt("249596NNnfLZ") / 4) + -parseInt("1598155dTYHwK") / 5 + -parseInt("6yQfisT") / 6 * (parseInt("1834126GcqKpm") / 7) + parseInt("1852200YHQeKi") / 8 + parseInt("9rQtUzP") / 9 * (parseInt("1831540KBzuXM") / 10) + parseInt("583ZQAPes") / 11 * (parseInt("133872YTVQvd") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 193322);
function Main(input) {
  a = input.split("\n");
  b = a[0].split(" ").map(Number);
  c = a[1]["split"](" ")["map"](Number);
  N = b[0];
  K = b[1];
  r = 0;
  while (c["length"] > 1) {
    r++;
    d = [];
    for (i = 0; i < K; i++) {
      d["push"](c[i]);
    }
    for (i = 0; i < K; i++) {
      if (d.sort()[0] !== c[i]) {
        c[i] = "";
      }
    }
    c = c["join"]("")["split"]("")["map"](Number);
  }
  console["log"](r);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
