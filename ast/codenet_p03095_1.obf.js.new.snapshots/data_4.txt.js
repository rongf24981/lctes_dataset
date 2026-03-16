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
