import React from 'react';
import { Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../../../redux/actions';

const { Option } = Select;

const GroupSelect = ({ idValue = true, ...props }) => {
  const dispatch = useDispatch();
  const [groupList, setGroupList] = React.useState([]);
  const [list, setlist] = React.useState([]);
  const { group } = useSelector((state) => state);
  React.useEffect(() => {
    dispatch(Actions.getAllGroups());
  }, [dispatch]);
  React.useEffect(() => {
    setGroupList(group.list);
    setlist(group.list);
  }, [group]);
  const onSearchGroup = (v) => {
    const u = [...groupList];
    if (v) {
      setlist([
        ...u.filter(
          (c) => c?.name?.toLowerCase().indexOf(v.toLowerCase()) > -1
        ),
      ]);
    } else {
      setlist(u);
    }
  };
  return (
    <Select
      filterOption={false}
      showSearch
      onSearch={onSearchGroup}
      placeholder="Please choose the group"
      {...props}
    >
      {list &&
        list.map((item) => {
          return (
            <Option value={idValue ? item.id : item.name} key={item.id}>
              {item.name}
            </Option>
          );
        })}
    </Select>
  );
};

export default GroupSelect;
