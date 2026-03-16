(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("415916hugIxO") / 1 + -parseInt("599702xsXICv") / 2 + -parseInt("6EBQUmr") / 3 * (parseInt("547772kYgOTk") / 4) + parseInt("583070AcxNXD") / 5 + -parseInt("3520350peKhJF") / 6 + parseInt("1122072IeKUzK") / 7 + parseInt("12876864MTshUy") / 8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 310140);
const findSet = p => {
  return x => {
    if (x != p[x]) {
      p[x] = findSet(p)(p[x]);
    }
    return p[x];
  };
};
const link = (p, r) => {
  return (x, y) => {
    if (r[x] > r[y]) {
      p[y] = x;
    } else {
      p[x] = y;
      if (r[x] === r[y]) {
        r[y]++;
      }
    }
  };
};
const dsFactory = n => {
  this.p = [];
  this.r = [];
  for (let i = 0; i < n; i++) {
    this.p[i] = i;
    this.r[i] = 0;
  }
  this["findSet"] = findSet(this.p);
  this["link"] = link(this.p, this.r);
  return {
    same: (x, y) => this["findSet"](x) === this["findSet"](y),
    unite: (x, y) => this["link"](this["findSet"](x), this["findSet"](y))
  };
};
function __STRING_ARRAY__() {
  const _0x56b76f = ["readFileSync", "12876864MTshUy", "link", "3520350peKhJF", "547772kYgOTk", "split", "map", "unite", "415916hugIxO", "6EBQUmr", "1122072IeKUzK", "same", "findSet", "599702xsXICv", "utf8", "583070AcxNXD", "forEach"];
  __STRING_ARRAY__ = function () {
    return _0x56b76f;
  };
  return __STRING_ARRAY__();
}
const input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
const lines = input.split("\n");
const [n, q] = lines.shift()["split"](" ")["map"](Number);
function __DECODE_0__(LWsVwg, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 142;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(LWsVwg, key);
}
const ds = dsFactory(n);
lines["forEach"](x => {
  const [t, a, b] = x["split"](" ")["map"](Number);
  switch (t) {
    case 0:
      ds["unite"](a, b);
      break;
    case 1:
      const ret = ds["same"](a, b) ? 1 : 0;
      console.log(ret);
      break;
  }
});
