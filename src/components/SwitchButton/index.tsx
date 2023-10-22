import React from 'react';
import * as Styled from './styled';

type SwitchProps = {
    id:string,
    checked: boolean;
    onChange : (event: React.ChangeEvent<HTMLInputElement>) => void;
  }
function SwitchButton({ id, onChange, checked }:SwitchProps) {
  return (
    <Styled.StyledSwitch id={id} onChange={onChange} checked={checked} />
  );
}

export default SwitchButton;
