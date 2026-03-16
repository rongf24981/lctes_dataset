function main(input) {
  var lines = input["split"]("\n");
  var s = lines[0]["split"]("");
  var t = lines[1]["split"]("");
  s = s["sort"]()["join"]();
  t = t["sort"]()["reverse"]().join();
  if (s < t) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
main(require("fs")["readFileSync"]("/dev/stdin", "UTF-8"));
