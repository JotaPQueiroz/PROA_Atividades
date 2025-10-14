import { Link } from 'react-router-dom'
import Styles from './css/Header.module.css'
import Viagem from '../assets/viagens.jpg'
import Lupa from '../assets/lupa.png'


function Header() {

    return (

        <header>
            <img src={Viagem} alt="Logo" className={Styles.img_viagens} />
            <nav className={Styles.menuHeader}>
                <Link to='/'>Home</Link>
                <Link to='/Escocia'>Escócia</Link>
                <Link to='/GrandCanyon'>Grand Canyon</Link>
                <Link to='/MuralhaChina'>Muralha da China</Link>
                <Link to='/Aruba'>Aruba</Link>
            </nav>

            <div className={Styles.busca}>
                <input type="search" />
            </div>


            <img src={Lupa} alt="Lupa" className={Styles.lupa} />

        </header>


    )


}
export default Header