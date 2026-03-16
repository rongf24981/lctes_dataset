'use strict';

const main = arg => {
  arg = arg["trim"]().split("\n");
  const N = arg[0] * 1;
  const nums = arg[1].split(" ")["map"](x => x * 1);
  const totalSum = new Array(N)["fill"](0);
  for (let i = 0; i < N; i++) {
    totalSum[i] += (totalSum[i - 1] || 0) + nums[i];
  }
  let accumObj = {
    0: 1
  };
  for (let i = 0; i < N; i++) {
    accumObj[totalSum[i]] = (accumObj[totalSum[i]] || 0) + 1;
  }
  let ans = 0;
  Object["keys"](accumObj)["forEach"](x => {
    ans += accumObj[x] * (accumObj[x] - 1) / 2;
  });
  console.log(ans);
};
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
