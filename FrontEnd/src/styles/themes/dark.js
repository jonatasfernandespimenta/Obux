import { DefaultTheme as NavigationTheme } from '@react-navigation/native';

const theme = {
  navigation: {
    ...NavigationTheme,
    colors: {
      ...NavigationTheme.colors,
      background: '#292929',
    }
  }
};

export default theme;