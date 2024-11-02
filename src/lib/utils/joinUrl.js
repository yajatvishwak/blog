function joinUrls(baseUrl, relativeUrl) {
  if (!baseUrl.endsWith("/")) {
    baseUrl += "/";
  }
  if (relativeUrl.startsWith("/")) {
    relativeUrl = relativeUrl.substring(1);
  }
  return baseUrl + relativeUrl;
}
export { joinUrls };
