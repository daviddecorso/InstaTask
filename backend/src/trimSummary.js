/**
 * Removes extra course code from title.
 * @param {String} summary
 */
function trimSummary(summary) {
  // The class code is contained in brackets at the end of the summary string.
  summaryArr = summary.split("[");

  // Removes the part of the string after the last "[".
  summaryArr.pop();

  // Re-joins the array.
  return summaryArr.join("");
}

module.exports = { trimSummary };
