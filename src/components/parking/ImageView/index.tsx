import React from 'react';
import { ImageViewWrapper } from './styled';
import {
  AIRPORT_CODE,
  AirportCodeType,
  TERMINAL,
  TerminalType,
} from '../../../constant';
import { ReactComponent as CheongjuParking } from '../../../resources/images/CheongjuParking.svg';
import { ReactComponent as DaeguParking } from '../../../resources/images/DaeguParking.svg';
import { ReactComponent as GimhaeParking } from '../../../resources/images/GimhaeParking.svg';
import { ReactComponent as GimpoParking } from '../../../resources/images/GimpoParking.svg';
import { ReactComponent as IncheonParking1 } from '../../../resources/images/IncheonParking1.svg';
import { ReactComponent as IncheonParking2 } from '../../../resources/images/IncheonParking2.svg';
import { ReactComponent as JejuParking } from '../../../resources/images/JejuParking.svg';

type Props = {
  airportCode: AirportCodeType;
  terminalCode: TerminalType;
};

function ParkingImage(props: Props) {
  const { airportCode, terminalCode } = props;
  switch (airportCode) {
    case AIRPORT_CODE.CHEONGJU:
      return <CheongjuParking />;
    case AIRPORT_CODE.DAEGU:
      return <DaeguParking />;
    case AIRPORT_CODE.GIMHAE:
      return <GimhaeParking />;
    case AIRPORT_CODE.GIMPO:
      return <GimpoParking />;
    case AIRPORT_CODE.JEJU:
      return <JejuParking />;
    default:
      return terminalCode === TERMINAL.T1 ? <IncheonParking1 /> : <IncheonParking2 />;
  }
}

function ImageView(props: Props) {
  const { airportCode, terminalCode } = props;
  return (
    <ImageViewWrapper>
      <ParkingImage airportCode={airportCode} terminalCode={terminalCode} />
    </ImageViewWrapper>
  );
}

export default ImageView;
