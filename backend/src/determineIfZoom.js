function determineIfZoom(location) {
  if (location == null) {
    return false;
  }
  return location.includes("Zoom");
}

module.exports = { determineIfZoom };
