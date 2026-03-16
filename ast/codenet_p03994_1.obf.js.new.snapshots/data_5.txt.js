function Main(input) {
  var s;
  var K;
  var ref;
  ref = input.split("\n");
  s = ref[0];
  K = parseInt(ref[1]);
  console["log"](Array["from"](s)["map"]((v, i, arr) => {
    var code = v.charCodeAt();
    if (i === arr["length"] - 1) {
      code += K % 26;
      code -= code > 122 ? 26 : 0;
      return String.fromCharCode(code);
    } else {
      if (v === "a") {
        return v;
      }
      if (123 - code <= K) {
        K -= 123 - code;
        return "a";
      } else {
        return v;
      }
    }
  })["join"](""));
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
