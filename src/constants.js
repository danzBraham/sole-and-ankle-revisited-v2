const BREAKPOINTS = {
  phone: 37.5,
  tablet: 59.375,
  laptop: 81.25,
};

export const QUERIES = {
  phone: `(max-width: ${BREAKPOINTS.phone}rem)`,
  tablet: `(max-width: ${BREAKPOINTS.tablet}rem)`,
  laptop: `(max-width: ${BREAKPOINTS.laptop}rem)`,
};
