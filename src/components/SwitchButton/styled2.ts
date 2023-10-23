import { styled, Switch } from '@mui/material';

export const StyledSwitch = styled(Switch)(() => ({
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
        // right: 12,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#F6EFFF',
      },
    },
  },

  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#F6EFFF',
    borderRadius: 1000,

    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      top: '46%',
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
  '& .MuiSwitch-thumb': {
    backgroundColor: '#9744F7',
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
}));
