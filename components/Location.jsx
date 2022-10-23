import styles from '../styles/Location.module.scss';

const Location = ({data}) => {
    const {images, country, propertyCount} = data;

    return (
        <section className={styles.locationCard}>
            <section className={styles.locationImageContainer}>
                <img src={images[1]} alt="locations" />
            </section>
            <section className={styles.locationData}>
                <section>
                    <h2>{country}</h2>
                    <section>
                        <img src="./icons/arrow-right.svg" alt="right arrow icon" />
                    </section>
                </section>
                <p>{propertyCount} {propertyCount > 1 ? 'properties': 'property'} for sale</p>
            </section>
        </section>
    )
}

export default Location;