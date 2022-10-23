import {useState} from 'react';
import styles from '../styles/Dropdownmenu.module.scss';


const DropDownMenu = ({data}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);
    const {category, heading, values} = data;
    //console.log(selectedValue)

    return (
        <section className={styles.container}>
            <p className={styles.category}>{category}</p>
            <section>
                <h2 onClick={ev => setMenuOpen(!menuOpen)} className={styles.heading}>{selectedValue? selectedValue : heading}</h2>
            </section>
            <section className={`${styles.valuesContainer} ${menuOpen ? styles.open: ''}`}>
                <section className={styles.values}>
                    {values.map((value, index) => (
                        <span 
                        onClick = {ev => {setSelectedValue(value); setMenuOpen(false)}}
                        className={styles.value} key={value}>{value}
                        </span>
                    ))}
                </section>
            </section>
        </section>
    )
}

export default DropDownMenu;