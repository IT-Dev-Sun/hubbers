import React from 'react';
import { Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../../../redux/actions';

const { Option } = Select;

const LanguageSelect = ({ idValue = true, ...props }) => {
  const dispatch = useDispatch();
  const [languageList, setLanguageList] = React.useState([]);
  const [list, setlist] = React.useState([]);
  const { language } = useSelector((state) => state);
  React.useEffect(() => {
    dispatch(Actions.getAllLanguage());
  }, [dispatch]);
  React.useEffect(() => {
    setLanguageList(language.list);
    setlist(language.list);
  }, [language]);
  const onSearchLanguage = (v) => {
    const languages = [...languageList];
    if (v) {
      setlist([
        ...languages.filter(
          (c) => c?.name?.toLowerCase().indexOf(v.toLowerCase()) > -1
        ),
      ]);
    } else {
      setlist(languages);
    }
  };
  return (
    <Select
      filterOption={false}
      showSearch
      onSearch={onSearchLanguage}
      placeholder="Please choose the language"
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

export default LanguageSelect;
