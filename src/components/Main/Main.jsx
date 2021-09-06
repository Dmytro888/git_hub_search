import Container from '../Container/Container';
import SearchBar from '../SearchBar/SearchBar';
import ResultBar from '../ResultBar/ResultBar';

import styles from './Main.module.css';

const Main = () => {
  return (
    <Container>
      <div className={styles.mainWrapper}>
        <SearchBar />
        <ResultBar />
      </div>
    </Container>
  );
};

export default Main;
