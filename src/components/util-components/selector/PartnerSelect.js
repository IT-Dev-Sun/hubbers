import React from 'react';
import { Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../../../redux/actions';

const { Option } = Select;

const PartnerSelect = ({ ...props }) => {
  const dispatch = useDispatch();
  const [allList, setAllList] = React.useState([]);
  const [list, setList] = React.useState([]);
  const { partnerList } = useSelector((state) => state.partner);
  React.useEffect(() => {
    dispatch(Actions.getAllPartner());
  }, [dispatch]);
  React.useEffect(() => {
    setAllList(partnerList);
    setList(partnerList);
  }, [partnerList]);
  const onSearch = (s) => {
    const u = [...allList];
    if (s) {
      setList([
        ...u.filter(
          (c) => c?.name?.toLowerCase().indexOf(s.toLowerCase()) > -1
        ),
      ]);
    } else {
      setList(u);
    }
  };
  return (
    <Select filterOption={false} showSearch onSearch={onSearch} {...props}>
      {list &&
        list.map((item) => {
          return (
            <Option value={item.id} key={item.id}>
              {`${item.name}`}
            </Option>
          );
        })}
    </Select>
  );
};

export default PartnerSelect;
