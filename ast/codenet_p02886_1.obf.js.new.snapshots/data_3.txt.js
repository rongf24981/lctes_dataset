(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("28546xWRCoq") / 1 * (-parseInt("4vwNEDf") / 2) + -parseInt("1404222McpydX") / 3 + -parseInt("2338256fNSXNA") / 4 + parseInt("860035jLAEil") / 5 * (-parseInt("12TPOMef") / 6) + parseInt("7ywJSax") / 7 * (parseInt("2068504SczjHi") / 8) + -parseInt("411219oiAudR") / 9 * (-parseInt("90ubjgYW") / 10) + parseInt("11904640hTLiuO") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 298278);
function Main(input) {
  var input = input["split"]("\n");
  const n = Number(input[0]);
  const ocps = input[1]["split"](" ").map(ocp => Number(ocp));
  var r = 0;
  for (var i = 0; i < n; i++) {
    for (var j = i + 1; j < n; j++) {
      r += ocps[i] * ocps[j];
    }
  }
  console.log(r);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __DECODE_0__(HpDOaz, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 320;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(HpDOaz, key);
}
function __STRING_ARRAY__() {
  var _0x70b35d = ["/dev/stdin", "90ubjgYW", "7ywJSax", "4vwNEDf", "12TPOMef", "860035jLAEil", "11904640hTLiuO", "28546xWRCoq", "readFileSync", "utf8", "1404222McpydX", "2068504SczjHi", "split", "411219oiAudR", "2338256fNSXNA"];
  __STRING_ARRAY__ = function () {
    return _0x70b35d;
  };
  return __STRING_ARRAY__();
}
