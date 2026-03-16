console["log"]((args => {
  const [[N], a] = args["trim"]()["split"]`\n`["map"](r => r["split"]` `["map"](v => v | 0));
  let odd = 0;
  let p4 = 0;
  for (let i = 0; i < N; i++) {
    odd += a[i] & 1;
    p4 += !(a[i] % 4);
  }
  if (odd - (odd + p4 === N) <= p4) {
    return "Yes";
  } else {
    return "No";
  }
})(require("fs")["readFileSync"]("/dev/stdin", "utf8")));
