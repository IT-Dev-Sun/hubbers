import React from 'react';
import { Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../../../redux/actions';

const { Option } = Select;

const CountrySelect = ({ idValue = true, ...props }) => {
  const dispatch = useDispatch();
  const [countryList, setCountryList] = React.useState([]);
  const [list, setlist] = React.useState([]);
  const { country } = useSelector((state) => state);
  React.useEffect(() => {
    dispatch(Actions.getAllCountry());
  }, [dispatch]);
  React.useEffect(() => {
    setCountryList(country.list);
    setlist(country.list);
  }, [country]);
  const onSearchCountry = (v) => {
    const countries = [...countryList];
    if (v) {
      setlist([
        ...countries.filter(
          (c) => c.dataValues?.name?.toLowerCase().indexOf(v.toLowerCase()) > -1
        ),
      ]);
    } else {
      setlist(countries);
    }
  };
  return (
    <Select
      filterOption={false}
      showSearch
      onSearch={onSearchCountry}
      placeholder="Please choose the country"
      {...props}
    >
      {list &&
        list.map((item) => {
          return (
            <Option
              value={idValue ? item.dataValues.id : item.dataValues.name}
              key={item.dataValues.id}
            >
              {item.dataValues.name}
            </Option>
          );
        })}
    </Select>
  );
};

export default CountrySelect;
