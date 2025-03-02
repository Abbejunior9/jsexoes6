function isLeapYear(year) {
  // Vérifier si l'année est divisible par 4
  if (year % 4 === 0) {
    // Si divisible par 4, vérifier si elle est divisible par 100
    if (year % 100 === 0) {
      // Si divisible par 100, vérifier si elle est aussi divisible par 400
      if (year % 400 === 0) {
        return true; // Année bissextile
      } else {
        return false; // Non bissextile
      }
    } else {
      return true; // Année bissextile
    }
  } else {
    return false; // Non bissextile
  }
}

console.log(isLeapYear(2020)); // true
console.log(isLeapYear(2021)); // false
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(2000)); // true
