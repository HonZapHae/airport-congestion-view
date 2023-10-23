import axios from 'axios';
import { OpenApiAirPortUrls } from '../openApiUrls';

export type IncheonCongestionData = {
  adate: string;
  atime: string;
  t1sum1: string;
  t1sum2:string;
  t1sum3: string;
  t1sum4: string;
  t1sumset1: string;
  t1sum5: string;
  t1sum6: string;
  t1sum7: string;
  t1sum8: string;
  t1sumset2: string;
  t2sum1: string;
  t2sum2: string;
  t2sumset1:string;
  t2sum3: string;
  t2sum4:string;
  t2sumset2: string;
}

export type ApiResponse = {
  data:{
    response:{
      body:{
        items:IncheonCongestionData[];
      }
    }
  }
};

/**
 * 인천 api
 */
const IncheonAirportApi = {
  fetchincheonAirport: function fetchincheonAirport(dayParam: string): Promise<ApiResponse> {
    return axios.get(
      `${OpenApiAirPortUrls.incheonAirportUrl}&selectdate=${dayParam}&type=json`,
    );
  },
};

export { IncheonAirportApi };
