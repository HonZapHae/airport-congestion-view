export const AIRPORT_CODE = {
  CHEONGJU: 'CJJ', // 청주
  DAEGU: 'TAE', // 대구
  GIMHAE: 'PUS', // 김해
  GIMPO: 'GMP', // 김포
  INCHEON: 'ICN', // 인천
  JEJU: 'CJU', // 제주
} as const;

export type AirportCodeType = typeof AIRPORT_CODE[keyof typeof AIRPORT_CODE];

export const AIRPORT_NM = {
  CHEONGJU: '청주공항',
  DAEGU: '대구공항',
  GIMHAE: '김해공항',
  GIMPO: '김포공항',
  INCHEON: '인천국제공항',
  JEJU: '제주공항',
} as const;

export type AirportNmType = typeof AIRPORT_NM[keyof typeof AIRPORT_NM];

export const AIRPORT_PARKING = {
  CHEONGJU: '청주공항 주차장',
  DAEGU: '대구국제공항',
  GIMHAE: '김해공항 주차장',
  GIMPO: '김포공항 주차장',
  INCHEON1: '인천국제공항 제1주차장',
  INCHEON2: '인천국제공항 제2주차장',
  JEJU: '제주공항 주차장',
} as const;

export type AirportParkingType = typeof AIRPORT_PARKING[keyof typeof AIRPORT_PARKING];

export const BACKGROUND_COLOR = {
  OFF_WHITE: '#fdfdfe',
} as const;

export const COLOR = {
  BLACK: '#191919',
  PURPLE: '#a766f2',
} as const;

export const CONGESTION_COLOR = {
  GOOD: '#9aafe4',
  NORMAL: '#aae8a9',
  BAD: '#eeb764',
  VERY_BAD: '#f57575',
  CLOSED: '#d9d9d9',
} as const;

export type CongestionColorType = typeof CONGESTION_COLOR[keyof typeof CONGESTION_COLOR];

export const CONGESTION_LVL = {
  GOOD: 1,
  NORMAL: 2,
  BAD: 3,
  VERY_BAD: 4,
  CLOSED: 5,
} as const;

export type CongestionLvlType = typeof CONGESTION_LVL[keyof typeof CONGESTION_LVL];

export const CONGESTION_TXT = {
  GOOD: '원활',
  NORMAL: '보통',
  BAD: '혼잡',
  VERY_BAD: '매우 혼잡',
  CLOSED: '운영중지',
} as const;

export type CongestionTxtType = typeof CONGESTION_TXT[keyof typeof CONGESTION_TXT];

export const DEFAULT_CODE = AIRPORT_CODE.INCHEON;

export type ListItemType = {
  code: string;
  name: string;
  terminal?: boolean;
};

export type ParkingDataType = {
  name: string;
  remain: number;
  all: number;
};

export const PARKING_NAME = {
  P1주차장: 'P1',
  P2장기주차장: 'P2',
  화물주차장: '화물',
  여객주차장: '여객',
  'P3 여객(화물)': 'P3',
  '여객주차장(P1+P2)': 'P1P2',
  '국내선 제1주차장': '제1',
  '국내선 제2주차장': '제2',
  '국제선 주차빌딩': '빌딩',
  '국제선 지하': '지하',
  화물청사: '화물',
  '여객 제1주차장': '제1',
  '여객 제2주차장': '제2',
  '여객 제3주차장': '제3',
  '여객 제4주차장': '제4',
  'T1 단기주차장지상층': '단1F',
  'T1 단기주차장지하1층': '단B1',
  'T1 단기주차장지하2층': '단B2',
  'T1 장기 P1 주차장': '장P1',
  'T1 장기 P1 주차타워': '장P1\n타워',
  'T1 장기 P2 주차장': '장P2\n타워',
  'T1 장기 P2 주차타워': '장P2',
  'T1 장기 P3 주차장': '장P3',
  'T1 장기 P4 주차장': '장P4',
  'T2 단기주차장지상1층': '1F',
  'T2 단기주차장지상2층': '2F',
  'T2 단기주차장지상3층': '3F',
  'T2 단기주차장지상4층': '4F',
  'T2 단기주차장지하M층': 'M',
  'T2 장기 주차장': '장기',
} as const;

export type PosType = {
  top: number;
  left: number;
};

export const TERMINAL = {
  T1: true,
  T2: false,
} as const;

export type TerminalType = typeof TERMINAL[keyof typeof TERMINAL];

export const SPLASH_TIME = 1000; // ms