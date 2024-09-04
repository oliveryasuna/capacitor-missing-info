# Year Month Picker Plugin

It is 2024, but Safari on iOS still does
[not support](https://caniuse.com/input-datetime) the `min` and `max` attributes
on the `input[type="month"]` element.
This project provides a custom picker for year and month selection on iOS.

<img src="https://raw.githubusercontent.com/oliveryasuna/capacitor-missing-info/main/_assets/year-month-picker-demo-ios.gif" alt="Year Month Picker Demo on iOS" width="250"/>

## Installation

```shell
npm install @oliveryasuna/cmi-year-month-picker-react
npm install @oliveryasuna/cmi-year-month-picker-plugin
npx cap sync
```

## Example

```tsx
import {YearMonthPicker} from '@oliveryasuna/cmi-year-month-picker-react';

const MyComponent = (): React.ReactNode => {
  const [value, setValue] = useState<string>();

  const handleChange = useCallback(
      ((event: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(event.target.value);
      }),
      []
  );

  return (
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
        <p>Click on the input.</p>
        <YearMonthPicker min="2024-09" max="2024-12" style={{width: '100px', height: '25px'}} onChange={handleChange}/>
        <p>Value: {value}</p>
      </div>
  );
};
```

## Components

### YearMonthPicker

A React component for selecting a year and month in Capacitor on iOS.

On iOS, it will use the custom picker provided by the plugin.
On other platforms, it will use the native `input[type="month"]` element.

| Property                          | Type                                                                                                                        | Description                                             | Since |
|-----------------------------------|-----------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|-------|
| **`defaultValue`**                | <code>string \| undefined</code>                                                                                            | The initial value, in the format `yyyy-MM`              | 1.0.0 |
| **`value`**                       | <code>string \| undefined</code>                                                                                            | The value, in the format `yyyy-MM`                      | 1.0.0 |
| **`min`**                         | <code>string \| undefined</code>                                                                                            | The minimum value, in the format `yyyy-MM`              | 1.0.0 |
| **`max`**                         | <code>string \| undefined</code>                                                                                            | The maximum value, in the format `yyyy-MM`              | 1.0.0 |
| **`nativeTitle`**                 | <code>string</code>                                                                                                         | The title of the picker container.                      | 1.0.0 |
| **`nativePickerStyle`**           | <code>'inline' \| 'wheels'</code>                                                                                           | The style of the picker.                                | 1.0.0 |
| **`nativeDoneButtonLabel`**       | <code>string</code>                                                                                                         | The label of the done button.                           | 1.0.0 |
| **`nativeCancelButtonLabel`**     | <code>string</code>                                                                                                         | The label of the cancel button.                         | 1.0.0 |
| **`nativeTheme`**                 | <code>'light' \| 'dark'</code>                                                                                              | The theme color.                                        | 1.0.0 |
| **`nativeForceTheme`**            | <code>boolean</code>                                                                                                        | Force the specified theme, overriding the system theme. | 1.0.0 |
| **`nativeTitleFontColor`**        | <code>`#${string}`</code>                                                                                                   | The title font color.                                   | 1.0.0 |
| **`nativeTitleBackgroundColor`**  | <code>`#${string}`</code>                                                                                                   | The title background color.                             | 1.0.0 |
| **`nativeFontColor`**             | <code>`#${string}`</code>                                                                                                   | The font color.                                         | 1.0.0 |
| **`nativeBackgroundColor`**       | <code>`#${string}`</code>                                                                                                   | The background color.                                   | 1.0.0 |
| **`nativeButtonFontColor`**       | <code>`#${string}`</code>                                                                                                   | The button font color.                                  | 1.0.0 |
| **`nativeButtonBackgroundColor`** | <code>`#${string}`</code>                                                                                                   | The button background color.                            | 1.0.0 |
| Other                             | <code>Omit<React.InputHTMLAttributes<HTMLInputElement>, ((keyof YearMonthPickerPropsBase) \| 'type' \| 'inputMode')></code> |                                                         | 1.0.0 |
