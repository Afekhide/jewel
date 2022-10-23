import styles from '../styles/Logo.module.scss'

const Logo = () => {
    return (
        <svg className={styles.logo} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 387 164">
            <g id="logo" transform="translate(-1124 -138.306)">
                <text id="George" transform="translate(1124 202.306)" fill="#e6c08e" fontSize="67"><tspan x="0" y="0">GEORGE</tspan></text>
                <text id="Jewels" transform="translate(1288 263.306)" fill="#e6c08e" fontSize="67" ><tspan x="0" y="0">JEWELS</tspan></text>
                <text id="Real_ESTATES" data-name="Real ESTATES" transform="translate(1293 297.306)" fill="#e6c08e" fontSize="21" fontFamily="Raleway-Semibold, Raleway" fontWeight="600" letterSpacing="0.254em"><tspan x="0" y="0">REAL ESTATES</tspan></text>
                <text id="_" data-name="&amp;" transform="translate(1229 280.306)" fill="#e6c08e" fontSize="61"><tspan x="0" y="0">&amp;</tspan></text>
            </g>
        </svg>

    )
}

export default Logo;