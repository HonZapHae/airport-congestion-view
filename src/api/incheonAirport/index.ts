import axios from 'axios';
import { OpenApiUrls } from '../openApiUrls';

/**
 * 인천 api
 */
const IncheonAirportApi = {
  fetchincheonAirport: function fetchincheonAirport(dayParam: string) {
    return axios.get(
      `${OpenApiUrls.incheonAirportUrl}$selectdate=${dayParam}&type=json`,
    );
  },
};

export { IncheonAirportApi };
