import React from 'react';
import { Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../../../redux/actions';

const { Option } = Select;

const CommunityMemberSelect = ({ communityId = null, ...props }) => {
  const dispatch = useDispatch();
  const [allList, setAllList] = React.useState([]);
  const [filteredList, setFilteredList] = React.useState([]);
  const [list, setlist] = React.useState([]);
  const { member } = useSelector((state) => state);
  React.useEffect(() => {
    dispatch(Actions.getAllMember());
  }, [dispatch]);
  React.useEffect(() => {
    setAllList(member.list);
    setFilteredList(member.list);
  }, [member]);
  React.useEffect(() => {
    if (!communityId) {
      setFilteredList(allList);
      setlist(allList);
    } else {
      const m = allList.filter((mb) => {
        return Number(mb.communityId) === Number(communityId);
      });
      setFilteredList(m);
      setlist(m);
    }
  }, [communityId, allList]);
  const onSearch = (v) => {
    const u = [...filteredList];
    if (v) {
      setlist([
        ...u.filter(
          (c) => c?.user?.email?.toLowerCase().indexOf(v.toLowerCase()) > -1
        ),
      ]);
    } else {
      setlist(u);
    }
  };
  return (
    <Select filterOption={false} showSearch onSearch={onSearch} {...props}>
      {list &&
        list.map((item) => {
          return (
            <Option value={item.id} key={item.id}>
              {`${item.community?.name} / ${item.user?.email}`}
            </Option>
          );
        })}
    </Select>
  );
};

export default CommunityMemberSelect;
