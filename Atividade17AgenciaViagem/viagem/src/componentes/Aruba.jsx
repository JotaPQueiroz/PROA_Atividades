import Style from './css/Aruba.module.css'
import ComponentesProps from './ComponentesProps'
import BandeiraAruba from '../assets/BandeiraAruba.png'

function Aruba(){
return(
 <section className={Style.fundoAruba}>
    <h1>Venha conhecer a Aruba!</h1>
      <ComponentesProps
      lugar='Aruba'
      texto='Aruba fascina com a sua atmosfera de tranquilidade e paisagens de cartão-postal. As praias de areia branca e fina, banhadas por um mar de águas calmas e azul-turquesa, são o cenário perfeito para relaxar e desfrutar do sol caribenho. A cultura calorosa e a culinária saborosa completam a experiência.'
      bandeira={BandeiraAruba}

    />


 </section>
)
}

export default Aruba