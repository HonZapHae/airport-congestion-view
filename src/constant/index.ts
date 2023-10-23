export const AIRPORT_CODE = {
  CHEONGJU: 'CJJ', // 청주
  DAEGU: 'DGU', // 대구
  GIMHAE: 'PUS', // 김해
  GIMPO: 'GMP', // 김포
  INCHEON: 'ICN', // 인천
  JEJU: 'CJU', // 제주
} as const;

export type AirportCodeType = typeof AIRPORT_CODE[keyof typeof AIRPORT_CODE];

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

export type PosType = {
  top: number;
  left: number;
};

export const TERMINAL = {
  T1: true,
  T2: false,
} as const;

export type TerminalType = typeof TERMINAL[keyof typeof TERMINAL];
