import React from 'react';
import { Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../../../redux/actions';

const { Option } = Select;

const UserSelect = ({ ...props }) => {
  const dispatch = useDispatch();
  const [userList, setUserList] = React.useState([]);
  const [list, setlist] = React.useState([]);
  const { users } = useSelector((state) => state);
  React.useEffect(() => {
    dispatch(Actions.getAllUsers());
  }, [dispatch]);
  React.useEffect(() => {
    setUserList(users.users);
    setlist(users.users);
  }, [users]);
  const onSearchUser = (v) => {
    const u = [...userList];
    if (v) {
      setlist([
        ...u.filter(
          (c) => c?.email?.toLowerCase().indexOf(v.toLowerCase()) > -1
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
      onSearch={onSearchUser}
      {...props}
      placeholder="Please choose the user"
    >
      {list &&
        list.map((item) => {
          return (
            <Option value={item.id} key={item.id}>
              {item.firstname ? item.firstname : ''}&nbsp;
              {item.lastname ? item.lastname : ''}
            </Option>
          );
        })}
    </Select>
  );
};

export default UserSelect;
