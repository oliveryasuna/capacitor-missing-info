import {Capacitor} from '@capacitor/core';

/**
 * Alias for `Capacitor.isNativePlatform`.
 *
 * @returns `true` if the platform is native, otherwise `false`.
 */
const isNative = Capacitor.isNativePlatform;

/**
 * Check if the platform is Android.
 *
 * @returns `true` if the platform is Android, otherwise `false`.
 */
const isAndroid = ((): boolean => (Capacitor.getPlatform() === 'android'));
/**
 * Check if the platform is iOS.
 *
 * @returns `true` if the platform is iOS, otherwise `false`.
 */
const isIos = ((): boolean => (Capacitor.getPlatform() === 'ios'));
/**
 * Check if the platform is web.
 *
 * @returns `true` if the platform is web, otherwise `false`.
 */
const isWeb = ((): boolean => (Capacitor.getPlatform() === 'web'));

export {
  isNative,
  isAndroid,
  isIos,
  isWeb
};
