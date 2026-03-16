'use strict';

var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var cin = input["split"](/ |\n/);
var cid = 0;
function next(a) {
  if (a) {
    return cin[cid++];
  } else {
    return +cin[cid++];
  }
}
function nexts(n, a) {
  if (a) {
    return cin["slice"](cid, cid += n);
  } else {
    return cin["slice"](cid, cid += n)["map"](a => +a);
  }
}
function nextm(h, w, a) {
  var r = [];
  var i = 0;
  if (a) {
    for (; i < h; i++) {
      r["push"](cin["slice"](cid, cid += w));
    }
  } else {
    for (; i < h; i++) {
      r.push(cin.slice(cid, cid += w)["map"](a => +a));
    }
  }
  return r;
}
function xArray(v) {
  var a = arguments;
  var l = a.length;
  var r = "Array(a[" + --l + "]).fill().map(x=>{return " + v + ";})";
  while (--l) {
    r = "Array(a[" + l + "]).fill().map(x=>" + r + ")";
  }
  return eval(r);
}
var mod = 1000000007;
function mul() {
  var a = arguments;
  var r = a[0];
  for (var i = a["length"]; --i;) {
    r = ((r >> 16) * a[i] % mod * 65536 + (r & 65535) * a[i]) % mod;
  }
  return r;
}
var myOut = main();
if (myOut !== undefined) {
  console["log"](myOut);
}
function main() {
  var n = next();
  var x = nexts(n);
  var ans = 1;
  var id = 1;
  var rem = 0;
  for (var i = 0; i < n; i++) {
    rem++;
    ans = mul(ans, rem);
    if (x[i] < id) {
      rem--;
    } else {
      id += 2;
    }
  }
  return ans;
}
