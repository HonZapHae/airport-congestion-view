import { SERVICE_KEY } from './constants';

const OpenApiAirPortUrls = {
  // eslint-disable-next-line no-irregular-whitespace
  domesticFlightUrl: `https://api.odcloud.kr/api/getAPRTPsgrCongestion_v2/v1/aprtPsgrCongestion​V2?page=1&perPage=10&serviceKey=${SERVICE_KEY}`,
  incheonAirportUrl: `http://apis.data.go.kr/B551177/PassengerNoticeKR/getfPassengerNoticeIKR?serviceKey=${SERVICE_KEY}`,
};
const OpenApiParkingUrls = {
  incheonParkingUrl: `http://apis.data.go.kr/B551177/StatusOfParking/getTrackingParking?serviceKey=${process.env.REACT_APP_OPEN_API_KEY}`,
};

export { OpenApiAirPortUrls, OpenApiParkingUrls };
