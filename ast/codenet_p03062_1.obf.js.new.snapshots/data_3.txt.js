(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("198749lenCRC") / 1 + -parseInt("452496yOaVxJ") / 2 + parseInt("868101UXpjjj") / 3 + parseInt("500YaMcfl") / 4 * (-parseInt("14325hNchii") / 5) + -parseInt("1828770CsUnlW") / 6 + parseInt("721021onArqm") / 7 + parseInt("248zOClOK") / 8 * (parseInt("138807FzHTqE") / 9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 180064);
function main(input) {
  const formatted_input = input["split"]("\n");
  const N = parseInt(formatted_input[0], 10);
  const As = formatted_input[1]["split"](" ").map(x => parseInt(x));
  dp = [];
  for (var i = 0; i < N; i++) {
    var results = [];
    if (i == 0) {
      results = [As[i], As[i] * -1];
    } else {
      var not_flipped = Math.max(dp[i - 1][0] + As[i], dp[i - 1][1] - As[i]);
      var flipped = Math.max(dp[i - 1][0] - As[i], dp[i - 1][1] + As[i]);
      results = [not_flipped, flipped];
    }
    dp["push"](results);
  }
  console.log(dp[N - 1][0]);
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
function __DECODE_0__(iuYlaX, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 251;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(iuYlaX, key);
}
function __STRING_ARRAY__() {
  var _0x5a66cb = ["14325hNchii", "/dev/stdin", "138807FzHTqE", "868101UXpjjj", "push", "248zOClOK", "1828770CsUnlW", "452496yOaVxJ", "500YaMcfl", "198749lenCRC", "split", "721021onArqm"];
  __STRING_ARRAY__ = function () {
    return _0x5a66cb;
  };
  return __STRING_ARRAY__();
}
