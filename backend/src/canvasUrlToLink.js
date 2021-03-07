/**
 * Takes the URL canvas provides for an event and converts
 * it to a usable link to the assignment on webcourses
 * @param {String} link
 * @param {Boolean} isZoom
 */
function canvasUrlToLink(link, isZoom) {
  // We want to replace the calendar url with url parts that
  // will create valid links to events and assignments.
  const firstLinkString = "https://webcourses.ucf.edu/courses/";
  const secondLinkString = "/assignments/";
  const zoomSecondLinkString = "/calendar_events/";

  // Splits the URL into sections.
  const linkArr = link.split("_");

  // The course number occurs right before a "&" in the URL.
  const courseNum = linkArr[2].split("&")[0];

  // The assignment number is the last section in the URL
  const assignmentNum = linkArr[linkArr.length - 1];

  // Building the URL
  let url = firstLinkString + courseNum;

  if (isZoom) {
    url += zoomSecondLinkString;
  } else {
    url += secondLinkString;
  }

  return url + assignmentNum;
}

module.exports = { canvasUrlToLink };
