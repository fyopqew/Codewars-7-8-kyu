function squareDigits(num) {
    return Number(
      String(num).split("").map(digit => digit * digit).join(""));
  }