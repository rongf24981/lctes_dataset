function Main(input) {
  function space_strinput(line) {
    var arr = line["replace"](/(^\s+)|(\s+$)/g, "")["split"](" ");
    for (var i = 0; i < arr["length"]; ++i) {
      arr[i] = arr[i];
    }
    return arr;
  }
  function space_numinput(line) {
    var arr = line["replace"](/(^\s+)|(\s+$)/g, "")["split"](" ");
    for (var i = 0; i < arr["length"]; ++i) {
      arr[i] = +arr[i];
    }
    return arr;
  }
  function getmin(a, b) {
    if (a > b) {
      return b;
    } else {
      return a;
    }
  }
  lines = input["split"]("\n");
  var l0 = space_numinput(lines[0]);
  var n = l0[0];
  var t = l0[1];
  var a = space_numinput(lines[1]);
  var rieki = 0;
  var rieki_place_count = 0;
  var min = a[0];
  var max = a[0];
  for (var i = 0; i < n; ++i) {
    var val = a[i];
    if (val - min > rieki) {
      rieki = val - min;
      rieki_place_count = 1;
    } else if (val - min == rieki) {
      rieki_place_count++;
    }
    min = val < min ? val : min;
  }
  console["log"](getmin(rieki_place_count, Math["floor"](t / 2)));
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
