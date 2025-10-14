import Style from './css/China.module.css'
import ComponentesProps from './ComponentesProps'
import BandeiraChina from '../assets/BandeiraChina.png'

function MuralhaChina(){
return(
 <section className={Style.fundoChina}>
    <h1>Venha conhecer a Muralha da China!</h1>
     <ComponentesProps
      lugar='Muralha da China'
      texto='A estrutura, serpenteando por montanhas e vales, testemunha séculos de dinastias e lendas. Cada tijolo conta a história de um povo, refletindo a grandiosidade de uma cultura milenar. Caminhar por suas fortalezas é como uma viagem no tempo, onde se pode sentir a força e a beleza de uma obra que desafia o próprio tempo.'
      bandeira={BandeiraChina}

    />

 </section>
)
}

export default MuralhaChina