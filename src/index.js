/* eslint-disable global-require */
import 'antd/dist/antd.css';
import './assets/css/vendor/bootstrap.min.css';
import './assets/css/vendor/bootstrap.rtl.only.min.css';
import 'react-circular-progressbar/dist/styles.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-image-lightbox/style.css';
import 'video.js/dist/video-js.css';
import {
  isMultiColorActive,
  defaultColor,
  isDarkSwitchActive,
} from './constants/defaultValues';
import { getCurrentColor, setCurrentColor } from './helpers/Utils';

const color =
  isMultiColorActive || isDarkSwitchActive ? getCurrentColor() : defaultColor;
setCurrentColor(color);
/* eslint-disable */
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
/* eslint-enable */
// const render = () => {
//   import(`./assets/css/sass/themes/gogo.${color}.scss`).then(() => {
//     require('./AppRenderer');
//   });
// };
// render();
const render = () => {
  import(`./assets/css/sass/themes/gogo.light.greenlime.scss`).then(() => {
    /* eslint-disable */
    require('./AppRenderer');
    /* eslint-enable */
  });
};
render();
