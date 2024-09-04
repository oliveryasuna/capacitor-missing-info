/// <reference types="@capacitor/cli" />

declare module '@capacitor/cli' {
  export interface PluginsConfig {
    YearMonthPicker?: {
      // UI
      //--------------------------------------------------

      /**
       * The title of the picker container.
       *
       * @default 'Select a date'
       * @since 1.0.0
       */
      title?: string;

      /**
       * The style of the picker.
       *
       * @default 'wheels'
       * @since 1.0.0
       */
      pickerStyle?: ('inline' | 'wheels');

      /**
       * The label of the done button.
       *
       * @default 'Done'
       * @since 1.0.0
       */
      doneButtonLabel?: string;
      /**
       * The label of the cancel button.
       *
       * @default 'Cancel'
       * @since 1.0.0
       */
      cancelButtonLabel?: string;

      /**
       * The theme color.
       *
       * @default 'light'
       * @since 1.0.0
       */
      theme?: ('light' | 'dark');
      /**
       * Force the specified theme color, overriding the system theme.
       *
       * @default false
       * @since 1.0.0
       */
      forceTheme?: boolean;

      /**
       * The title font color.
       *
       * @since 1.0.0
       */
      titleFontColor?: `#${string}`;
      /**
       * The title background color.
       *
       * @since 1.0.0
       */
      titleBackgroundColor?: `#${string}`;
      /**
       * The font color.
       *
       * @since 1.0.0
       */
      fontColor?: `#${string}`;
      /**
       * The background color.
       *
       * @since 1.0.0
       */
      backgroundColor?: `#${string}`;
      /**
       * The button font color.
       *
       * @since 1.0.0
       */
      buttonFontColor?: `#${string}`;
      /**
       * The button background color.
       *
       * @since 1.0.0
       */
      buttonBackgroundColor?: `#${string}`;
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

  /**
   * The theme color.
   */
  theme?: ('light' | 'dark');
  /**
   * Force the specified theme color, overriding the system theme.
   *
   * @default false
   * @since 1.0.0
   */
  forceTheme?: boolean;

  /**
   * The title font color.
   *
   * @since 1.0.0
   */
  titleFontColor?: `#${string}`;
  /**
   * The title background color.
   *
   * @since 1.0.0
   */
  titleBackgroundColor?: `#${string}`;
  /**
   * The font color.
   *
   * @since 1.0.0
   */
  fontColor?: `#${string}`;
  /**
   * The background color.
   *
   * @since 1.0.0
   */
  backgroundColor?: `#${string}`;
  /**
   * The button font color.
   *
   * @since 1.0.0
   */
  buttonFontColor?: `#${string}`;
  /**
   * The button background color.
   *
   * @since 1.0.0
   */
  buttonBackgroundColor?: `#${string}`;
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
