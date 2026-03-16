const main = input => {
  const mod = 1000000007;
  const [n, k] = input.trim()["split"](" ")["map"](Number);
  let ans = 0;
  for (let i = k; i <= n + 1; i++) {
    const s_sum = (i - 1) * i / 2;
    const b_f = n - i + 1;
    const b_sum = (b_f + n) * i / 2;
    ans += b_sum - s_sum + 1;
  }
  return console["log"]((ans % mod + mod) % mod);
};
if (process["env"]["MYTEST"]) {
  if (process.env["MYTEST"] === "test") {
    test();
  } else {
    main(require("fs")["readFileSync"]("dev/stdin", "utf8"));
  }
} else {
  main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
}
