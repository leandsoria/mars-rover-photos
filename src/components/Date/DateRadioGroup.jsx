/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';

function DateRadioGroup({ setDateTypeHandler, pullData }) {
  const [dateTypeSelector, setDateTypeSelector] = useState('earth');

  useEffect(() => {
    pullData({ dateTypeSelector });
  }, [dateTypeSelector]);

  const selectDateTypeHandler = (dateType) => {
    setDateTypeSelector(dateType.target.value);
    setDateTypeHandler(dateType.target.value);
  };

  const radioStyle = [
    {
      '.MuiButtonBase-root span': {
        color: '#f8f8f8',
        filter: 'brightness(.75)',
      },
      '.Mui-checked span': {
        color: '#fff',
        filter: 'brightness(1)',
      },
    },
  ];
  return (
    <FormControl
      sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}
    >
      <FormLabel
        id="demo-row-radio-buttons-group-label"
        sx={[
          {
            color: '#FFF',
            fontFamily: 'Nasalization',
          },
          { '&.Mui-focused': { color: '#FFF' } },
        ]}
      >
        <h2>Date Type</h2>
      </FormLabel>
      <div>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          onChange={selectDateTypeHandler}
          defaultValue="earth"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <FormControlLabel
            value="earth"
            control={<Radio />}
            label="Earth Date"
            sx={radioStyle}
          />
          <FormControlLabel
            value="sol"
            control={<Radio />}
            label="Sol Date"
            sx={radioStyle}
          />
        </RadioGroup>
      </div>
    </FormControl>
  );
}

export default DateRadioGroup;
