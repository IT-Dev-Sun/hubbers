import { Button, Dropdown, Input } from 'antd';
import React from 'react';
import { SketchPicker } from 'react-color';

const ColorPicker = ({ name, onChange, value = '#ffffff' }) => {
  const [visible, setVisible] = React.useState(false);
  return (
    <>
      <Input
        name={name}
        prefix={
          <Dropdown
            placement="bottomLeft"
            overlay={
              <SketchPicker
                color={value || '#ffffff'}
                onChangeComplete={(e) => onChange(e.hex)}
              />
            }
            visible={visible}
            onVisibleChange={() => setVisible(false)}
          >
            <Button
              style={{
                width: '100px',
                backgroundColor: `${value}`,
                visibility: 'visible',
              }}
              onClick={() => setVisible(!visible)}
            />
          </Dropdown>
        }
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
    </>
  );
};

export default ColorPicker;
