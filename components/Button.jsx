import styles from '../styles/Button.module.scss';

const Button = ({children}) => {
    return (
        <button className={styles.button}>
            {children}
        </button>
    )
}

export default Button;