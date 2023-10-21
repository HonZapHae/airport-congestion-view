import axios from 'axios';
import { OpenApiUrls } from '../openApiUrls';

/**
 * 국내선 api
 */
const DomesticFlightApi = {
  fetchDomesticFlight: function fetchDomesticFlight() {
    return axios.get(OpenApiUrls.domesticFlightUrl);
  },
};

export { DomesticFlightApi };
