import axios from 'axios';
import { OpenApiAirPortUrls } from '../openApiUrls';

/**
 * 국내선 api
 */
const DomesticFlightApi = {
  fetchDomesticFlight: function fetchDomesticFlight() {
    return axios.get(OpenApiAirPortUrls.domesticFlightUrl);
  },
};

export { DomesticFlightApi };
