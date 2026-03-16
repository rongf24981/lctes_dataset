function Main(input) {
  inputList = input["split"]("\n");
  inputNum = parseInt(inputList[0], 10);
  firstList = inputList[1].split("");
  secondList = inputList[2]["split"]("");
  thirdList = inputList[3]["split"]("");
  count = 0;
  for (var i = 0; i < inputNum; i++) {
    if (firstList[i] == secondList[i] && secondList[i] == thirdList[i]) {
      continue;
    }
    if (firstList[i] == secondList[i] || secondList[i] == thirdList[i] || thirdList[i] == firstList[i]) {
      count++;
      continue;
    }
    count++;
    count++;
  }
  console.log(count);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
