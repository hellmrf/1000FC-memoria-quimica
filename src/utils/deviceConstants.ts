import { Platform, NativeModules } from 'react-native';
const { StatusBarManager } = NativeModules;

export const STATUSBAR_HEIGHT: number =
  Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;
