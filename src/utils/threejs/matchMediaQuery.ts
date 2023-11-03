/**
 * This function is used to check if the media query matches the current window size.
 * To use this function, pass in a media query string, and two callback functions.
 * The first callback function will be called if the media query matches the current window size.
 * The second callback function will be called if the media query does not match the current window size.
 *
 * @param query
 * @param onMatchCallback
 * @param onMismatchCallback
 */
const matchMediaQuery = (
  query: string,
  onMatchCallback: () => void,
  onMismatchCallback: () => void,
) => {
  const mediaQuery = window.matchMedia(query);

  mediaQuery.onchange = (e) => {
    switch (e.matches) {
      case true:
        onMatchCallback();
        break;
      case false:
        onMismatchCallback();
        break;
      default:
        console.error("Unexpected value for e.matches:", e.matches);
        break;
    }
  };
};

export default matchMediaQuery;
