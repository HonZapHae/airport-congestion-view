import axios from 'axios';
import { OpenApiParkingUrls } from '../openApiUrls';

const IncheonParkingApi = {
  fetchincheonParking: function fetchincheonParking() {
    return axios.get(
      `${OpenApiParkingUrls.incheonParkingUrl}&numOfRows=20&pageNo=1&type=json`,
    );
  },
};
export { IncheonParkingApi };
