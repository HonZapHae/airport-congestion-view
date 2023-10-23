import { SERVICE_KEY } from './constants';

const OpenApiAirPortUrls = {
  // eslint-disable-next-line no-irregular-whitespace
  domesticFlightUrl: `https://api.odcloud.kr/api/getAPRTPsgrCongestion_v2/v1/aprtPsgrCongestion​V2?page=1&perPage=10&serviceKey=${SERVICE_KEY}`,
  incheonAirportUrl: `http://apis.data.go.kr/B551177/PassengerNoticeKR/getfPassengerNoticeIKR?serviceKey=${SERVICE_KEY}`,
};
const OpenApiParkingUrls = {
  incheonParkingUrl: `http://apis.data.go.kr/B551177/StatusOfParking/getTrackingParking?serviceKey=${SERVICE_KEY}`,
  gimpoParkingUrl: '/inappv5/entry-pc/11540232?from=map&fromPanelNum=1&x=126.80125094342995&y=37.56689995390468',
  cheongjuParkingUrl: '/inappv5/entry-pc/11576967?from=map&fromPanelNum=1&x=127.49598871&y=36.7219837899999',
  gimhaeParkingUrl: '/inappv5/entry-pc/13036655?from=map&fromPanelNum=2&x=128.946797600028&y=35.17316319998638',
  jejuParkingUrl: '/inappv5/entry-pc/11576965?from=map&fromPanelNum=1&x=126.49299331999846&y=33.506923319999366',
  daeguParkingUrl: '/inappv5/entry-pc/11576983?from=map&fromPanelNum=2&x=128.637636700001&y=35.8999974399984',
};

export { OpenApiAirPortUrls, OpenApiParkingUrls };
