import Nav from './Nav';
import Head from 'next/head';
import SideNav from './SideNav';
import AppContext from '../context/AppContext.jsx';
import styles from '../styles/Layout.module.scss';

const Layout = ({children}) => {
  return (
      <section className={styles.container}>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@200;300;400;500;600;700&display=swap" rel="stylesheet"/>
        </Head>
        <Nav/>
        <SideNav/>

        <main>
            {children}
        </main>
      </section>
  )
}

export default Layout;