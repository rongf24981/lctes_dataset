let n = Number(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
console.log(n * 800 - ~~(n / 15) * 200);
