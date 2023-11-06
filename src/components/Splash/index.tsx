import { useEffect, useState } from 'react';
import * as Styled from './styled';
import { SPLASH_TIME } from '@/constants';
import SplashIcon from '@/resources/icons/splash.svg?react';

type Props = {
  progress: number;
};

function Splash(props: Props) {
  const { progress } = props;
  const [show, setShow] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, SPLASH_TIME + 500);
  }, []);

  return (
    <Styled.Container show={show}>
      <Styled.Splash>
        <Styled.Logo>
          <SplashIcon width={192} height={192} />
        </Styled.Logo>
        <Styled.Title>혼잡해</Styled.Title>
      </Styled.Splash>
      <Styled.Bar>
        <Styled.Track />
        <Styled.Thumb progress={progress}/>
      </Styled.Bar>
    </Styled.Container>
  );
}

export default Splash;
