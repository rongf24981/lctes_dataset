process["stdin"]["resume"]();
process["stdin"].setEncoding("utf8");
process["stdin"].on("data", function (chunk) {
  var line;
  var lines = chunk["split"]("\n");
  var i;
  var len = lines.length;
  var j;
  var jLen;
  var deg;
  var pow;
  var max;
  for (i = 0; i < len; i++) {
    line = lines[i];
    if (line == "#") {
      break;
    }
    line = line["replace"](/north/g, 0);
    line = line["replace"](/west/g, 1);
    deg = 0;
    jLen = line.length;
    pow = line["length"] - 1;
    max = Math["pow"](2, pow) * 90;
    for (j = jLen; j >= 0; j--) {
      if (line[j] * 1) {
        if (deg < max) {
          deg += Math.pow(2, j) * 90;
        }
      } else if (deg > 0) {
        deg -= Math["pow"](2, j) * 90;
      }
    }
    while (pow > 0 && deg % 2 === 0) {
      deg = deg / 2;
      pow--;
    }
    if (pow > 0) {
      console["log"](deg + "/" + Math.pow(2, pow));
    } else {
      console["log"](deg);
    }
  }
});
