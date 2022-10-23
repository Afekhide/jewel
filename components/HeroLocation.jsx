import Button from './Button';
import ArrowIcon from './ArrowIcon';
import LocationIcon from './LocationIcon';
import styles from '../styles/Herolocation.module.scss';
import { useState } from 'react';

const nextIndex = (current, total) => Math.abs(current+1)%total;
const prevIndex = (current, total) => (total+(current-1))%total;

const HeroLocation = ({location}) => {
    const {country, price, images, productCount, name} = location;
    const imageCount = images.length;
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className={styles.container}>
            {console.log(activeIndex)}
            <section className={`${styles.imageReel} imageReel`}>
                {images.map((image) => (
                    <img src={image} alt="image" key={image}/>
                ))}
            </section>
            <section className={styles.statsContainer}>
                <section className={styles.stats}>
                    <section className={styles.info}>
                        <h3 className={styles.name}>{name}</h3>
                        <section className={styles.locationDetails}>
                            <span><LocationIcon/></span>
                            <span>{country}</span>
                        </section>
                    </section>

                    {/*Price Section*/}
                    <section className={styles.priceContainer}>
                        <p className={styles.price}>${price.dollar}.{price.cents}</p>
                        <section><Button>BUY</Button></section>
                    </section>
                </section>
                <section className={styles.controls}>
                    <section onClick={ev => setActiveIndex(prevIndex(activeIndex, images.length))}><ArrowIcon/></section>
                    <section onClick={ev => setActiveIndex(nextIndex(activeIndex, images.length))}><ArrowIcon/></section>
                </section>
            </section>

            <style>
                {`

                    .imageReel{
                        transform:translateX(calc(${activeIndex/imageCount}*(-100%)));
                    }
            
                `}
            </style>
        </section>
    )
}

export default HeroLocation;