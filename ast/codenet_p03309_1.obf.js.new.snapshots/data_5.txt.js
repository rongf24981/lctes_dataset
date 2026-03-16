function myin() {
  return require("fs")["readFileSync"]("/dev/stdin", "utf8").trim();
}
function myout(t) {
  console.log(t);
}
function myconv(i, no) {
  switch (no) {
    case 0:
      return i;
    case 1:
      return parseInt(i);
    case 2:
      return i["split"](" ");
    case 3:
      return i["split"]("\n");
    case 4:
      return i["split"](" ")["map"](a => Number(a));
    case 5:
      return i["split"]("\n")["map"](a => Number(a));
    case 6:
      return i["split"]("");
    case 7:
      return i.split("").map(a => Number(a));
  }
}
function Main(input) {
  input = myconv(input, 3);
  var N = myconv(input[0], 1);
  var list = myconv(input[1], 4);
  var tmpList = [];
  for (var i = 0; i < N; i++) {
    tmpList["push"](list[i] - (i + 1));
  }
  tmpList.sort(function (a, b) {
    return a - b;
  });
  var b = tmpList[myconv(tmpList["length"] / 2, 1)];
  var output = 0;
  for (var i = 0; i < N; i++) {
    output += Math["abs"](list[i] - (b + (i + 1)));
  }
  myout(output);
}
Main(myin());
