import axios from 'axios';
import { OpenApiAirPortUrls } from '../openApiUrls';

/**
 * 인천 api
 */
const IncheonAirportApi = {
  fetchincheonAirport: function fetchincheonAirport(dayParam: string) {
    return axios.get(
      `${OpenApiAirPortUrls.incheonAirportUrl}$selectdate=${dayParam}&type=json`,
    );
  },
};

export { IncheonAirportApi };
