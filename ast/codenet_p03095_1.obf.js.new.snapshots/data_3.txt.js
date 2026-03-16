function __DECODE_0__(eRSYPS, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 407;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(eRSYPS, key);
}
function __STRING_ARRAY__() {
  var _0x45db46 = ["/dev/stdin", "3082548BInnQP", "1922664qnbuly", "1432403lHbxBQ", "split", "9205YWvrfW", "log", "262560silYAY", "round", "push", "8HxxTTT", "2842740eBOqHU", "utf8", "1313448mfbRea"];
  __STRING_ARRAY__ = function () {
    return _0x45db46;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("9205YWvrfW") / 1 * (-parseInt("8HxxTTT") / 2) + -parseInt("262560silYAY") / 3 + parseInt("1313448mfbRea") / 4 + parseInt("2842740eBOqHU") / 5 + -parseInt("3082548BInnQP") / 6 + -parseInt("1432403lHbxBQ") / 7 + parseInt("1922664qnbuly") / 8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 368156);
function roop(depth, A, end) {
  var ans = 0;
  var i = 0;
  if (depth < end) {
    for (i = depth; i < end; i++) {
      ans += roop(i + 1, A, end);
    }
    return A[depth] + A[depth] * ans;
  } else {
    return A[depth];
  }
}
function main(input) {
  var i;
  var j;
  var A;
  var B;
  var ans = 0;
  var count = 0;
  var inputs = input.split("\n");
  var arg = Number(inputs[0]);
  var str = inputs[1]["split"]("");
  A = {};
  for (i = 0; i < arg; ++i) {
    if (A[str[i]]) {
      A[str[i]]++;
    } else {
      A[str[i]] = 1;
      count++;
    }
  }
  B = [];
  for (key in A) {
    B["push"](A[key]);
  }
  for (i = 0; i < count; ++i) {
    ans += roop(i, B, count - 1);
  }
  ans = Math["round"](ans);
  console["log"](ans % 1000000007);
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
