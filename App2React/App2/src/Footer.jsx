
import Styles from './css/Footer.module.css'
import whats from './images/whatsapp.png'
import insta from './images/instagram.png'
import face from './images/facebook.png'



function Footer() {

    return (

        <footer>
            <h3>Nossa Loja - Instrumentos Musicais</h3>
           <p>Rua Tito, 54 - Lapa <br/> São Paulo - Brasil</p>
            <nav>
                <a href="#"><img className={Styles.imgsec3} src={whats} alt="Whatsapp" /></a>
                <a href="#"><img className={Styles.imgsec3} src={insta} alt="Instagram" /></a>
                <a href="#"><img className={Styles.imgsec3} src={face} alt="Facebook" /></a>
            </nav>
        </footer>


    )


}
export default Footer