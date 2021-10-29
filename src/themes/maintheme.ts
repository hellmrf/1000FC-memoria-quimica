import colors from "./colors";

export default {
  name: 'MainTheme',
  fonts: {
    normal: 'LoveloBlack',
    bold: 'LoveloLineBold',
    title: 'LoveloLineBold',
    description: 'AileronSemiBold'
  },
  colors: {
    mainBackground: '#a4d418ff',
    purple: '#5e17eb',
    lightPurple: '#8c52ff',
    lightGray: '#e6e6e6',
    red: '#eb0404',
    lightYellow: '#ffde59',
    avatars: ['#76eb00', '#d223eb', '#ebba2f', '#0c39eb', '#5e17eb'],
  },
  components: {
    homeBackgroundColor: colors.lightPurple,
    homeGradientBackgroundColor: [colors.turquoise, colors.turquoise60, colors.turquoise00],
    homeTitleColor: colors.white,
    homeAtomBorderColor: colors.white77,
    homePlayButtonAreaColor: colors.white33,
    homeConfigButtonAreaColor: colors.white65,
    subjectBackgroundColor: colors.lightPurple,
    subjectPlayButtonAreaColor: colors.white77,
    choosePlayersBackgroundColor: colors.lightPurple,
    choosePlayersTitleBackgroundColor: colors.middleYellow,
    shufflePlayersBackgroundColor: colors.lightPurple,
    shufflePlayersTitleBackgroundColor: colors.middleYellow,
    sufflePlayersColors: [colors.red, colors.thulian, colors.greenTea, colors.blue, colors.lightSlateGray, colors.parisGreen],
    gameDefaultBackgroundColor: colors.lightGreen,
    gameFooterBackgroundColor: colors.purple,
    gameFooterBorderColor: colors.lightPurple,
    gameAvatarIndicatorColor: colors.red,
    gameAvatarAreaColor: colors.white77,
    configBackgroundColor: colors.lightPurple,
    configTextItemColor: colors.white,
    primaryColor: colors.purple,
    secondaryColor: colors.lightGreen,
    avatars: [colors.lawnGreen, colors.steelPink, colors.saffron, colors.blueRibbon, colors.hanPurple]
  }
};
