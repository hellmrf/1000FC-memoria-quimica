/**
 * This file contains all available themes.
 **/

import maintheme from './maintheme';
import colorblindnesstheme from './colorblindnesstheme';

export const themes = {
  maintheme,
  colorblindnesstheme,
};

export type Theme = typeof maintheme;

export default maintheme;
