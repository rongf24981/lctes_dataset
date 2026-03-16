(function (input) {
  var inputs = input.replace(/\r/g, "")["split"]("\n");
  var data = [];
  var n;
  var line;
  var max_index;
  var a;
  var b;
  n = parseInt(inputs["shift"]());
  max_index = 101;
  max_value = -1;
  while (n--) {
    line = inputs.shift().split(" ");
    a = parseInt(line[0]);
    b = parseInt(line[1]);
    if (b > max_value || b === max_value && a < max_index) {
      max_index = a;
      max_value = b;
    }
  }
  console["log"](max_index + " " + max_value);
})(require("fs").readFileSync("/dev/stdin", "utf8"));
