import {useState} from 'react';
import Head from 'next/head';
import {Fragment} from 'react';
import locations, {interiors} from '../data/locations';
import menus from '../data/menus';
import Location from '../components/Location';
import Button from '../components/Button';
import DropDownMenu from '../components/DropDownMenu';
import styles from '../styles/home.module.scss';
import HeroLocation from '../components/HeroLocation';


const home = ({locations, interiors}) => {
    const [sideBarShown, setSideBarShown] = useState(true);
   
    return (
        <Fragment>
            <Head>
                <title>George & Jewel</title>
            </Head>
            <section className={styles.heroHeader}>
                <h2 className={styles.heroHeading}>Move to What Moves You</h2>
            </section>
            <section className={styles.hero}>
                <HeroLocation location={interiors[0]}/>
            </section>
            <section className={styles.menusSection}>
                <section className={styles.menusContainer}>
                    {menus.map((menu) => (
                        <DropDownMenu data={menu} key={menu.category}/>
                    ))}
                </section>
                <section className={styles.resultsContainer}>
                    <Button>Results</Button>
                </section>
            </section>

            <section className={styles.hero}>
                <h2 className={styles.heroHeading}>Awesome locations that suite your standards</h2>
            </section>

            <section className={styles.locationsSection}>
                <section className={styles.locationsContainer}>
                    {locations.map((location) => (
                        <Location data={location} key={location.country}/>
                    ))}
                </section>
            </section>
        </Fragment>
    )
}

export default home;

export async function getStaticProps(){
    return {
        props: {
            locations, interiors
        }
    }
}

