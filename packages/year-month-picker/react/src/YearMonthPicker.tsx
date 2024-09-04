import type {YearMonthPickerProps} from './YearMonthPicker.props';
import React, {forwardRef, useCallback, useMemo, useState} from 'react';
import {removeProps} from '@oliveryasuna/cmi-utils-react';
import type {ShowYearMonthPickerResult} from '@oliveryasuna/cmi-year-month-picker-plugin';
import {YearMonthPicker as YearMonthPickerPlugin} from '@oliveryasuna/cmi-year-month-picker-plugin';
import {isIos as isIosUtil} from '@oliveryasuna/cmi-utils-capacitor';

const YearMonthPicker = forwardRef((outerProps: YearMonthPickerProps, outerRef: React.ForwardedRef<HTMLInputElement>): React.ReactNode => {
  // Prevents mistakes in JS.
  const props: YearMonthPickerProps = removeProps(outerProps, (['type', 'inputMode'] as any));
  const {onFocus, ...rootProps} = props;

  const [node, setNode] = useState<HTMLInputElement | null>(null);

  const isIos = useMemo<boolean>(((): boolean => isIosUtil()), []);

  const ref = useCallback(
      ((instance: (HTMLInputElement | null)): void => {
        setNode(instance);

        if(outerRef !== null) {
          if(typeof outerRef === 'function') {
            outerRef(instance);
          } else {
            outerRef.current = instance;
          }
        }
      }),
      [outerRef]
  );

  // https://github.com/cypress-io/cypress/commit/4a56ca83b3b6e19ec57d10a8160f54f513e8f8ec#diff-53b7d619fa4613db14158a57ca69e8170a6f5e3d2271c61e762c801bff15552d
  const valueProperty = useMemo<PropertyDescriptor | undefined>(() => ((node !== null) ? Object.getOwnPropertyDescriptor(node.constructor.prototype, 'value') : undefined), [node]);
  const minProperty = useMemo<PropertyDescriptor | undefined>(() => ((node !== null) ? Object.getOwnPropertyDescriptor(node.constructor.prototype, 'min') : undefined), [node]);
  const maxProperty = useMemo<PropertyDescriptor | undefined>(() => ((node !== null) ? Object.getOwnPropertyDescriptor(node.constructor.prototype, 'max') : undefined), [node]);

  const getValue = useCallback(((): (string | undefined) => ((valueProperty === undefined) ? undefined : valueProperty.get!.call(node!) as string)), [valueProperty]);
  const setValue = useCallback(
      ((value: string): void => {
        if(valueProperty === undefined) {
          return;
        }

        valueProperty.set!.call(node!, value);
      }),
      [valueProperty]
  );

  const getMin = useCallback(((): (string | undefined) => ((minProperty === undefined) ? undefined : minProperty.get!.call(node!) as string)), [minProperty]);
  const getMax = useCallback(((): (string | undefined) => ((maxProperty === undefined) ? undefined : maxProperty.get!.call(node!) as string)), [maxProperty]);

  const handleFocus = useCallback(
      ((event: React.FocusEvent<HTMLInputElement>): void => {
        if(isIos) {
          event.preventDefault();

          const value: (string | undefined) = getValue();
          const min: (string | undefined) = getMin();
          const max: (string | undefined) = getMax();

          void YearMonthPickerPlugin.showYearMonthPicker({
            ...(((value !== undefined) && (value !== '')) && {value: value}),
            ...(((min !== undefined) && (min !== '')) && {min: min}),
            ...(((max !== undefined) && (max !== '')) && {max: max}),
            ...((props.nativeTheme !== undefined) && {theme: props.nativeTheme}),
            ...((props.nativeTitle !== undefined) && {title: props.nativeTitle}),
            ...((props.nativePickerStyle !== undefined) && {pickerStyle: props.nativePickerStyle}),
            ...((props.nativeDoneButtonLabel !== undefined) && {doneButtonLabel: props.nativeDoneButtonLabel}),
            ...((props.nativeCancelButtonLabel !== undefined) && {cancelButtonLabel: props.nativeCancelButtonLabel})
          })
              .then((result: ShowYearMonthPickerResult): void => {
                node!.blur();

                if(result.value === null) {
                  return;
                }

                setValue(result.value);
                node!.dispatchEvent(new Event('input', {bubbles: true}));
              });
        }

        onFocus?.(event);
      }),
      [onFocus, node, isIos, getValue, setValue]
  );

  return (<input ref={ref} {...(isIos ? {type: 'text', inputMode: 'none'} : {type: 'month'})} onFocus={handleFocus} {...rootProps}/>);
});

export {
  YearMonthPicker
};
