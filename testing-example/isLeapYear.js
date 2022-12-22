function isLeapYear(year) {
  if (year === undefined) {
    throw new Error('Year must exist');
  }

  if (!Number.isInteger(year)) {
    throw new Error('Year must be integer');
  }

  const days = new Date(year, 2, 0).getDate();

  return days === 29;
}

module.exports = isLeapYear;
