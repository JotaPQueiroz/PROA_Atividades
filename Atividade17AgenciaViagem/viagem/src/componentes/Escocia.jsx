
import Style from './css/Escocia.module.css'
import ComponentesProps from './ComponentesProps'
import BandeiraEscocia from '../assets/BandeiraEscocia.png'

function Escocia(){
return(
 <section className={Style.fundoEscocia}>
    <h1>Venha conhecer a Escócia!</h1>
    <ComponentesProps
      lugar='Escócia'
      texto='A Escócia encanta com suas paisagens dramáticas, que combinam montanhas, lagos e castelos históricos. As Terras Altas revelam uma natureza selvagem e intocada, enquanto cidades como Edimburgo misturam charme medieval e cultura vibrante. O clima misterioso e as lendas celtas dão um toque mágico ao país, tornando cada canto digno de um conto.'
      bandeira={BandeiraEscocia}

    />


 </section>
)
}

export default Escocia