import React from 'react';
import * as Styled from './styled';

type Props = {
  color: string;
  title: string;
};

function Congestion({ color, title }: Props) {
  return (
    <Styled.Container>
      <Styled.ColorBox color={color} title={title} />
      <span>{title}</span>
    </Styled.Container>
  );
}

export default Congestion;
