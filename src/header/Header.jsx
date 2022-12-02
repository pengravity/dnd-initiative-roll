import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header>
      <div className={styles.header}>
        <nav>
          <Link to='/'>
            {' '}
            <h4>Home</h4>
          </Link>
          <Link to='/locations'>
            {' '}
            <h4>Locations</h4>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
