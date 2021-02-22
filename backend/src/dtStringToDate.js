const { parse } = require("date-fns");

/**
 * Converts dt (date-time) strings from ical files to date objects
 * @param {String} dtString
 */
function dtStringToDate(dtString) {
  // Uses a regex to replace the letters from the dt strings
  dtString = dtString.replace(/[^0-9]/g, "");

  var date = parse(dtString, "yyyyMMddHHmmss", new Date());
  if (isNaN(date)) {
    date = false;
  }

  /*
  Returns a date object representing the dtstring. The second argument
  pertains to the formatting of the dtstring, which is in the format
  year, month, day, hour, minute, second with no delimiters
  */
  return date;
}

module.exports = { dtStringToDate };
