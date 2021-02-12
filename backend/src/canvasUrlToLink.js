/**
 * Takes the URL canvas provides for an event and converts
 * it to a usable link to the assignment on webcourses
 * @param {String} link
 */
function canvasUrlToLink(link) {
  let courseNum = "";
  let assignmentNum = "";
  const firstLinkString = "https://webcourses.ucf.edu/courses/";
  const secondLinkString = "/assignments/";

  const linkArr = link.split("_");
  courseNum = linkArr[2].split("&")[0];
  assignmentNum = linkArr[3];

  return firstLinkString + courseNum + secondLinkString + assignmentNum;
}

export default { canvasUrlToLink };
