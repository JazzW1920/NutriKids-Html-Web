import {} from 'react';
import './style.css';


function Home() {
  

  return (
    <>
      <header class="container-fluid">
        <div class="logo-container">
          <h1>NutriKids</h1>
          <h3>Global Solucion - Engenharia de Software</h3>
        </div>
      </header>
      <body>
        <div className="container">
          <div className="box box1"></div>
          <div className="box box2">
            <h3>O que é a solução</h3>
            <p>Nossa solução visa, através do aplicativo interativo, instruir e ensinar crianças e pais a como se alimentar de uma forma saudável, evitando assim a obesidade infantil e outros problemas como diabetes e hipertensão.</p>
          </div>
          <div className="box box3">
            <h3>O que ele fará</h3>
            <p>O nosso aplicativo terá jogos que ensinam sobre educação alimentar, além de listas diárias que poderão ser completadas com os alimentos que foram experimentados naquele dia. Tanto os jogos quanto as listas vão armazenar pontos para as crianças. Quanto mais pontos, mais saudável está.</p>
          </div>
          <div className="box box4">
            <h1>NutriKids</h1>
          </div>
          <div className="box box5">
            <h4 className=''>Um aplicativo educativo e interativo que ensina as crianças a se alimentarem de forma saudável, evitando assim problemas relacionados à obesidade infantil.</h4>
            <button className="btn" type="submit">
              Mais Informações
            </button>
          </div>
          <div className="box box6">
            <h3>Como funcionará</h3>
            <p>As crianças apenas precisarão se registrar no site para conseguir fazer o login. Assim que tiverem sua conta, poderão começar a jogar os jogos e aproveitar de uma alimentação e uma vida mais saudável.</p>
          </div>
        </div>

        <main>
          <div id="areas" className="container">
            <div className="main-container">
              <div className="row" style={{ padding: '40px' }}>
                <div className="col-12 col-lg-4">
                  <div className="cards text-center card-item">
                    <div className="card-body">
                      <h3 className="card-title my-5">Prevenção de Doenças</h3>
                      <p className="card-text mt-5">Ajuda na prevenção de doenças causadas pela obesidade infantil, como a diabetes e a hipertensão.</p>
                      <img src="/src/assets/imgs/fruta.png" alt="Tigela com frutas" className="photo"/>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="cards text-center card-item">
                    <div className="card-body">
                      <h3 className="card-title my-5">Controle Alimentar</h3>
                      <p className="card-text mt-5">Através dos jogos será possível fazer o controle alimentar, para que as crianças aumentem o consumo de alimentos saudáveis.</p>
                      <img src="/src/assets/imgs/time.png" alt="Cronômetro para de alimentar" className="photo" />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="cards text-center card-item">
                    <div className="card-body">
                      <h3 className="card-title my-5">Melhora na Qualidade de Vida</h3>
                      <p className="card-text mt-5">Desta forma, com uma alimentação mais saudável, as crianças também terão uma qualidade de vida melhor.</p>
                      <img src="/src/assets/imgs/life.png" alt="Crianças batendo as mãos" className="photo" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </body>
    </>
    );
}

export default Home