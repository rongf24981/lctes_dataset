function myout(text) {
  console.log(text);
}
function Main(input) {
  input = parseInt(input);
  var output = 1000000000;
  for (var i = 1; i <= 10; i++) {
    var tmp = (input * i)["toString"]().split("")["map"](a => Number(a));
    var check = 0;
    for (var j = 0; j < tmp["length"]; j++) {
      check += tmp[j];
    }
    output = Math["min"](output, check);
  }
  myout(output);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8")["trim"]());
