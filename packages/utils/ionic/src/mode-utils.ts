/**
 * Check if the application is running in iOS mode.
 *
 * @returns `true` if the application is running in iOS mode.
 */
const isIosMode = ((): boolean => document.documentElement.classList.contains('ios'));

/**
 * Check if the application is running in Material Design mode.
 *
 * @returns `true` if the application is running in Material Design mode.
 */
const isMdMode = ((): boolean => document.documentElement.classList.contains('md'));

export {
  isIosMode,
  isMdMode
};
