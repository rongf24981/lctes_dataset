'use strict';

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
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
