/// <reference types="@capacitor/cli" />

declare module '@capacitor/cli' {
  export interface PluginsConfig {
    YearMonthPicker?: {
      // UI
      //--------------------------------------------------

      /**
       * The theme color.
       *
       * @default 'light'
       */
      theme?: ('light' | 'dark');

      /**
       * The title of the picker container.
       *
       * @default 'Select a date'
       */
      title?: string;

      /**
       * The style of the picker.
       *
       * @default 'wheels'
       */
      pickerStyle?: ('inline' | 'wheels');

      /**
       * The label of the done button.
       *
       * @default 'Done'
       */
      doneButtonLabel?: string;
      /**
       * The label of the cancel button.
       *
       * @default 'Cancel'
       */
      cancelButtonLabel?: string;
    };
  }
}

interface ShowYearMonthPickerOptions {
  // Data
  //--------------------------------------------------

  /**
   * The initial value, in the format `yyyy-MM`.
   */
  value?: string;

  /**
   * The minimum value, in the format `yyyy-MM`.
   */
  min?: string;
  /**
   * The maximum value, in the format `yyyy-MM`.
   */
  max?: string;

  // UI
  //--------------------------------------------------

  /**
   * The theme color.
   *
   * @default 'light'
   */
  theme?: ('light' | 'dark');

  /**
   * The title of the picker container.
   *
   * @default 'Select a date'
   */
  title?: string;

  /**
   * The style of the picker.
   *
   * @default 'wheels'
   */
  pickerStyle?: ('inline' | 'wheels');

  /**
   * The label of the done button.
   *
   * @default 'Done'
   */
  doneButtonLabel?: string;
  /**
   * The label of the cancel button.
   *
   * @default 'Cancel'
   */
  cancelButtonLabel?: string;
}

interface ShowYearMonthPickerResult {
  /**
   * The selected value, in the format `yyyy-MM`, or `null` if cancelled.
   */
  value: (string | null);
}

interface YearMonthPickerPlugin {
  /**
   * Show a year-month picker
   *
   * @param options The options.
   * @returns The result.
   *
   * @since 1.0.0
   */
  showYearMonthPicker(options?: ShowYearMonthPickerOptions): Promise<ShowYearMonthPickerResult>;
}

export type {
  ShowYearMonthPickerOptions,
  ShowYearMonthPickerResult,
  YearMonthPickerPlugin
};
