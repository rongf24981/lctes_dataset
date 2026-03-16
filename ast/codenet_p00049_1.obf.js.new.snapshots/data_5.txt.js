w = x = y = z = 0;
i = require("fs")["readFileSync"]("/dev/stdin", "utf8")["split"](/\s|,/);
c = j = -1;
for (; c = i[j += 2]; n = "\n") {
  if (c == "A") {
    w++;
  } else if (c == "B") {
    x++;
  } else if (c == "O") {
    z++;
  } else {
    y++;
  }
}
console["log"](w + n + x + n + y + n + z);
