import Image from "next/image";
import Navbar from "../Components/Navbar";
import Container from "../Components/Container";
import ContactForm from "../Components/ContactForm";
import Footer from "../Components/Footer";
import Service1 from "../assets/psychoterapyservices.png";
import Service2 from "../assets/clinicalsupervision.png";

const Services = () => {
  return (
    <main>
      <Navbar />
      <Container bgColor="bg-neutralPrimary">
        <h2 className="text-6xl md:text-7xl font-bold text-greige timeless">
          Services
        </h2>
        <h3 className="text-5xl md:text-6xl font-bold text-beige mt-11 timeless">
          Areas of Expertise
        </h3>
        <p className="text-2xl mt-6 text-greige quicksand leading-relaxed">
          My professional experience includes psychotherapy with people of all
          ages along the spectrum of diagnoses and levels of symptom severity. I
          am a psychotherapist who has dedicated my life and clinical experience
          to serving all people. However, my expertise is providing BIPOC,
          Queer, Gender, Transgender, Neurodiverse, and LGBTQ2AI+ affirmative,
          Kink-Aware psychotherapy. We all need a safe space and that’s what I
          do my best to offer clients from all walks of life.
        </p>
      </Container>
      <Container bgColor="bg-neutralPrimary">
        <section>
          <article className="flex flex-col md:flex-row-reverse">
            <div className="w-full md:w-5/12 mr-8">
              <h3 className="text-4xl md:text-5xl font-bold text-beige timeless">
                Psychotherapy <br /> Services
              </h3>
              <p className="text-2xl text-greige mt-5 quicksand leading-relaxed">
                I offer psychodynamically informed, evidence-based, culturally
                and gender-affirming psychotherapy for adults and partners of
                all related structures.
                <br />
                <br /> I work with Horizon Blue Cross and Blue Shield, Cigna,
                Oscar, HealthUnited Healthcare, Oxford, Aetna, and Optum through
                Headway. I also offer sliding scale fees based on a thorough
                assessment of your financial situation. <br />
                <br /> Sessions are 100% online.
              </p>
            </div>
            <div className="w-full mt-4 md:mt-0 md:w-7/12">
              <Image src={Service1} />
            </div>
          </article>
        </section>

        <section className="flex flex-col md:flex-row justify-between mt-12">
          <div className="w-full md:w-5/12 mr-8">
            <h3 className="text-4xl md:text-5xl font-bold text-beige timeless">
              Consultation and <br /> Clinical Supervision
            </h3>
            <p className="text-2xl text-greige mt-5 quicksand leading-relaxed">
              I am available for consultation services. <br /> I also offer
              clinical supervision for aspiring LCSW’s and licensed clinicians
              in private practice.
            </p>
          </div>
          <div className="w-full mt-4 md:mt-0 md:w-7/12">
            <Image src={Service2} className="w-full" />
          </div>
        </section>
      </Container>
      <Container bgColor="darkBlue">
        <ContactForm />
      </Container>
      <Footer />
    </main>
  );
};

export default Services;
