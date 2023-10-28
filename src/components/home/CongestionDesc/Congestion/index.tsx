import * as Styled from './styled';

type Props = {
  color: string;
  title: string;
};

function Congestion({ color, title }: Props) {
  return (
    <Styled.Container>
      <Styled.ColorBox color={color} title={title} />
      <Styled.Text>{title}</Styled.Text>
    </Styled.Container>
  );
}

export default Congestion;
