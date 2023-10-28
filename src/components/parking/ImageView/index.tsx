import { ImageViewWrapper } from './styled';
import {
  AIRPORT_CODE,
  AirportCodeType,
  TERMINAL,
  TerminalType,
} from '@/constants';
import CheongjuParking from '@/resources/images/CheongjuParking.svg?react';
import DaeguParking from '@/resources/images/DaeguParking.svg?react';
import GimhaeParking from '@/resources/images/GimhaeParking.svg?react';
import GimpoParking from '@/resources/images/GimpoParking.svg?react';
import IncheonParking1 from '@/resources/images/IncheonParking1.svg?react';
import IncheonParking2 from '@/resources/images/IncheonParking2.svg?react';
import JejuParking from '@/resources/images/JejuParking.svg?react';

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
