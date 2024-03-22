// components/CustomToggleSwitch.js

import React from 'react';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import { styled } from '@mui/system';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-grouped': {
    border: 0,
    '&.Mui-disabled': {
      border: 0,
    },
    '&:not(:first-of-type)': {
      borderRadius: theme.shape.borderRadius,
    },
    '&:first-of-type': {
      borderRadius: theme.shape.borderRadius,
    },
  },
}));

const CustomToggleSwitch = ({ view, setView }) => {
  const handleAlignment = (event, newView) => {
    if (newView !== null) {
      setView(newView);
    }
  };

  return (
    <StyledToggleButtonGroup
      size="small"
      value={view}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="daily" aria-label="left aligned">
        Daily
      </ToggleButton>
      <ToggleButton value="weekly" aria-label="centered">
        Weekly
      </ToggleButton>
    </StyledToggleButtonGroup>
  );
};

export default CustomToggleSwitch;
