function __DECODE_0__(yJLldI, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 126;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(yJLldI, key);
}
function __STRING_ARRAY__() {
  var _0xeaaf82 = ["log", "275568BqkSiu", "5nGqxRp", "8dfsPZx", "split", "504286sZDwDS", "end", "78576HtktcM", "stdin", "utf8", "length", "200793kajLpp", "1721181wFiBJs", "2199951DzsKfU", "resume", "indexOf", "setEncoding", "3538450pBICsu", "push", "4klNCrl"];
  __STRING_ARRAY__ = function () {
    return _0xeaaf82;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("78576HtktcM") / 1 + -parseInt("504286sZDwDS") / 2 + -parseInt("200793kajLpp") / 3 * (-parseInt("4klNCrl") / 4) + parseInt("5nGqxRp") / 5 * (parseInt("275568BqkSiu") / 6) + -parseInt("1721181wFiBJs") / 7 + -parseInt("8dfsPZx") / 8 * (-parseInt("2199951DzsKfU") / 9) + parseInt("3538450pBICsu") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 134541);
function main() {
  var i;
  var j;
  var n;
  var m;
  var x;
  var len = input["length"];
  for (i = 0; i < len; i++) {
    n = parseInt(input[i], 10);
    if (n === 0) {
      break;
    }
    if (n % 2 === 1) {
      console["log"](0);
      continue;
    }
    m = ~~(n / 2);
    x = 0;
    j = 0;
    for (; primes[j] <= m; j++) {
      if (primes["indexOf"](n - primes[j]) !== -1) {
        x++;
      }
    }
    console["log"](x);
  }
}
var primes = function (n) {
  var i;
  var j;
  var flag;
  var primes = [2];
  if (n < 2) {
    return [];
  }
  for (i = 3; i <= n; i += 2) {
    flag = true;
    for (j = 0; primes[j] < i * i; j++) {
      if (i % primes[j] == 0) {
        flag = false;
        break;
      }
    }
    if (flag) {
      primes["push"](i);
    }
  }
  return primes;
}(50000);
var input = "";
process.stdin["resume"]();
process.stdin["setEncoding"]("utf8");
process.stdin.on("data", function (chunk) {
  input += chunk;
});
process["stdin"].on("end", function () {
  input = input["split"]("\n");
  main();
});
