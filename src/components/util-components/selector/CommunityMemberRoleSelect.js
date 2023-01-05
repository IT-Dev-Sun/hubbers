import React from 'react';
import { Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../../../redux/actions';

const { Option } = Select;

const CommunityMemberRoleSelect = ({ idValue = true, ...props }) => {
  const dispatch = useDispatch();
  const [cmrList, setCmrList] = React.useState([]);
  const [list, setlist] = React.useState([]);
  const { memberRole } = useSelector((state) => state);
  React.useEffect(() => {
    dispatch(Actions.getAllMemberRoles());
  }, [dispatch]);
  React.useEffect(() => {
    setCmrList(memberRole.list);
    setlist(memberRole.list);
  }, [memberRole]);
  const onSearchMemberRole = (v) => {
    const cmr = [...cmrList];
    if (v) {
      setlist([
        ...cmr.filter(
          (c) => c?.name?.toLowerCase().indexOf(v.toLowerCase()) > -1
        ),
      ]);
    } else {
      setlist(cmr);
    }
  };
  return (
    <Select
      filterOption={false}
      showSearch
      onSearch={onSearchMemberRole}
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

export default CommunityMemberRoleSelect;
