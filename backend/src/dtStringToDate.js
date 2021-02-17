import { parse } from "date-fns";

/**
 * Converts dt (date-time) strings from ical files to date objects
 * @param {String} dtString
 */
function dtStringToDate(dtString) {
  // Uses a regex to replace the letters from the dt strings
  dtString = dtString.replace(/[^0-9]/g, "");

  /*
  Returns a date object representing the dtstring. The second argument
  pertains to the formatting of the dtstring, which is in the format
  year, month, day, hour, minute, second with no delimiters
  */
  return parse(dtString, "yyyyMMddHHmmss", new Date());
}

export default { dtStringToDate };
