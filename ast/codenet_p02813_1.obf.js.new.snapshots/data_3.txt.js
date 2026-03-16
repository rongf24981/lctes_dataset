'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("1bOKHmO") / 1 * (-parseInt("39068MlOTQa") / 2) + parseInt("312681uZZmpB") / 3 * (-parseInt("8VxBvsv") / 4) + -parseInt("57035XFFzCJ") / 5 * (-parseInt("12QBvBmq") / 6) + -parseInt("35KYYxKH") / 7 * (parseInt("109896JhiFKj") / 8) + -parseInt("1470978EYWWLy") / 9 + parseInt("232510rlvluV") / 10 * (-parseInt("11UtKmQW") / 11) + parseInt("6312876PJZTsF") / 12;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 104589);
function __DECODE_0__(hzgggL, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 194;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(hzgggL, key);
}
const permutation = ({
  result = [],
  pre = [],
  post: post,
  n = post["length"]
}) => {
  if (n > 0) {
    post["forEach"]((_, i) => {
      const rest = [...post];
      const elem = rest.splice(i, 1);
      permutation({
        result: result,
        pre: [...pre, ...elem],
        post: rest,
        n: n - 1
      });
    });
  } else {
    result.push(pre);
  }
  return result;
};
function Main(inputs) {
  const input = inputs["split"]("\n");
  const n = Number(input[0]);
  const p = input[1];
  const q = input[2];
  const perm = permutation({
    post: new Array(n)["fill"](0).map((_, i) => i + 1)
  })["map"](v => v["join"](" "));
  const a = perm["indexOf"](p);
  const b = perm["indexOf"](q);
  console.log(Math.abs(a - b));
}
function __STRING_ARRAY__() {
  const _0xbf71f6 = ["1470978EYWWLy", "109896JhiFKj", "6312876PJZTsF", "indexOf", "11UtKmQW", "/dev/stdin", "map", "35KYYxKH", "12QBvBmq", "split", "1bOKHmO", "join", "length", "312681uZZmpB", "57035XFFzCJ", "fill", "forEach", "utf8", "232510rlvluV", "8VxBvsv", "39068MlOTQa"];
  __STRING_ARRAY__ = function () {
    return _0xbf71f6;
  };
  return __STRING_ARRAY__();
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
