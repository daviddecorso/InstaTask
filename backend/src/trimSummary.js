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
  let joinArr = summaryArr.join("");

  // Remove trailing space if present
  if (joinArr.charAt(joinArr.length - 1) == " ") {
    const returnArr = joinArr.slice(0, -1);
    joinArr = returnArr;
  }

  return joinArr;
}

module.exports = { trimSummary };
