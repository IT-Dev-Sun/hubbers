import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'antd';

const renderAvatar = (props) => {
  return (
    <Avatar {...props} className={`ant-avatar-${props.type}`}>
      {props.text}
    </Avatar>
  );
};

export const AvatarStatus = (props) => {
  const {
    name,
    suffix,
    subTitle,
    id,
    type,
    src,
    icon,
    size,
    shape,
    gap,
    text,
    onNameClick,
  } = props;
  /* eslint-disable jsx-a11y/click-events-have-key-events */
  /* eslint-disable jsx-a11y/no-static-element-interactions */
  return (
    <div className="avatar-status d-flex align-items-center">
      {renderAvatar({ icon, src, type, size, shape, gap, text })}
      <div className="ml-2">
        <div>
          {onNameClick ? (
            <div
              onClick={() => onNameClick({ name, subTitle, src, id })}
              className="avatar-status-name clickable"
            >
              {name}
            </div>
          ) : (
            <div className="avatar-status-name">{name}</div>
          )}
          <span>{suffix}</span>
        </div>
        <div className="text-muted avatar-status-subtitle">{subTitle}</div>
      </div>
    </div>
  );
};
/* eslint-disable react/require-default-props */
AvatarStatus.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string,
  type: PropTypes.string,
  onNameClick: PropTypes.func,
};

export default AvatarStatus;
