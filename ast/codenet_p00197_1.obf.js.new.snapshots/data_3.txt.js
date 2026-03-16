(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1GULhWL") / 1 * (-parseInt("81574mTOjqs") / 2) + -parseInt("950073ZQhuuZ") / 3 + parseInt("720260rEJyKh") / 4 * (-parseInt("5gKWfXL") / 5) + parseInt("508278vtolAA") / 6 * (parseInt("112knhiAd") / 7) + parseInt("9126272bSXcyT") / 8 + -parseInt("10752111ZlucVw") / 9 + -parseInt("20iCqRpW") / 10 * (-parseInt("684222oDTVmu") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 888374);
(function () {
  var input = "";
  var cnt = 0;
  function main() {
    var inputLen;
    var nums;
    var x;
    var y;
    var temp;
    var ans;
    inputLen = input["length"];
    for (i = 0; i < inputLen; i += 1) {
      nums = input[i]["split"](" ");
      x = parseInt(nums[0], 10);
      y = parseInt(nums[1], 10);
      if (x === 0 && y === 0) {
        break;
      } else if (x < y) {
        temp = x;
        x = y;
        y = temp;
      }
      ans = gcd(x, y);
      showResult(ans, cnt);
      cnt = 0;
    }
  }
  function gcd(x, y) {
    cnt += 1;
    if (x % y === 0) {
      return y;
    } else {
      return gcd(y, x % y);
    }
  }
  function showResult(result, cnt) {
    console["log"](result + " " + cnt);
  }
  process["stdin"]["resume"]();
  process["stdin"].setEncoding("utf8");
  process.stdin.on("data", function (chunk) {
    input += chunk;
  });
  process["stdin"].on("end", function () {
    input = input["split"]("\n");
    main();
  });
})();
function __DECODE_0__(ldhdQj, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 173;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ldhdQj, key);
}
function __STRING_ARRAY__() {
  var _0x3c38da = ["stdin", "data", "81574mTOjqs", "log", "508278vtolAA", "112knhiAd", "720260rEJyKh", "length", "1GULhWL", "20iCqRpW", "split", "end", "5gKWfXL", "utf8", "684222oDTVmu", "10752111ZlucVw", "resume", "9126272bSXcyT", "950073ZQhuuZ"];
  __STRING_ARRAY__ = function () {
    return _0x3c38da;
  };
  return __STRING_ARRAY__();
}
