function Main(input) {
  input = input["split"]("\n");
  const n = +input[0];
  if (n <= 2) {
    console["log"](1);
    return;
  }
  const xy = input["slice"](1).map(s => s["split"](" ").map(n => +n));
  const map = {};
  xy["forEach"](a => {
    xy["forEach"](b => {
      if (a === b) {
        return;
      }
      const vec = [b[0] - a[0], b[1] - a[1]];
      const m = vec["join"]("_");
      map[m] = map[m] == null ? 1 : map[m] + 1;
    });
  });
  const res = Object["keys"](map)["reduce"]((r, xystr) => {
    const count = map[xystr];
    if (count > r[0]) {
      return [count, xystr];
    } else {
      return [r[0], r[1]];
    }
  }, [0, ""]);
  console["log"](1 + (n - 1) - res[0]);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
