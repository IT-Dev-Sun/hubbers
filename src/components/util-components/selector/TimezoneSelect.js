import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Select } from 'antd';
import * as Actions from '../../../redux/actions';

const { Option } = Select;

const TimezoneSelect = ({ ...props }) => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.timezone);
  const [timezoneList, setTimezoneList] = useState([]);

  useEffect(() => {
    dispatch(Actions.getAllTimezone());
  }, [dispatch]);

  useEffect(() => {
    setTimezoneList(list);
  }, [list]);

  const onSearch = (v) => {
    const u = [...list];
    if (v) {
      setTimezoneList([
        ...u.filter(
          (c) =>
            c?.abbr?.toLowerCase().indexOf(v.toLowerCase()) > -1 ||
            c?.utc?.toLowerCase().indexOf(v.toLowerCase()) > -1
        ),
      ]);
    } else {
      setTimezoneList(u);
    }
  };
  return (
    <Select filterOption={false} showSearch onSearch={onSearch} {...props}>
      {timezoneList &&
        timezoneList.map((item) => {
          return (
            <Option key={item.id} value={item.id}>
              {`${item.abbr} (${item.utc})`}
            </Option>
          );
        })}
    </Select>
  );
};

export default TimezoneSelect;
