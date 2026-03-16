function Main(input) {
  let num = parseInt(input, 10);
  let sum = 0;
  let tmp = 0;
  for (let i = input["length"] - 1; i >= 0; i--) {
    tmp = Math["floor"](num / Math["pow"](10, i));
    sum += tmp;
    num -= tmp * Math["pow"](10, i);
  }
  const ans = sum % 9 === 0 ? "Yes" : "No";
  console["log"](ans);
}
;
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
