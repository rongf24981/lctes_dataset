function __DECODE_0__(GqwpxX, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 303;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(GqwpxX, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("323594twDZJV") / 1 * (-parseInt("2pujbxG") / 2) + -parseInt("47817AOCTxn") / 3 + -parseInt("1028220pLsjjd") / 4 + parseInt("1813075Jhpiyi") / 5 + -parseInt("6xgPPrS") / 6 * (parseInt("2789297FBZamX") / 7) + parseInt("1277752NehYiJ") / 8 + parseInt("953559YxLyAX") / 9 * (parseInt("70gNSsHT") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 268932);
function Main(input) {
  input = input["trim"]();
  input = input["split"]("\n");
  var A = input[0]["split"]("");
  var B = input[1]["split"]("");
  if (A[0] == B[2] && A[1] == B[1] && A[2] == B[0]) {
    console.log("YES");
  } else {
    console["log"]("NO");
  }
}
function __STRING_ARRAY__() {
  var _0x1f4054 = ["2789297FBZamX", "1028220pLsjjd", "953559YxLyAX", "readFileSync", "6xgPPrS", "split", "utf8", "log", "2pujbxG", "323594twDZJV", "YES", "47817AOCTxn", "1813075Jhpiyi", "70gNSsHT", "1277752NehYiJ", "trim"];
  __STRING_ARRAY__ = function () {
    return _0x1f4054;
  };
  return __STRING_ARRAY__();
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
