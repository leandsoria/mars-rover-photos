import { DatePicker } from '@mui/x-date-pickers';
import { useRoverContext } from '../../context/rover-context';
import { useState, useEffect } from 'react';
import { TextField } from '@mui/material';
import { useGetRoverData } from '../../hooks/useGetData';
import dayjs from 'dayjs';
import DateRadioGroup from './DateRadioGroup';

function DateSelector() {
  const [selectedSolDate, setSelectedSolDate] = useState('1000');
  const [dateTypeSelector, setDateTypeSelector] = useState(null);
  const [roverEarthMaxDate, setRoverEarthMaxDate] = useState();
  const { data, isLoading } = useGetRoverData();
  const { earthDateHandler, solDateHandler, setDateTypeHandler } =
    useRoverContext();

  useEffect(() => {
    if (data && !isLoading) {
      setRoverEarthMaxDate(data.rover.max_date);
      earthDateHandler(data.rover.max_date);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isLoading]);

  const earthDateFormatedHandler = (newDate) => {
    const formattedDate = `${newDate.$y}-${newDate.$M + 1}-${newDate.$D}`;
    earthDateHandler(formattedDate);
  };

  const solDateInputHandler = (solDate) => {
    const selectedSolDate = solDate.target.value;
    setSelectedSolDate(selectedSolDate);
    solDateHandler(selectedSolDate);
  };
  const pullDataHandler = (data) => {
    const { dateTypeSelector } = data;
    setDateTypeSelector(dateTypeSelector);
  };

  const dateSelectorStyle = [
    {
      '&': { minWidth: '275px', maxWidth: '275px' },
      'label, label.Mui-focused': {
        color: '#fff',
        fontFamily: 'Nasalization',
        fontSize: '17px',
      },
      'input, input.Mui-focused, fieldset': {
        color: '#fff',
        fontFamily: 'inherit',
        fontSize: '17px',
        borderColor: '#FFF!important',
      },
      svg: {
        color: '#FFF',
      },
      '.MuiPaper-root svg': {
        color: '#000',
      },
      '.Mui-selected': {
        background: '#1a1a1a!important',
      },
      '.MuiPickersDay-root:hover': {
        background: ' rgba(0,0,0,.05)',
      },
      '.MuiPickersCalendarHeader-label': {
        fontFamily: 'inherit',
      },
    },
  ];

  return (
    <div className="flex flex-col justify-start gap-4">
      <DateRadioGroup
        setDateTypeHandler={setDateTypeHandler}
        pullData={pullDataHandler}
      />

      {dateTypeSelector === 'earth' && roverEarthMaxDate && (
        <DatePicker
          label="Select Earth Date"
          defaultValue={dayjs(roverEarthMaxDate)}
          onChange={earthDateFormatedHandler}
          sx={dateSelectorStyle}
        />
      )}
      {dateTypeSelector === 'sol' && (
        <TextField
          id="outlined-number"
          value={selectedSolDate}
          onChange={solDateInputHandler}
          label="Sol Date"
          type="tel"
          sx={dateSelectorStyle}
          InputLabelProps={{
            shrink: true,
          }}
        />
      )}
    </div>
  );
}

export default DateSelector;
