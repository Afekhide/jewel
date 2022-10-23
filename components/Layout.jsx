import Nav from './Nav';
import SideNav from './SideNav';
import AppContext from '../context/AppContext.jsx';
import styles from '../styles/Layout.module.scss';

const Layout = ({children}) => {
  return (
      <section className={styles.container}>
        <Nav/>
        <SideNav/>

        <main>
            {children}
        </main>
      </section>
  )
}

export default Layout;