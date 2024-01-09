"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Components/Navbar";
import Container from "./Components/Container";
import Card from "./Components/Card";
import FAQs from "./Components/FAQs";
import ContactForm from "./Components/ContactForm";
import Footer from "./Components/Footer";
import DrJuanHomeImage from "./assets/drjuanhome.png";
import MyApproachImage from "./assets/heroImage.png";

export default function Home() {
  const myRef = useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView();

  return (
    <main>
      <Navbar />
      <Container className="lg:pb-0">
        <section className="flex w-full lg:h-[calc(100vh-200px)]">
          <article className="flex flex-col lg:pl-20 w-full lg:w-6/12">
            <h1 className="text-7xl lg:text-8xl font-bold text-gray mb-4 lg:mb-0 timeless">
              Dr. <br /> Juan David
            </h1>
            <article className="bg-paleBlue w-flex flex justify-end md:hidden">
              <Image src={DrJuanHomeImage} />
            </article>
            <p className="text-2xl mt-7 tracking-[0.39px] leading-relaxed quicksand">
              "It is time to decolonize therapy, people deserve a safe space
              affirmative of their unique individual intersectionality." <br />
              Dr. Juan-David Rivera-Del Valle LCSW, DSW
            </p>
            <button
              type="submit"
              onClick={executeScroll}
              className="text-white bg-darkBlue lg:ml-20 border-0 py-5 px-6 focus:outline-none hover:bg-indigo-600 rounded-lg text-4xl mt-7 w-80 mx-auto timeless"
            >
              Contact me
            </button>
          </article>
          <article className="bg-paleBlue w-9/12 md:flex justify-end absolute top-52 md:top-0 right-0 -z-10 hidden">
            <Image src={DrJuanHomeImage} />
          </article>
        </section>
      </Container>

      <Container
        bgColor="bg-darkBlue"
        bg="bg-[url('./assets/herobackground.png')]"
        className="flex flex-col lg:flex-row gap-8"
      >
        <section className="w-full lg:w-9/12">
          <h2 className="text-6xl lg:text-7xl font-bold text-neutralPrimary timeless">
            My Approach
          </h2>
          <p className="text-2xl mt-7 text-neutralPrimary tracking-[0.39px] leading-relaxed pr-8 quicksand">
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
        <section className="w-full lg:w-3/12 flex items-end">
          <Image src={MyApproachImage} className="w-full" />
        </section>
      </Container>

      <Container className="pb-12">
        <h2 className="text-6xl lg:text-7xl font-bold text-greige timeless">
          Services
        </h2>
        <div className="flex flex-col lg:flex-row justify-between mt-6 lg:mt-14 gap-8 lg:gap-16">
          <Card bg="bg-[url('./assets/psychoterapyservicescard.png')]" />
          <Card bg="bg-[url('./assets/clinicalsupervisioncard.png')]" />
        </div>
        <div className="flex justify-center w-full">
          <Link href="/services">
            <button
              type="submit"
              className="text-white bg-darkBlue border-0 py-5 focus:outline-none hover:bg-indigo-600 rounded-lg text-4xl mt-12 w-96 mx-auto timeless"
            >
              See more
            </button>
          </Link>
        </div>
      </Container>

      <Container bgColor="bg-neutralPrimary">
        <h2 className="text-6xl lg:text-7xl font-bold text-greige timeless">
          FAQs
        </h2>
        <FAQs />
      </Container>

      <Container>
        <div ref={myRef}>
          <ContactForm />
        </div>
      </Container>

      <Footer />
    </main>
  );
}
