function sortMaker([arr1, arr2]) {
  if (arr1 > 0 && arr1 > arr2 && arr2 > 0 && arr2 < arr1) {
    return [arr1, arr2];
  } else if (arr1 > 0 && arr1 < arr2 && arr2 > 0 && arr2 > arr1) {
    return [arr2, arr1];
  } else if (arr1 === arr2) {
    return "equal";
  } else if (arr1 < 0 || arr2 < 0) {
    return "Invalid Input";
  }
}
