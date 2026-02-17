function Services() {
  return (
    <section className="services" id="servicios">

      <h2 data-aos="fade-up">Servicios</h2>

      <div className="services-grid">

        <div className="card" data-aos="fade-up">
          <img src="/services1.jpg" />
          <h3>Campamentos astronómicos</h3>
          <p>
            Experiencias completas con observación, charlas,
            acompañamiento y comida bajo uno de los mejores cielos del mundo.
          </p>
        </div>

        <div className="card" data-aos="fade-up">
          <img src="/services2.jpg" />
          <h3>Astroturismo y eventos</h3>
          <p>
            Organización de eventos astronómicos, retiros,
            observaciones guiadas y experiencias personalizadas.
          </p>
        </div>

        <div className="card" data-aos="fade-up">
          <img src="/services3.jpg" />
          <h3>Talleres y cursos</h3>
          <p>
            Talleres para niños y adultos, cursos de astronomía
            y actividades educativas para todos los niveles.
          </p>
        </div>

      </div>

    </section>
  )
}

export default Services
