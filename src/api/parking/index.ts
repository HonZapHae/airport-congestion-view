import axios from 'axios';
import { OpenApiParkingUrls } from '../openApiUrls';
import {
  AIRPORT_CODE,
  AirportCodeType,
  TERMINAL,
  TerminalType,
} from '../../constant';

const headers = {
  'Access-Control-Allow-Origin': 'http://localhost:3000',
  'Access-Control-Allow-Credentials': 'true',
};

function IncheonParkingApi() {
  return axios.get(
    `${OpenApiParkingUrls.incheonParkingUrl}&numOfRows=20&pageNo=1&type=json`,
  );
}

function GimpoParkingApi() {
  return axios.get(`${OpenApiParkingUrls.gimpoParkingUrl}`, { headers });
}

function CheongjuParkingApi() {
  return axios.get(`${OpenApiParkingUrls.cheongjuParkingUrl}`, { headers });
}

function JejuParkingApi() {
  return axios.get(`${OpenApiParkingUrls.jejuParkingUrl}`, { headers });
}

function GimhaeParkingApi() {
  return axios.get(`${OpenApiParkingUrls.gimhaeParkingUrl}`, { headers });
}

function DaeguParkingApi() {
  return axios.get(`${OpenApiParkingUrls.daeguParkingUrl}`, { headers });
}

const ParkingApi = {
  fetchParking(code: AirportCodeType) {
    switch (code) {
      case AIRPORT_CODE.CHEONGJU:
        return CheongjuParkingApi();
      case AIRPORT_CODE.DAEGU:
        return DaeguParkingApi();
      case AIRPORT_CODE.GIMHAE:
        return GimhaeParkingApi();
      case AIRPORT_CODE.GIMPO:
        return GimpoParkingApi();
      case AIRPORT_CODE.JEJU:
        return JejuParkingApi();
      default:
        return IncheonParkingApi();
    }
  },
};

export { ParkingApi, IncheonParkingApi };
