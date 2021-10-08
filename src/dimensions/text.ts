import { getDeviceDPIQualifier } from '../utils/responsive';

const APP_PRIMARY_TITLE = {
  mdpi: 28,
  xhdpi: 55,
  xxhdpi: 75,
};

const PRIMARY_TITLE = {
  mdpi: 17,
  xhdpi: 37,
  xxhdpi: 45,
};

const SUB_TITLE = {
  mdpi: 15,
  xhdpi: 30,
  xxhdpi: 58,
};

const SUB_SUB_TITLE = {
  mdpi: 13,
  xhdpi: 25,
  xxhdpi: 45,
};


const NORMAL_TEXT = {
  mdpi: 10,
  xhdpi: 15,
  xxhdpi: 14,
};

const deviceQualifier = getDeviceDPIQualifier();

export const appPrimaryTitleSize = APP_PRIMARY_TITLE[deviceQualifier];
export const normalTextSize = NORMAL_TEXT[deviceQualifier];
export const primaryTitleSize = PRIMARY_TITLE[deviceQualifier];
export const subTitleSize = SUB_TITLE[deviceQualifier];
export const subSubTitleSize = SUB_SUB_TITLE[deviceQualifier];
