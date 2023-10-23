import axios from 'axios';
import { OpenApiAirPortUrls } from '../openApiUrls';

export type CongestionData = {
  CGDR_ALL_LVL:number;
  CGDR_A_LVL:number;
  CGDR_B_LVL:number;
  CGDR_C_LVL:number;
  IATA_APCD:string // 공항코드
  PRC_HR:string // 조회시간
}
export type DomesticFlightResponse = {
  currentCount: number;
  matchCount:number;
  page:number;
  perPage : number;
  totalCount:number;
  data:CongestionData[]
};

export type ApiResponse = {
  data:DomesticFlightResponse
}
/**
 * 국내선 api
 */
const DomesticFlightApi = {
  fetchDomesticFlight: function fetchDomesticFlight(): Promise<ApiResponse> {
    return axios.get(OpenApiAirPortUrls.domesticFlightUrl);
  },
};

export { DomesticFlightApi };
