import React from 'react';
import { Spin } from 'antd';

const PageLoading = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        alignItems: 'center',
      }}
    >
      <Spin size="large" />
    </div>
  );
};

export default PageLoading;
