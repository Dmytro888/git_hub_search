import Container from '../Container/Container';
import styles from './Header.module.css';

import Logo from '../../img/logo.jpg';

const Header = () => {
  return (
    <Container>
      <div className={styles.mainHeaderWrapper}>
        <img className={styles.logo} src={Logo} alt='logo' />
        <p className={styles.title}>GitHub users search App</p>
      </div>
    </Container>
  );
};

export default Header;
