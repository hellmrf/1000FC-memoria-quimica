import {
  getDeviceDPIQualifier,
  MDPI_QUALIFIER,
  XHDPI_QUALIFIER,
  XXHDPI_QUALIFIER,
} from '../utils/responsive';

const APP_PRIMARY_TITLE = {
  [MDPI_QUALIFIER]: 28,
  [XHDPI_QUALIFIER]: 55,
  [XXHDPI_QUALIFIER]: 75,
};

const NORMAL_TEXT = {
  [MDPI_QUALIFIER]: 15,
  [XHDPI_QUALIFIER]: 35,
  [XXHDPI_QUALIFIER]: 55,
};

const DEVICE_QUALIFIER = getDeviceDPIQualifier();

var app_primary_title_size = APP_PRIMARY_TITLE[DEVICE_QUALIFIER];
var normal_text_size = NORMAL_TEXT[DEVICE_QUALIFIER];

export { app_primary_title_size, normal_text_size };
