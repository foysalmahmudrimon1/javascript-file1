function findAddress(obj) {
  if (typeof obj !== "object") {
    return "Please provide a valid object";
  } else {
    const street = obj.street || "__";

    const house = obj.house || "__";
    const society = obj.society || "__";

    const result = street + "," + house + "," + society;
    return result;
  }
}
