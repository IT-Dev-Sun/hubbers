export const defaultMenuType = 'menu-default';
export const subHiddenBreakpoint = 1440;
export const menuHiddenBreakpoint = 768;
export const defaultLocale = 'en';
export const localeOptions = [
  {
    id: 'en',
    name: 'English - LTR',
    direction: 'ltr',
  },
  {
    id: 'es',
    name: 'Español',
    direction: 'ltr',
  },
  {
    id: 'enrtl',
    name: 'English - RTL',
    direction: 'rtl',
  },
];

export const firebaseConfig = {
  apiKey: 'AIzaSyBBksq-Asxq2M4Ot-75X19IyrEYJqNBPcg',
  authDomain: 'gogo-react-login.firebaseapp.com',
  databaseURL: 'https://gogo-react-login.firebaseio.com',
  projectId: 'gogo-react-login',
  storageBucket: 'gogo-react-login.appspot.com',
  messagingSenderId: '216495999563',
};

export const adminRoot = '/app';
export const buyUrl = 'https://1.envato.market/k4z0';
export const searchPath = `${adminRoot}/#`;
export const servicePath = 'https://api.coloredstrategies.com';

export const themeColorStorageKey = '__theme_selected_color';
export const isMultiColorActive = true;
export const defaultColor = 'light.purplemonster';
export const isDarkSwitchActive = true;
export const defaultDirection = 'ltr';
export const themeRadiusStorageKey = '__theme_radius';
export const isAuthGuardActive = true;
export const colors = [
  'bluenavy',
  'blueyale',
  'blueolympic',
  'greenmoss',
  'greenlime',
  'purplemonster',
  'orangecarrot',
  'redruby',
  'yellowgranola',
  'greysteel',
];
/* eslint-disable */

export const API_BASE_URL = process.env.REACT_APP_NODE_ENV === 'production' ? 'https://api.hubbers.io/api/v1' : ''


export const API_UPLOAD_URL = process.env.NODE_ENV === 'production' ? 'https://api.hubbers.io/api/v1/upload': process.env.NODE_ENV === 'development' ? 'http://localhost:8888/api/v1/upload': 'https://api.hubbers.io/api/v1/upload';
/* eslint-enable */
