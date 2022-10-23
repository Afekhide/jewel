
import {useState} from 'react';
import styles from '../styles/Sidenav.module.scss';
import ArrowIcon from './ArrowIcon';
import { ContextDestructured } from '../context/AppContext';

const SideNav = () => {
    const {sideBarShown, setSideBarShown} = ContextDestructured();

    return (
        <section className={`${styles.wrapper} ${!sideBarShown ? styles.scaleIn : null}`}>
            <section className={`${styles.contents} ${!sideBarShown ? styles.slideOut : null}`}>
                <section className={styles.controls}>
                    <section>
                        <p>Dark Mode</p>
                    </section>
                    <section onClick = {ev => setSideBarShown(!sideBarShown)}>
                        <img className={styles.closeIcon} src="./icons/closeIcon.svg" alt="close icon" />
                    </section>
                </section>
                <section className={styles.main}>
                    <ul className={styles.navLinks}>
                        <li>
                            <span>About Us</span>
                            <ArrowIcon/>
                        </li>
                        <li>
                            <span>Properties</span>
                            <ArrowIcon/>
                        </li>
                        <li>
                            <span>News</span>
                            <ArrowIcon/>
                        </li>
                        <li>
                            <span>FAQs</span>
                            <ArrowIcon/>
                        </li>
                        <li>
                            <span>Contact Us</span>
                            <ArrowIcon/>
                        </li>
                    </ul>

                    <ul className={styles.socials}>
                        <li>Instagram</li>
                        <li>Pinterest</li>
                        <li>Facebook</li>
                        <li>Twitter</li>
                    </ul>
                </section>
                <section className={styles.footer}>
                    <section>
                        <span>Terms of use</span>
                        <span>Privacy policy</span>
                    </section>
                    <section>
                        <span>George & Jewel 2022 - All rights reserved.</span>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default SideNav;