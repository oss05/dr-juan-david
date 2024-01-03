import Navbar from "../Components/Navbar";
import Container from "../Components/Container";

const Services = () => {
  return (
    <main>
      <Navbar />
      <Container bgColor="darkBlue">
        <h2 className="text-7xl font-bold text-neutralPrimary">Services</h2>
        <h3 className="text-6xl font-bold text-neutralPrimary">
          Areas of Expertise
        </h3>
        <p className="text-2xl mt-6 text-neutralPrimary">
          My professional experience includes psychotherapy with people of all
          ages along the spectrum of diagnoses and levels of symptom severity. I
          am a psychotherapist who has dedicated my life and clinical experience
          to serving all people. However, my expertise is providing BIPOC,
          Queer, Gender, Transgender, Neurodiverse, and LGBTQ2AI+ affirmative,
          Kink-Aware psychotherapy. We all need a safe space and that’s what I
          do my best to offer clients from all walks of life.
        </p>
      </Container>
      <Container bgColor="darkBlue">
        <section>
          <article>
            <div>
              <h3>Psychotherapy Services</h3>
              <p>
                I offer psychodynamically informed, evidence-based, culturally
                and gender-affirming psychotherapy for adults and partners of
                all related structures. I work with Horizon Blue Cross and Blue
                Shield, Cigna, Oscar, HealthUnited Healthcare, Oxford, Aetna,
                and Optum through Headway. I also offer sliding scale fees based
                on a thorough assessment of your financial situation. Sessions
                are 100% online.
              </p>
            </div>
            <div></div>
          </article>
        </section>
        <section>
          <article>
            <div>
              <h3>Consultation and Clinical Supervision</h3>
              <p>
                I am available for consultation services. I also offer clinical
                supervision for aspiring LCSW’s and licensed clinicians in
                private practice.
              </p>
            </div>
            <div></div>
          </article>
        </section>
      </Container>
      <Container bgColor="darkBlue">contact form</Container>
    </main>
  );
};

export default Services;
