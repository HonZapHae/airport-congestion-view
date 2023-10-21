const OpenApiUrls = {
  domesticFlightUrl: `https://api.odcloud.kr/api/getAPRTPsgrCongestion_v2/v1/aprtPsgrCongestion​V2?page=1&perPage=10&serviceKey=${process.env.REACT_APP_OPEN_API_KEY}`,

  incheonAirportUrl: `http://apis.data.go.kr/B551177/PassengerNoticeKR/getfPassengerNoticeIKR?serviceKey=${process.env.REACT_APP_OPEN_API_KEY}`,
};

export { OpenApiUrls };
