import React from 'react';
import { Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../../../redux/actions';

const { Option } = Select;

const TopicTypeSelect = ({ ...props }) => {
  const dispatch = useDispatch();
  const [cmrList, setCmrList] = React.useState([]);
  const [list, setlist] = React.useState([]);
  const { topicType } = useSelector((state) => state);
  React.useEffect(() => {
    dispatch(Actions.getAllTopicTypes());
  }, [dispatch]);
  React.useEffect(() => {
    setCmrList(topicType.list);
    setlist(topicType.list);
  }, [topicType]);
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
            <Option value={item.id} key={item.id}>
              {item.displayName}
            </Option>
          );
        })}
    </Select>
  );
};

export default TopicTypeSelect;
