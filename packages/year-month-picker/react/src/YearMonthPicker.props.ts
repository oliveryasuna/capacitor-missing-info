import type React from 'react';

interface YearMonthPickerPropsBase {
  // `input` props
  //--------------------------------------------------

  /**
   * The default value, in the format `YYYY-MM`.
   *
   * @since 1.0.0
   */
  defaultValue?: (string | undefined);

  /**
   * The value, in the format `YYYY-MM`.
   *
   * @since 1.0.0
   */
  value?: (string | undefined);

  /**
   * The minimum value, in the format `YYYY-MM`.
   *
   * @since 1.0.0
   */
  min?: (string | undefined);
  /**
   * The maximum value, in the format `YYYY-MM`.
   *
   * @since 1.0.0
   */
  max?: (string | undefined);

  // Other options
  //--------------------------------------------------

  /**
   * The theme color.
   *
   * @since 1.0.0
   */
  nativeTheme?: ('light' | 'dark' | undefined);
  /**
   * The title tof the picker container.
   *
   * @since 1.0.0
   */
  nativeTitle?: (string | undefined);
  /**
   * The style of the picker.
   *
   * @since 1.0.0
   */
  nativePickerStyle?: ('inline' | 'wheels' | undefined);
  /**
   * The label of the done button.
   *
   * @since 1.0.0
   */
  nativeDoneButtonLabel?: (string | undefined);
  /**
   * The label of the cancel button.
   *
   * @since 1.0.0
   */
  nativeCancelButtonLabel?: (string | undefined);
}

interface YearMonthPickerProps extends YearMonthPickerPropsBase, Omit<React.InputHTMLAttributes<HTMLInputElement>, ((keyof YearMonthPickerPropsBase) | 'type' | 'inputMode')> {
}

export type {
  YearMonthPickerPropsBase,
  YearMonthPickerProps
};
