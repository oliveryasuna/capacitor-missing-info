import {registerPlugin} from '@capacitor/core';
import type {YearMonthPickerPlugin} from './definitions';
import type {YearMonthPickerNative} from './native';

const YearMonthPicker = registerPlugin<YearMonthPickerPlugin>(
    'YearMonthPicker',
    {
      ios: (async(): Promise<YearMonthPickerNative> =>
          import('./native')
              .then((module): YearMonthPickerNative => (new module.YearMonthPickerNative(YearMonthPicker as YearMonthPickerNative))))
    }
);

export * from './definitions';
export {
  YearMonthPicker
};
