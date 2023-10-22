import React from 'react';
import { AIRPORT_CODE, AirportCodeType, TerminalType } from '../../../constant';
import Cheongju from './Cheongju';
import Daegu from './Daegu';
import Gimhae from './Gimhae';
import Gimpo from './Gimpo';
import Incheon from './Incheon';
import Jeju from './Jeju';

type Props = {
    airportCode: AirportCodeType;
    terminalCode: TerminalType;
};

function CongestionMap(props: Props) {
  const { airportCode, terminalCode } = props;

  switch (airportCode) {
    case AIRPORT_CODE.Cheongju:
      return <Cheongju congestions={[1]} />;
    case AIRPORT_CODE.Daegu:
      return <Daegu congestions={[1, 3, 2, 4]} />;
    case AIRPORT_CODE.Gimhae:
      return <Gimhae congestions={[1, 3, 2, 4]} />;
    case AIRPORT_CODE.GIMPO:
      return <Gimpo congestions={[4]} />;
    case AIRPORT_CODE.JEJU:
      return <Jeju congestions={[1, 3, 2, 4]} />;
    default:
      return <Incheon congestions={[1, 3, 2, 4]} terminal={terminalCode} />;
  }
}

export default CongestionMap;
