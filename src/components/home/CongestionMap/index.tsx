import { AIRPORT_CODE, AirportCodeType, CongestionLvlType, TerminalType } from '@/constants';
import Cheongju from './Cheongju';
import Daegu from './Daegu';
import Gimhae from './Gimhae';
import Gimpo from './Gimpo';
import Incheon from './Incheon';
import Jeju from './Jeju';

type Props = {
    airportCode: AirportCodeType;
    terminalCode: TerminalType;
    congestionArray: CongestionLvlType[];
};

function CongestionMap(props: Props) {
  const { airportCode, terminalCode, congestionArray } = props;

  switch (airportCode) {
    case AIRPORT_CODE.CHEONGJU:
      return <Cheongju congestions={congestionArray} />;
    case AIRPORT_CODE.DAEGU:
      return <Daegu congestions={congestionArray} />;
    case AIRPORT_CODE.GIMHAE:
      return <Gimhae congestions={congestionArray} />;
    case AIRPORT_CODE.GIMPO:
      return <Gimpo congestions={congestionArray} />;
    case AIRPORT_CODE.JEJU:
      return <Jeju congestions={congestionArray} />;
    default:
      return <Incheon congestions={congestionArray} terminal={terminalCode} />;
  }
}

export default CongestionMap;
