import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 96,
  height: 52,
  padding: 4,
  '& .MuiSwitch-switchBase': {
    margin: 8,
    padding: 0,
    top: '2px',
    transform: 'translateX(10px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(39px)',
      '& .MuiSwitch-thumb:before': {
        content: '"T2"',
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#F6EFFF',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#9744F7',
    width: 32,
    height: 32,
    '&:before': {
      content: "'T1'",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: '8px',
      top: '7px',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#F6EFFF',
    borderRadius: 1000,
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 16,
      height: 16,
      color: '#9744F7;',
    },
    '&:before': {
      content: '"T1"',
      left: 20,
    },
    '&:after': {
      content: '"T2"',
      right: 20,
    },
  },
}));

export default function CustomizedSwitches() {
  return (
    <FormGroup>
      <FormControlLabel
        control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
        label=""
      />
    </FormGroup>
  );
}
