import { MEDIA_QUERY } from './mediaQuery';

export const TEXT_STYLE_NAME = {
  title: 'title',
  subTitle: 'subTitle',
  subTitle32: 'subTitle32',
  subTitle20: 'subTitle20',
  navList: 'navList',
  body14: 'body14',
} as const;

export type TextStyleNameType =
  typeof TEXT_STYLE_NAME[keyof typeof TEXT_STYLE_NAME];

interface TextStyleType {
  fontSize: string;
  fontWeight: number;
  lineHeight: string;
  letterSpacing?: string;
}

export const TEXT_STYLES: Record<TextStyleNameType, TextStyleType> = {
  title: {
    fontSize: '80px',
    fontWeight: 600,
    lineHeight: '140%',
    letterSpacing: '-0.025em',
    [`@media ${MEDIA_QUERY.mobile}`]: {
      fontSize: '40px',
      fontWeight: 600,
      lineHeight: '140%',
    },
  },
  subTitle: {
    fontSize: '40px',
    fontWeight: 600,
    lineHeight: '140%',
    letterSpacing: '-0.025em',
    [`@media ${MEDIA_QUERY.mobile}`]: {
      fontSize: '24px',
      fontWeight: 600,
      lineHeight: '140%',
    },
  },
  subTitle32: {
    fontSize: '32px',
    fontWeight: 600,
    lineHeight: '140%',
    letterSpacing: '-0.025em',
    [`@media ${MEDIA_QUERY.mobile}`]: {
      fontSize: '20px',
      fontWeight: 600,
      lineHeight: '140%',
    },
  },
  subTitle20: {
    fontSize: '20px',
    fontWeight: 600,
    lineHeight: '140%',
    letterSpacing: '-0.025em',
    [`@media ${MEDIA_QUERY.mobile}`]: {
      fontSize: '16px',
      fontWeight: 600,
      lineHeight: '140%',
    },
  },
  navList: {
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '140%',
    letterSpacing: '-0.025em',
    [`@media ${MEDIA_QUERY.mobile}`]: {
      fontSize: '14px',
      fontWeight: 600,
      lineHeight: '140%',
    },
  },
  body14: {
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '140%',
    letterSpacing: '-0.025em',
    [`@media ${MEDIA_QUERY.mobile}`]: {
      fontSize: '12px',
      fontWeight: 500,
      lineHeight: '140%',
    },
  },
};
