function Main(input) {
  input = input["split"]("\n");
  var inputs = input[1]["split"](" ");
  function avg(args) {
    var num = 0;
    for (var n of args) {
      num += Number(n);
    }
    return num / args.length;
  }
  var average = Math["round"](avg(inputs));
  var useStamina = 0;
  for (var point of inputs) {
    useStamina += Math.pow(average - point, 2);
  }
  console["log"](useStamina);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
