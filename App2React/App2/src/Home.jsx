import Styles from './css/Home.module.css'
import loja from './images/loja.jpg'
import violao from './images/violao.jpg'
import whats from './images/whatsapp.png'
import insta from './images/instagram.png'
import face from './images/facebook.png'

function Home() {

    return (
        <main>
            <section className={Styles.sec1}>
                <div className={Styles.boxes}>
                    <h3> Nossa Loja -  Instrumentos Musicais </h3>
                    <p>Se você é um amante da música, está em busca de um novo instrumento musical e não abre mão da qualidade, chegou ao lugar certo! Aqui em nossa loja você encontra os melhores itens, como: teclado, piano (digital e acústico), contrabaixo, bateria, guitarra, violão, sopro e muito mais! Nossos instrumentos possuem o selo de qualidade das melhores marcas do mercado! Escolha os seus favoritos e os receba em casa com toda a comodidade que você precisa. Confira nossas opções disponíveis e tenha em mãos instrumentos de ponta!</p>
                </div>
                <div className={Styles.boxes}> <img className={Styles.imgbox} src={loja} alt="Interior da Loja de Instrumentos" /> </div>
            </section>

            <section className={Styles.sec2}>

                <div className={Styles.cards}>
                    <img className={Styles.imgcard} src={violao} alt="Violão Yamaha C70 II Clássico" />
                    <h4> VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE </h4>
                    <h5> R$ 989,50 </h5>
                </div>
                <div className={Styles.cards}>
                    <img className={Styles.imgcard} src={violao} alt="Violão Yamaha C70 II Clássico" />
                    <h4> VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE </h4>
                    <h5> R$ 989,50 </h5>
                </div>
                <div className={Styles.cards}>
                    <img className={Styles.imgcard} src={violao} alt="Violão Yamaha C70 II Clássico" />
                    <h4> VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE </h4>
                    <h5> R$ 989,50 </h5>
                </div>
                <div className={Styles.cards}>
                    <img className={Styles.imgcard} src={violao} alt="Violão Yamaha C70 II Clássico" />
                    <h4> VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE </h4>
                    <h5> R$ 989,50 </h5>
                </div>

            </section>

            <section className={Styles.sec1}>
                <div className={Styles.boxes}>

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.122569257646!2d-46.69439032388191!3d-23.528093578822727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef87505aee2fb%3A0xcdf6c5070269884e!2sR.%20Tito%2C%2054%20-%20Vila%20Romana%2C%20São%20Paulo%20-%20SP%2C%2005051-000!5e0!3m2!1spt-BR!2sbr!4v1760022808586!5m2!1spt-BR!2sbr"
                        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
                <div className={Styles.boxes}>
                    <h3> Nossa Loja -  Instrumentos Musicais </h3>
                    <p> Está situada na Rua Tito, 54 - Pompéia, próximo ao teatro Cacilda Becker, em uma construção do século XIX, numa área de 500m², com uma variada gama de instrumentos, em um ambiente agradável para toda a família!</p>
                </div>
            </section>

            <section className={Styles.sec3}>
                <form>

                    <label htmlFor="nome">Entre com o seu nome:</label> <br />
                    <input type="text" id="nome" placeholder="Digite seu nome aqui" /> <br />


                    <label htmlFor="email">Entre com o seu email:</label> <br />
                    <input type="email" id="email" placeholder="Digite seu email aqui" /> <br />


                    <label htmlFor="pedido">Faça seu pedido ou deixe sua mensagem:</label> <br />
                    <textarea id="pedido" placeholder="Faça seu pedido por aqui"></textarea> <br />

                    <input type="submit" value="Enviar" className="botao_enviar" />
                </form>
                <div className={Styles.redesociais}>
                 <h2>Acesse também nossas redes sociais:</h2>
            <nav>
                <a href="#"><img className={Styles.imgsec3} src={whats} alt="Whatsapp" /></a>
                <a href="#"><img className={Styles.imgsec3} src={insta} alt="Instagram" /></a>
                <a href="#"><img className={Styles.imgsec3} src={face} alt="Facebook" /></a>
                
            </nav>

            </div>


            </section>
            
        </main>
    )
}
export default Home