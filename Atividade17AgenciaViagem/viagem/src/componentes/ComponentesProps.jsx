
import Style from './css/ComponentesProps.module.css'


function ComponentesProps( {lugar,texto,bandeira} ){
return(
 <div className={Style.CorpoTexto}>
    <h2>Venha conhecer esse lugar incrível {lugar}!</h2>
    <p>{texto}</p>
        <img src={bandeira} alt="bandeira" className={Style.imageProps} />

 </div>
)
}

export default ComponentesProps