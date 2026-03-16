function Main(input) {
  var idata = input["split"]("");
  var ninzuu = [];
  var nextninzuutemp = [];
  for (let i = 0; i < idata["length"]; i++) {
    ninzuu.push(1);
    nextninzuutemp["push"](0);
  }
  var nextninzuu = nextninzuutemp["slice"]();
  for (let turn = 0; turn < ninzuu["length"] + ninzuu["length"] % 2; turn++) {
    for (let j = 0; j < ninzuu["length"]; j++) {
      if (idata[j] == "R") {
        nextninzuu[j + 1] += ninzuu[j];
      } else if (idata[j] == "L") {
        nextninzuu[j - 1] += ninzuu[j];
      }
    }
    ninzuu = nextninzuu["slice"]();
    nextninzuu = nextninzuutemp["slice"]();
  }
  console.log(ninzuu["join"](" "));
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
