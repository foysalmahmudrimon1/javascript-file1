function matchFinder(road1) {
  if (typeof road1 !== "string") {
    return "Please put string type input to all strings ";
  } else if (road1 == " The way of my GF House") {
    return "right";
  } else if (road1 == "The way of My friend's GF house") return "left";
  else {
    return "Loss Project";
  }
}
