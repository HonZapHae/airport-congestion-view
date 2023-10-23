import React from 'react';
import * as Styled from './styled2';

type SwitchProps = {
    checked: boolean;
    onChange : (event: React.ChangeEvent<HTMLInputElement>) => void;
  }
function SwitchButton({ onChange, checked }:SwitchProps) {
  return (
    <Styled.StyledSwitch onChange={onChange} checked={checked} />
  );
}

export default SwitchButton;
