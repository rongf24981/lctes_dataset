r = ".IVXLCDM";
require("fs")["readFileSync"]("/dev/stdin", "utf8")["split"]("\n")["map"](function (i) {
  if (i) {
    n = s = p = 0;
    i["split"]("")["map"](function (c) {
      n = Math.pow(10, ~~((n = r["indexOf"](c)) / 2)) / (2 - n % 2);
      if (n > p) {
        s -= p * 2;
      } else {
        0;
      }
      s += n;
      p = n;
    });
    console["log"](s);
  } else {
    0;
  }
});
