m = ("" + require("fs")["readFileSync"](0)).split`
`;
n = m[a = 0];
s = m[1];
for (b = 1 << n; b--;) {
  u = 0;
  for (i = n; i--;) {
    u = b & 1 << i ? s[i] + u : u + s[i];
  }
  m[u] = -~m[u];
}
for (b = 1 << n; b--;) {
  u = 0;
  for (i = n; i--;) {
    u = b & 1 << i ? s[n * 2 + ~i] + u : u + s[n * 2 + ~i];
  }
  a += ~~m[u];
}
console.log(a);
