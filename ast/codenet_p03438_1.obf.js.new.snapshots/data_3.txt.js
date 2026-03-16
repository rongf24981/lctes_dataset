(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("213269nRvGce") / 1 + parseInt("519038feGPBk") / 2 + parseInt("667551QPEcWZ") / 3 + -parseInt("28528IvGkhd") / 4 * (parseInt("155YbIMRW") / 5) + -parseInt("1193016ZPvZNr") / 6 + parseInt("1771oTDMxi") / 7 * (-parseInt("1184bTwoKR") / 8) + -parseInt("846675VsZUhg") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 143858);
function __STRING_ARRAY__() {
  var _0x460caa = ["28528IvGkhd", "213269nRvGce", "split", "/dev/stdin", "155YbIMRW", "log", "readFileSync", "846675VsZUhg", "667551QPEcWZ", "1184bTwoKR", "519038feGPBk", "abs", "1771oTDMxi", "1193016ZPvZNr", "fill", "utf8"];
  __STRING_ARRAY__ = function () {
    return _0x460caa;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  input = input.split("\n");
  var n = parseInt(input[0]);
  a = new Array(n)["fill"](0);
  b = new Array(n)["fill"](0);
  tmpa = input[1].split(" ");
  tmpb = input[2]["split"](" ");
  var suma = 0;
  var sumb = 0;
  var dif = 0;
  for (i = 0; i < n; i++) {
    a[i] = parseInt(tmpa[i]);
    suma += a[i];
    b[i] = parseInt(tmpb[i]);
    sumb += b[i];
    dif += Math["abs"](a[i] - b[i]);
  }
  var ans = "No";
  if (suma <= sumb && dif <= (sumb - suma) * 3) {
    ans = "Yes";
  }
  console["log"]("%s", ans);
}
function __DECODE_0__(VKOnqH, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 190;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(VKOnqH, key);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
