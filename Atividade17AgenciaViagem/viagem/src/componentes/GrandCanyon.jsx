
import Style from './css/Canyon.module.css'
import ComponentesProps from './ComponentesProps'
import BandeiraUSA from '../assets/BandeiraUSA.png'

function GrandCanyon(){
return(
 <section className={Style.fundoCanyon}>
    <h1>Venha conhecer o Grand Canyon!</h1>
      <ComponentesProps
      lugar='Grand Cannyon'
      texto='O Grand Canyon impressiona com sua grandiosidade e cores que mudam a cada instante. As camadas de rocha milenares, esculpidas pela força do Rio Colorado, revelam a história geológica da Terra. A imensidão do desfiladeiro, com seus penhascos íngremes e platôs vastos, cria uma paisagem de tirar o fôlego.'
      bandeira={BandeiraUSA}

    />


 </section>
)
}

export default GrandCanyon