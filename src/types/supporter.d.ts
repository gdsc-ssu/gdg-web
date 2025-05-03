import { CommonProps } from "./common";

export interface SupporterInfo {
  profile: string;
  description: string;
  name: string;
  exRole: string;
  job: string;
}

export interface SupportPortraitProps {
  image: string;
  name : string;
  width?: number;
  height?: number;
}

export interface SupporterPortraitGroupProps extends CommonProps {
  images: string[];
  names: string[];
}