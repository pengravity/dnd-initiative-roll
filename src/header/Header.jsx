import styles from './Header.module.scss';

const Header = () => {
  return (
    <header>
      <div className={styles.header}>
        <nav>
          <h4>Locations</h4>
        </nav>
      </div>
    </header>
  );
};

export default Header;
