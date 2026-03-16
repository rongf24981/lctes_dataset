function __STRING_ARRAY__() {
  var _0x4c329f = ["650zlGAoh", "2clCKYs", "split", "log", "255429gJWfkq", "3745855bbiUSw", "77nKZTni", "/dev/stdin", "readFileSync", "2503785PZxZyO", "utf8", "556528qRxJKD", "97770kKzPQd", "234344KRKvVD", "707409XfQhqk"];
  __STRING_ARRAY__ = function () {
    return _0x4c329f;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("707409XfQhqk") / 1 + -parseInt("2clCKYs") / 2 * (-parseInt("2503785PZxZyO") / 3) + parseInt("556528qRxJKD") / 4 + parseInt("3745855bbiUSw") / 5 + parseInt("97770kKzPQd") / 6 * (-parseInt("77nKZTni") / 7) + parseInt("234344KRKvVD") / 8 + -parseInt("255429gJWfkq") / 9 * (parseInt("650zlGAoh") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 435590);
function __DECODE_0__(YwrGEY, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 190;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YwrGEY, key);
}
function main(input) {
  var N = input[0] - 0;
  var ans = 0;
  for (var i = 105; i <= N; i += 2) {
    var cnt = 0;
    for (var j = 1; j <= i; j++) {
      if (i % j == 0) {
        cnt++;
      }
      if (cnt > 8) {
        break;
      }
    }
    if (cnt == 8) {
      ans++;
    }
  }
  console["log"](ans);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8").trim()["split"]("\n"));
