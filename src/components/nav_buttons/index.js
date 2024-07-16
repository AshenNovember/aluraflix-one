import { Link, useLocation } from 'react-router-dom'
import styles from './Menu.module.css'

const Nav_Buttons = () => {
    const local = useLocation();

    return (
       <section className={styles.buttons}>
            <Link className={`
                ${styles.link}
                ${local.pathname === "/" ? styles.linkon : ''}`}
            to="/">Home</Link>
            <Link className={`
                ${styles.link}
                ${local.pathname === "/new-video" ? styles.linkon : ''}`}
            to="/new-video">Novo Vídeo</Link>
       </section>
    )
}
export default Nav_Buttons;