import styles from '../styles/Nav.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { ContextDestructured } from '../context/AppContext';

const Nav = () => {
  const {sideBarShown, setSideBarShown} = ContextDestructured();


  return (
    <nav className={styles.nav}>
      <section>
        <p className={styles.link}>Properties</p>
        <p className={styles.link}>Contact Us</p>
      </section>

      <section>
        <Link href='/'>
          <img className={styles.logo} src='/icons/logo.svg'/>
        </Link>
      </section>

      <section>
        <section className={styles.flex}>
          <p className={styles.link}>Buy</p>
          <p className={styles.link}>Sell</p>
        </section>
        <section className={styles.iconContainer} onClick={ev => setSideBarShown(true)}>
          <img className={styles.navIcon} src='/icons/openIcon.svg' alt="open menu icon"/>
        </section>
      </section>
    </nav>
  )
}

export default Nav;