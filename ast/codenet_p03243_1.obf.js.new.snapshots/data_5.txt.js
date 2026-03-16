function myout(text) {
  console.log(text);
}
function Main(input) {
  input = parseInt(input["trim"]());
  var check = [0, 111, 222, 333, 444, 555, 666, 777, 888, 999];
  for (var i = 0; i < check["length"] - 1; i++) {
    if (check[i] < input && check[i + 1] > input) {
      myout(check[i + 1]);
      return;
    } else if (check[i] == input) {
      myout(check[i]);
      return;
    }
  }
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
