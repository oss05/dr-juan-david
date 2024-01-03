import Image from "next/image";
import Navbar from "./Components/Navbar";
import Container from "./Components/Container";
import Button from "./Components/Button";
import Card from "./Components/Card";
import ContactForm from "./Components/ContactForm";
import Footer from "./Components/Footer";
import DrJuanHomeImage from "./assets/drjuanhome.png";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section>
        <h1 className="text-8xl font-bold">
          Dr. <br /> Juan David
        </h1>
        <p className="text-2xl">
          "It is time to decolonize therapy, people deserve a safe space
          affirmative of their unique individual intersectionality." <br />
          Dr. Juan-David Rivera-Del Valle LCSW, DSW
        </p>
        <Button />
      </section>
      <section>
        <Image src={DrJuanHomeImage} />
      </section>
      <Container bgColor="darkBlue">
        <h2 className="text-7xl font-bold text-neutralPrimary">My Approach</h2>
        <p className="text-2xl mt-6 text-neutralPrimary">
          In therapy, we will work collaboratively, utilizing a blend of
          cultural humility, intersectionality, psychodynamic theory, and other
          approaches to create a safe and respectful space that honors your
          unique individuality. We will affirm diverse relationship structures,
          sexuality, gender identity, and cultures and explore how they
          intersect with cognitive patterns. Together, we will address
          challenges such as anxiety, depression, conflicts, grief, trauma, and
          life changes, including gender transitions, among others. Join me on
          this journey of understanding, healing, and growth.
        </p>
      </Container>
      <Container>
        <h2 className="text-7xl font-bold text-greige">Services</h2>
        <div className="flex justify-between mt-6">
          <Card />
          <Card />
        </div>
      </Container>
      <Container bgColor="neutralPrimary">
        <h2 className="text-7xl font-bold text-greige">FAQs</h2>
      </Container>
      <Container>
        <ContactForm />
      </Container>
      <Footer />
    </main>
  );
}
