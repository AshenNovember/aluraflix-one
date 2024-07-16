
import './nav.css'
import Nav_Buttons from "../nav_buttons";

const Navigator = () => {
    return (
    <nav className="nav">
       <section>
       <img src="/images/LogoMain.png" className='imagem_nav' alt="" />
       </section>
       <Nav_Buttons />
    </nav>)
}

export default Navigator