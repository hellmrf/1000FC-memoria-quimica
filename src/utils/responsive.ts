import { Dimensions, PixelRatio } from 'react-native';

const MDPI_MAX_LIMIT = 1.5;
const XHDPI_MAX_LIMIT = 3;
// const XXHDPI_MIN_LIMIT = 3;

export enum DeviceQualifier {
  MDPI = 'mdpi',
  XHDPI = 'xhdpi',
  XXHDPI = 'xxhdpi',
}
// const ratioLimit = {
//   mdpi: 1.5,
//   xhdpi: 3,
//   xxhdpi: 3,
// }

const { width, height } = Dimensions.get('window');

export function getDeviceDPI(): number {
  return PixelRatio.get();
}

export function getDeviceDPIQualifier(): DeviceQualifier {
  const dpi = PixelRatio.get();
  if (dpi <= MDPI_MAX_LIMIT) return DeviceQualifier.MDPI;
  else if (dpi <= XHDPI_MAX_LIMIT) return DeviceQualifier.XHDPI;
  else return DeviceQualifier.XXHDPI;
}

export interface ScreenSize {
  width: number;
  height: number;
}

// TODO: rename to getScreenSizeInPixels
export function getScreenSizePX(): ScreenSize {
  return {
    width: PixelRatio.getPixelSizeForLayoutSize(width),
    height: PixelRatio.getPixelSizeForLayoutSize(height),
  };
}

// TODO: falta levar em conta o tamanho do StatusBar.
export function percentageToHeight(percentage: number) {
  if (percentage > 1 || percentage < 0) {
    throw RangeError(
      `Percentage must be within [0, 1] interval. Got ${percentage}.`
    );
  }
  return percentage * height;
}

export function percentageToWidth(percentage: number) {
  if (percentage > 1 || percentage < 0) {
    throw RangeError(
      `Percentage must be within [0, 1] interval. Got ${percentage}.`
    );
  }
  return percentage * width;
}
