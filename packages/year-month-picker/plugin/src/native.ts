import type {ShowYearMonthPickerOptions, ShowYearMonthPickerResult, YearMonthPickerPlugin} from './definitions';

class YearMonthPickerNative implements YearMonthPickerPlugin {

  // Constructor
  //--------------------------------------------------

  public constructor(proxy: YearMonthPickerNative) {
    this._nativeShowYearMonthPicker = proxy._nativeShowYearMonthPicker;
  }

  // Methods
  //--------------------------------------------------

  public async showYearMonthPicker(options?: ShowYearMonthPickerOptions): Promise<ShowYearMonthPickerResult> {
    return this._nativeShowYearMonthPicker(options);
  }

  // @native
  protected async _nativeShowYearMonthPicker(_options?: ShowYearMonthPickerOptions): Promise<ShowYearMonthPickerResult> {
    return Promise.resolve({value: 'value'});
  }

}

export {
  YearMonthPickerNative
};
