import Image from "next/image";
import Navbar from "./Components/Navbar";
import Container from "./Components/Container";
import Button from "./Components/Button";
import Card from "./Components/Card";
import FAQs from "./Components/FAQs";
import ContactForm from "./Components/ContactForm";
import Footer from "./Components/Footer";
import DrJuanHomeImage from "./assets/drjuanhome.png";
import MyApproachImage from "./assets/heroImage.png";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Container>
        <section className="flex w-full">
          <article className="flex flex-col justify-center ">
            <h1 className="text-8xl font-bold">
              Dr. <br /> Juan David
            </h1>
            <p className="text-2xl">
              "It is time to decolonize therapy, people deserve a safe space
              affirmative of their unique individual intersectionality." <br />
              Dr. Juan-David Rivera-Del Valle LCSW, DSW
            </p>
            <Button />
          </article>
          <article>
            <Image src={DrJuanHomeImage} />
          </article>
        </section>
      </Container>

      <Container
        bgColor="bg-darkBlue"
        bg="bg-[url('./assets/herobackground.png')]"
        className="flex flex-col md:flex-row gap-8"
      >
        <section className="w-full md:w-9/12">
          <h2 className="text-6xl md:text-7xl font-bold text-neutralPrimary">
            My Approach
          </h2>
          <p className="text-2xl mt-7 text-neutralPrimary">
            In therapy, we will work collaboratively, utilizing a blend of
            cultural humility, intersectionality, psychodynamic theory, and
            other approaches to create a safe and respectful space that honors
            your unique individuality. We will affirm diverse relationship
            structures, sexuality, gender identity, and cultures and explore how
            they intersect with cognitive patterns. Together, we will address
            challenges such as anxiety, depression, conflicts, grief, trauma,
            and life changes, including gender transitions, among others. Join
            me on this journey of understanding, healing, and growth.
          </p>
        </section>
        <section className="w-full md:w-3/12 flex items-end">
          <Image src={MyApproachImage} className="w-full" />
        </section>
      </Container>

      <Container>
        <h2 className="text-6xl md:text-7xl font-bold text-greige">Services</h2>
        <div className="flex flex-col md:flex-row justify-between mt-7 gap-16">
          <Card bg="bg-[url('./assets/psychoterapyservicescard.png')]" />
          <Card bg="bg-[url('./assets/clinicalsupervisioncard.png')]" />
        </div>
      </Container>

      <Container bgColor="bg-neutralPrimary">
        <h2 className="text-6xl md:text-7xl font-bold text-greige">FAQs</h2>
        <FAQs />
      </Container>

      <Container>
        <ContactForm />
      </Container>

      <Footer />
    </main>
  );
}
