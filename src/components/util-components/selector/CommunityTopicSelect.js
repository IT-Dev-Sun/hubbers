import React from 'react';
import { Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../../../redux/actions';

const { Option } = Select;

const CommunityTopicSelect = ({ communityId = null, ...props }) => {
  const dispatch = useDispatch();
  const [allList, setAllList] = React.useState([]);
  const [filteredList, setFilteredList] = React.useState([]);
  const [list, setlist] = React.useState([]);
  const { topic } = useSelector((state) => state);
  React.useEffect(() => {
    dispatch(Actions.getAllTopics());
  }, [dispatch]);
  React.useEffect(() => {
    setAllList(topic.list);
    setFilteredList(topic.list);
  }, [topic]);
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
        ...u.filter((c) => c.name?.toLowerCase().indexOf(v.toLowerCase()) > -1),
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
              {`${item.community?.name} / ${item.name}`}
            </Option>
          );
        })}
    </Select>
  );
};

export default CommunityTopicSelect;
