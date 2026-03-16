(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("2YfCRSO") / 1 * (parseInt("1105528zxRpMP") / 2) + -parseInt("5035812hBfgys") / 3 + -parseInt("5263904asGfal") / 4 + -parseInt("40qyvFUd") / 5 * (parseInt("535242OukmZY") / 6) + parseInt("118391cKNstS") / 7 * (parseInt("312IatnYs") / 8) + -parseInt("18ZLvmAC") / 9 * (-parseInt("6624680bRcTvp") / 10) + parseInt("2534378btcKjU") / 11 * (parseInt("84GyMxuM") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 994621);
var input = "";
process["stdin"].resume();
function __DECODE_0__(KnyMcq, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 476;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(KnyMcq, key);
}
process["stdin"]["setEncoding"]("utf8");
function __STRING_ARRAY__() {
  var _0x337ee0 = ["535242OukmZY", "Case ", "312IatnYs", "6624680bRcTvp", "40qyvFUd", "2YfCRSO", "stdin", "utf8", "5263904asGfal", "118391cKNstS", "84GyMxuM", "split", "setEncoding", "1105528zxRpMP", "5035812hBfgys", "18ZLvmAC", "2534378btcKjU"];
  __STRING_ARRAY__ = function () {
    return _0x337ee0;
  };
  return __STRING_ARRAY__();
}
process.stdin.on("data", function (chunk) {
  input += chunk;
});
process["stdin"].on("end", function () {
  var nums = input["split"]("\n");
  var output = "";
  for (var i = 0; i < nums.length; i++) {
    nums[i] = Number(nums[i]);
    if (nums[i] == 0) {
      break;
    }
    output += "Case " + (i + 1) + ": " + nums[i] + "\n";
  }
  console.log(output);
});
