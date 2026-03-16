function Main(input) {
  lines = input["split"]("\n");
  firstLine = lines[0]["split"](" ");
  N = +firstLine[0];
  X = +firstLine[1];
  secondLine = lines[1]["split"](" ");
  distanceTravelled = 0;
  numBounces = 1;
  for (i = 0; i < N; i++) {
    distanceTravelled += +secondLine[i];
    if (distanceTravelled <= X) {
      numBounces += 1;
    }
  }
  console["log"](numBounces);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
