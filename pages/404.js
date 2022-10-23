import Head from "next/head";
import Link from "next/link";
import styles from '../styles/404.module.scss'

const NotFound = () => {
    return (
        <>
            <Head>
                <title>Invalid URL</title>
            </Head>

            <section className={styles.container}>
                <section>
                    <h2 className={styles.header}>Error, 404</h2>
                    <p className={styles.description}>Page not found</p>
                </section>
            </section>
        </>
    )
}

export default NotFound;