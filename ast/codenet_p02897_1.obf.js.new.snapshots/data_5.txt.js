function main(input) {
  var Gusu = 0;
  var Kisu = 0;
  var Out = 0;
  if (input > 0) {
    if (input % 2 == 0) {
      Gusu = input / 2;
      Kisu = Gusu;
      Out = Kisu / input;
    } else if (input % 2 == 1) {
      Gusu = parseInt(input / 2);
      Kisu = Gusu + 1;
      Out = Kisu / input;
    }
  }
  console.log(Out["toFixed"](10));
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
