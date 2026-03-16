require("fs")["readFileSync"]("/dev/stdin", "utf8")["trim"]()["split"](/\s/).map(function (i) {
  j = i["split"](",");
  s = 0;
  m = n = 10;
  while (m--) {
    j[m] = s -= j[m];
  }
  for (s *= j[11] / (-j[11] - j[n]); j[--n] >= -s;);
  console["log"](++n);
});
