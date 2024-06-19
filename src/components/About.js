import Link from "next/link";

const About = () => {
  return (
    <>
      <section className="about-section" id="about-section">
        <div className="about-header">
          <h3 className="h-color">Porque usar o Russinho?</h3>
        </div>
        <div className="about-container">
          <div className="about-card">
            <div>
              <h4 className="h-color">⚡ Comandos</h4>
              <p className="p-color">
                Temos mais de 200 comandos para este bot.
              </p>
              <hr />
            </div>
            <div>
              <h4 className="h-color">✉️ Suporte 24/7</h4>
              <p className="p-color">
                Uma Variedade grande de suporte disponivel para ti.
              </p>
              <hr />
            </div>
            <div>
              <h4 className="h-color">✏️ Customization</h4>
              <p className="p-color">
                Bot facilmente costumizado!
              </p>
              <hr />
            </div>
          </div>
        </div>
        <p>
          <Link href="/commands" className="h-color no-decoration">
            Verifica os nossos comandos &rarr;
          </Link>
        </p>

        <section className="about-stats">
          <div className="about-stats-card">
            <h4 className="h-color">12</h4>
            <p className="p-color">Servidores Totais</p>
          </div>
          <div className="about-stats-card">
            <h4 className="h-color">8k+</h4>
            <p className="p-color">Usuarios Totais</p>
          </div>
          <div className="about-stats-card">
            <h4 className="h-color">375k+</h4>
            <p className="p-color">Comandos Utilizados</p>
          </div>
        </section>
      </section>
    </>
  );
};

export default About;
