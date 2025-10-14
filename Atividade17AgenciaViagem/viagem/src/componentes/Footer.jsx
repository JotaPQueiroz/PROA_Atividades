import Styles from './css/Footer.module.css'
import Insta from '../assets/insta.jpg'
import Face from '../assets/face.jpg'
import Tiktok from '../assets/tiktok.png'
import Whats from '../assets/whtas.png'


function Footer(){

return(

<footer className={Styles.fundoFooter}> 
    <h1>Siga-nos em nossas redes sociais</h1>
     <div className={Styles.icones}>
        <img src={Insta} alt="Logo Instagran"  />
        <img src={Face} alt="Logo Facebook"  />
        <img src={Tiktok} alt="Logo tiktok"  />
        <img src={Whats} alt="Logo Whatsapp"  />
    </div> 
    <p>
        Telefone de contato +55 (11) 4702-8922
    </p> 

</footer>
   



)


}
export default Footer