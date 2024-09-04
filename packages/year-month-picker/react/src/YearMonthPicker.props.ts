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

  /**
   * The theme color.
   *
   * @since 1.0.0
   */
  nativeTheme?: ('light' | 'dark' | undefined);
  /**
   * Force the specified theme color, overriding the system theme.
   *
   * @default false
   * @since 1.0.0
   */
  nativeForceTheme?: boolean;

  /**
   * The title font color.
   *
   * @since 1.0.0
   */
  nativeTitleFontColor?: `#${string}`;
  /**
   * The title background color.
   *
   * @since 1.0.0
   */
  nativeTitleBackgroundColor?: `#${string}`;
  /**
   * The font color.
   *
   * @since 1.0.0
   */
  nativeFontColor?: `#${string}`;
  /**
   * The background color.
   *
   * @since 1.0.0
   */
  nativeBackgroundColor?: `#${string}`;
  /**
   * The button font color.
   *
   * @since 1.0.0
   */
  nativeButtonFontColor?: `#${string}`;
  /**
   * The button background color.
   *
   * @since 1.0.0
   */
  nativeButtonBackgroundColor?: `#${string}`;
}

interface YearMonthPickerProps extends YearMonthPickerPropsBase, Omit<React.InputHTMLAttributes<HTMLInputElement>, ((keyof YearMonthPickerPropsBase) | 'type' | 'inputMode')> {
}

export type {
  YearMonthPickerPropsBase,
  YearMonthPickerProps
};
