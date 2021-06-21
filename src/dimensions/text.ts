import { getDeviceDPIQualifier } from '../utils/responsive';

const APP_PRIMARY_TITLE = {
  mdpi: 28,
  xhdpi: 55,
  xxhdpi: 75,
};

const NORMAL_TEXT = {
  mdpi: 15,
  xhdpi: 35,
  xxhdpi: 55,
};

const deviceQualifier = getDeviceDPIQualifier();

export const appPrimaryTitleSize = APP_PRIMARY_TITLE[deviceQualifier];
export const normalTextSize = NORMAL_TEXT[deviceQualifier];
