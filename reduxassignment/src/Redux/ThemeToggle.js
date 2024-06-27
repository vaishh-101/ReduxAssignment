import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormControlLabel, Switch } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { toggleTheme } from './theme';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <FormControlLabel
      control={
        <Switch
          checked={darkMode}
          onChange={() => dispatch(toggleTheme())}
          name="themeToggle"
          color="default"
          icon={<Brightness7 />}
          checkedIcon={<Brightness4 />}
        />
      }
      label="Mode"
    />
  );
};

export default ThemeToggle;
