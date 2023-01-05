import React from 'react';
import Icon from '@ant-design/icons';

/* eslint-disable */
const CustomIcon = React.forwardRef((props, _) => (
  <Icon component={props.svg} className={props.className} />
));
/* eslint-enable */

export default CustomIcon;
