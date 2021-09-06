import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getResult,
  getLoading,
  getCount,
  getQuery,
} from '../../redux/search/search-selectors';
import { search } from '../../redux/search/search-operations';
import Pagination from '@material-ui/lab/Pagination';
import Loader from 'react-loader-spinner';

import styles from './ResultBar.module.css';

const ResultBar = () => {
  const results = useSelector(getResult);
  const isLoading = useSelector(getLoading);
  const pagesCount = useSelector(getCount);
  const query = useSelector(getQuery);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const handleChange = (_event, value) => {
    setPage(value);
    dispatch(search(query, value));
  };

  useEffect(() => {
    setPage(1);
  }, [query]);

  return (
    <div className={styles.resultBarWrapper}>
      {isLoading && (
        <Loader
          className={styles.emptyResultsText}
          type='ThreeDots'
          color='#ccc'
          height={120}
          width={120}
        />
      )}
      {
        <ul className={styles.resultsList}>
          {!isLoading &&
            results?.map(({ id, name, owner, description, clone_url }) => (
              <li className={styles.resultItem} key={id}>
                <img
                  className={styles.avatar}
                  src={owner.avatar_url}
                  alt={'avatar'}
                />
                <div className={styles.infoWrapper}>
                  <p className={styles.searchName}>{name}</p>
                  <p>
                    Organisation
                    <br />
                    <span className={styles.organizationName}>
                      {owner.login}
                    </span>
                  </p>
                  <p>
                    Description:
                    <br />
                    <span className={styles.description}>{description}</span>
                  </p>
                </div>
                <a
                  href={`${clone_url}`}
                  className={styles.link}
                  rel='noreferrer'
                  target='_blank'
                >
                  Link
                </a>
              </li>
            ))}
        </ul>
      }
      {!results?.length && !isLoading && (
        <p className={styles.emptyResultsText}>No search results</p>
      )}
      {!!results?.length && !isLoading && (
        <Pagination
          count={Math.round(pagesCount / 10)}
          page={page}
          onChange={handleChange}
          styles={{ justifyContent: 'center' }}
        />
      )}
    </div>
  );
};

export default ResultBar;
