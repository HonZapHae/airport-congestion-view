import React from 'react';
import { styled, Switch } from '@mui/material';

const StyledSwitch = styled(Switch)(() => ({
  padding: 8,
  '& .MuiSwitch-switchBase': {
    '&.Mui-checked': {
      '& .MuiSwitch-thumb:before': {
        content: '"T2"',
        right: 12,
      },
    },
  },

  '& .MuiSwitch-track': {
    backgroundColor: '#F6EFFF !important',
    border: '1px solid',
    borderColor: '#F4EBFF',
    borderRadius: 22 / 2,

    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      top: '45%',
      transform: 'translateY(-50%)',
      width: 16,
      height: 16,

    },
    '&:before': {
      content: '"T1"',
      left: 12,
    },
    '&:after': {
      content: '"T2"',
      right: 12,
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: '#A766F2',
    '&:before': {
      left: 12,
      color: '#fff',
      content: '"T1"',
      width: 16,
      height: 16,
      margin: 2,
    },

  },

}));

type SwitchProps = {
  id:string,
  checked: boolean;
  onChange : (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function SwitchButton({ id, onChange, checked }:SwitchProps) {
  return (
    <StyledSwitch id={id} onChange={onChange} checked={checked} />
  );
}
