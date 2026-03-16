function __STRING_ARRAY__() {
  var _0x510d6a = ["utf8", "16OBvhKO", "/dev/stdin", "2135722xrjvRV", "826587NETTIx", "5262erGSQO", "20tQqTtX", "1515770UawcYF", "readFileSync", "1300GAWllz", "6409417FCtpJV", "12EiZbxp", "split", "3RnOAVn", "81710431YqwgNK", "6440008jIvvVf"];
  __STRING_ARRAY__ = function () {
    return _0x510d6a;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(kBIXFA, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 410;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(kBIXFA, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1515770UawcYF") / 1 + parseInt("2135722xrjvRV") / 2 * (-parseInt("3RnOAVn") / 3) + -parseInt("6440008jIvvVf") / 4 + -parseInt("1300GAWllz") / 5 * (parseInt("5262erGSQO") / 6) + -parseInt("6409417FCtpJV") / 7 * (parseInt("16OBvhKO") / 8) + parseInt("826587NETTIx") / 9 * (-parseInt("20tQqTtX") / 10) + -parseInt("81710431YqwgNK") / 11 * (-parseInt("12EiZbxp") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 991620);
function Main(input) {
  var str = input;
  const n = str.split("\n");
  var k = Number(n[0]);
  var p = n[1]["split"](" ");
  var a = Number(p[0]);
  var b = Number(p[1]);
  var ans = "";
  for (var i = a; i <= b; i++) {
    if (i % k === 0) {
      ans = "OK";
    }
  }
  if (ans !== "OK") {
    ans = "NG";
  }
  console.log(ans);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
