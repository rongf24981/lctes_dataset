function main(input) {
  const lines = input["split"]("\n");
  const K = lines[0].split(" ")[1] | 0;
  let arr = new Int32Array(lines[1]["split"](" "));
  let isOk = (t = 0, k = 0) => {
    arr["forEach"](v => {
      let d = v / t | 0;
      if (v === d * t) {
        d--;
      }
      k -= d;
    });
    return k >= 0;
  };
  let l = 0;
  let r = Math.max(...arr);
  let mid = (r + l) * 0.5 | 0;
  let res = r;
  while (l < r) {
    if (isOk(mid, K)) {
      res = mid;
      r = mid - 1;
    } else {
      l = mid + 1;
    }
    mid = (r + l) * 0.5 | 0;
  }
  return res;
}
exports["main"] = main;
function Main(input) {
  console["log"](main(input["trim"]()));
}
if (process.argv[2] !== "test") {
  Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
}
