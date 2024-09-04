import React, {useCallback, useState} from 'react';
import './assets/styles/styles.scss';
import {YearMonthPicker} from '@oliveryasuna/cmi-year-month-picker-react';

const App = ((): React.ReactNode => {
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
});

export {
  App
};
