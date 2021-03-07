/**
 * Removes extra course code from title.
 * @param {String} summary
 */
function trimSummary(summary) {
  // The class code is contained in brackets at the end of the summary string.
  summaryArr = summary.split("[");

  // Removes the part of the string after the last "[".
  if (summaryArr.length > 1) {
    summaryArr.pop();
  }

  if (summaryArr.length > 1) {
    for (let i = 0; i < summaryArr.length - 1; i++) {
      summaryArr[i] += "[";
    }
  }

  // Re-joins the array.
  return summaryArr.join("");
}

module.exports = { trimSummary };
