import { Dimensions, PixelRatio } from 'react-native';

const MDPI_MAX_LIMIT = 1.5;
const XHDPI_MAX_LIMIT = 3;
const XXHDPI_MIN_LIMIT = 3;

const MDPI_QUALIFIER = 'mdpi';
const XHDPI_QUALIFIER = 'xhdpi';
const XXHDPI_QUALIFIER = 'xxhdpi';

const { width, height } = Dimensions.get('window');

function getDeviceDPI(): number {
  return PixelRatio.get();
}

function getDeviceDPIQualifier(): string {
  let dpi = PixelRatio.get();
  if (dpi <= MDPI_MAX_LIMIT) return MDPI_QUALIFIER;
  else if (dpi <= XHDPI_MAX_LIMIT) return XHDPI_QUALIFIER;
  else if (dpi > XXHDPI_MIN_LIMIT) return XXHDPI_QUALIFIER;
}

function percentageScreenSize(wp: number, hp: number) {
  let out = { wp: null, hp: null };

  if (wp > 0 && wp <= 1) out.wp = wp * width;

  if (hp > 0 && hp <= 1) out.hp = hp * height;

  return out;
}

export {
  getDeviceDPI,
  getDeviceDPIQualifier,
  MDPI_MAX_LIMIT,
  XHDPI_MAX_LIMIT,
  XXHDPI_MIN_LIMIT,
  MDPI_QUALIFIER,
  XHDPI_QUALIFIER,
  XXHDPI_QUALIFIER,
  percentageScreenSize,
};
