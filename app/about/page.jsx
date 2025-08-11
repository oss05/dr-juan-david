import Image from "next/image";
import Navbar from "../Components/Navbar";
import Container from "../Components/Container";
import ContactForm from "../Components/ContactForm";
import Footer from "../Components/Footer";
import AboutImage from "../assets/drjuanabout.png";
import ReferenceCard from "../Components/ReferenceCard";

const About = () => {
  return (
    <main>
      <Navbar />
      <Container bgColor="darkBlue">
        <h2 className="text-6xl md:text-7xl font-bold text-greige timeless">
          About
        </h2>
        <section className="flex flex-col md:flex-row mt-11">
          <article className="w-full md:w-9/12 mr-16">
            <h3 className="text-5xl md:text-6xl font-bold text-neutralSecondary timeless">
              My Background
            </h3>
            <p className="text-2xl mt-6 text-greige quicksand leading-relaxed">
              I'm a Latinx clinician with extensive education and clinical
              experience as a psychotherapist and social worker. I hold a
              Bachelor of Science degree from New York University, a Master of
              Science degree from Columbia University, and a Doctor of Social
              Work degree from the University of Southern California. Trained in
              various psychotherapeutic techniques, I aim to guide clients in
              their search for answers.
            </p>
          </article>
          <article className="w-full mt-4 md:w-3/12 md:-mt-32">
            <Image src={AboutImage} alt="about image" />
          </article>
        </section>
        <div className="mt-11">
          <h3 className="text-5xl md:text-6xl font-bold text-neutralSecondary timeless">
            My Style
          </h3>
          <p className="text-2xl mt-6 text-greige quicksand leading-relaxed">
            Clients often describe our sessions as conversations with a caring,
            knowledgeable friend—one who "keeps it real" and offers expertise in
            behavioral health. However, my focus is on you, your goals, and
            finding hope in challenging moments. As a proud second-generation
            Latinx individual, I prioritize respecting your unique
            intersectionality and advocate for decolonizing psychotherapy. In
            our sessions, you'll explore cognitive and relationship patterns
            with a well-trained, empathic person of color who understands the
            complex challenges we face daily. Together, we'll celebrate the
            beauty and power of your unique experiences and identity. Contact me
            to discuss the next steps—I look forward to speaking with you and
            supporting your journey toward healing and hope. I look forward to
            speaking.
          </p>
        </div>
      </Container>
      <Container className="py-7">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              <ReferenceCard
                title="Psychology Today Profile"
                link="https://www.psychologytoday.com/us/therapists/juan-david-rivera-del-valle-woodside-ny/296173"
              />
              <ReferenceCard
                title="Manhattan Alternative Profile"
                link="https://www.manhattanalternative.com/team/dr-juan-david-rivera-del-vale/"
              />
              <ReferenceCard
                title="Kink Aware Professionals"
                link="https://www.kapprofessionals.org/kap_directory/15673/juan-david-rivera-del-valle-lcsw/"
              />
            </div>
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

export default About;
