/**
 * Gets the root element of the Ionic app.
 *
 * This is useful for custom overlays, modals, and other components that need to
 * be appended to the root of the Ionic app.
 *
 * @returns The root element of the Ionic app.
 */
const getAppRoot = ((): HTMLElement => (document.querySelector('ion-app') ?? document.body));

export {
  getAppRoot
};
