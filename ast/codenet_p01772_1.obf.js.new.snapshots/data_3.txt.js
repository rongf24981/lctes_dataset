function __DECODE_0__(ASBdjj, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 449;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ASBdjj, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("8VLqQlR") / 1 * (parseInt("19348VZlgVF") / 2) + -parseInt("12sELrDO") / 3 * (parseInt("376260kqXTOo") / 4) + parseInt("433850spHHOW") / 5 + parseInt("6LnOTVl") / 6 * (parseInt("1985207djNTZw") / 7) + -parseInt("503224Owgjgr") / 8 * (-parseInt("18PEcLkN") / 9) + parseInt("3514940VxHvwX") / 10 + -parseInt("11WBnHre") / 11 * (parseInt("1679076lBnrio") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 254096);
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var str = input["trim"]();
var a = false;
var ans = "";
function __STRING_ARRAY__() {
  var _0x445d09 = ["433850spHHOW", "12sELrDO", "utf8", "503224Owgjgr", "11WBnHre", "8VLqQlR", "1679076lBnrio", "trim", "376260kqXTOo", "1985207djNTZw", "19348VZlgVF", "3514940VxHvwX", "6LnOTVl", "18PEcLkN"];
  __STRING_ARRAY__ = function () {
    return _0x445d09;
  };
  return __STRING_ARRAY__();
}
for (var i = 0; i < str.length; i++) {
  if (str[i] == "A") {
    a = true;
  }
  if (str[i] == "Z" && a == true) {
    a = false;
    ans += "AZ";
  }
}
if (ans == "") {
  ans = -1;
}
console.log(ans);
