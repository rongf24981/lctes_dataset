var readable = process["stdin"];
readable["resume"]();
readable["setEncoding"]("utf-8");
readable.on("data", function (chunk) {
  var n = parseInt(chunk);
  var i = 1;
  var output = [];
  do {
    var x = i;
    if (x % 3 == 0) {
      output["push"](" " + i);
    } else {
      do {
        if (x % 10 == 3) {
          output["push"](" " + i);
          break;
        } else {
          x /= 10;
        }
      } while (x);
    }
  } while (++i <= n);
  console.log(output["join"](""));
});
