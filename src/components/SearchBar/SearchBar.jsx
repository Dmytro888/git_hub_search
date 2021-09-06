import { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { search, historyPush } from '../../redux/search/search-operations';
import { getHistory } from '../../redux/search/search-selectors';

import debounce from 'lodash.debounce';

import styles from './SearchBar.module.css';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const renderHistory = useSelector(getHistory);

  const changeHandler = event => {
    event.preventDefault();

    let inputValue = event.target.value;

    if (inputValue) {
      dispatch(search(inputValue, 1));
      dispatch(historyPush(inputValue));
    }
  };

  const debouncedChangeHandler = useMemo(
    () => debounce(changeHandler, 500),
    [],
  );

  return (
    <div className={styles.searchBarWrapper}>
      <input
        className={styles.searchInput}
        type='text'
        placeholder='Search...'
        value={value}
        onChange={event => {
          debouncedChangeHandler(event);
          setValue(event.target.value);
        }}
      />
      <p className={styles.searchResult}>Search history:</p>
      <ul>
        {renderHistory?.map((item, idx) => (
          <li key={idx} className={styles.searchHistoryItem}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
