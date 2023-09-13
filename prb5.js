function canPay(changeArray, totalDue) {
  if (changeArray.length <= 0) {
    return "please input valid element";
  }

  if (!Array.isArray(changeArray)) return;
  let totalNumber = 0;
  for (let i = 0, l = changeArray.length; i < l; i++)
    totalNumber += changeArray[i];

  if (totalNumber >= totalDue) {
    return true;
  } else {
    return false;
  }
}
