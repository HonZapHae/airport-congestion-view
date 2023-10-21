import { SERVICE_KEY } from './constants';

const OpenApiUrls = {
  // eslint-disable-next-line no-irregular-whitespace
  domesticFlightUrl: `https://api.odcloud.kr/api/getAPRTPsgrCongestion_v2/v1/aprtPsgrCongestion​V2?page=1&perPage=10&serviceKey=${SERVICE_KEY}`,
  incheonAirportUrl: `http://apis.data.go.kr/B551177/PassengerNoticeKR/getfPassengerNoticeIKR?serviceKey=${SERVICE_KEY}`,
};

export { OpenApiUrls };
