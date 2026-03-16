function main(arg) {
  var arg2 = arg["split"]("\n")[1]["split"](/\s/g);
  var kazoe = [];
  for (i = 0; i < arg.split("\n")[0]; i++) {
    if (!kazoe[arg2[i]]) {
      kazoe[arg2[i]] = 0;
    }
    kazoe[arg2[i]] += 1;
  }
  var ans = 1;
  for (j = 0; j < kazoe["length"]; j++) {
    if (j > 1) {
      ans = ans * Math["pow"](kazoe[j - 1], kazoe[j]);
    }
    if (!kazoe[j]) {
      ans = 0;
      break;
    }
  }
  console["log"](ans % 998244353);
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
