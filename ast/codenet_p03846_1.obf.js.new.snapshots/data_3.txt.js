(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("11900sKOHfK") / 1 * (-parseInt("124wgUCbe") / 2) + -parseInt("4078911pxvRxW") / 3 + parseInt("376oECuty") / 4 * (-parseInt("44605wiPhEz") / 5) + -parseInt("883176SttUoY") / 6 + -parseInt("1358DeRfov") / 7 * (-parseInt("38120ZlRDNq") / 8) + -parseInt("644967TmFUyG") / 9 * (parseInt("70lyVZCn") / 10) + parseInt("21186506QLKpCl") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 741208);
function __STRING_ARRAY__() {
  var _0x805531 = ["1358DeRfov", "split", "getElementById", "utf8", "21186506QLKpCl", "376oECuty", "pow", "readFileSync", "length", "input", "44605wiPhEz", "/dev/stdin", "70lyVZCn", "38120ZlRDNq", "value", "883176SttUoY", "11900sKOHfK", "4078911pxvRxW", "124wgUCbe", "644967TmFUyG", "log"];
  __STRING_ARRAY__ = function () {
    return _0x805531;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(xJEsoa, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 144;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(xJEsoa, key);
}
function Main(input) {
  input = input["split"]("\n");
  tmp = input[1].split(" ");
  var c = Math["pow"](parseInt(tmp["length"] / 2), 2);
  var d = 0;
  for (j = tmp["length"] - 1; j >= 0; j--) {
    for (i = 0; i < tmp.length; i++) {
      if (tmp[i] == j) {
        d++;
      }
    }
    if (d != 2 && j > 0) {
      c = 0;
      break;
    }
    if (d != 1 && j == 0) {
      c = 0;
      break;
    }
    d = 0;
    j--;
  }
  c = c % (Math["pow"](10, 9) + 7);
  console["log"]("%s", c);
}
function debug() {
  var input = document["getElementById"]("input")["value"];
  Main(input);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
