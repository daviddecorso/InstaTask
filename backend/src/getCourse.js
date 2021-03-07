/**
 * Returns the course code of a Canvas event.
 * @param {String} summary
 */
function getCourse(summary) {
  // The class code is contained in brackets at the end of the summary string.
  summaryArr = summary.split("[");
  classString = summaryArr[summaryArr.length - 1];

  // Regex that matches to UCF course codes
  regexArr = classString.match(/[A-Z][A-Z][A-Z]\d\d\d\d[A-Z]?/g);

  if (regexArr != null) {
    return regexArr[0];
  } else {
    return "No class";
  }
}

module.exports = { getCourse };
