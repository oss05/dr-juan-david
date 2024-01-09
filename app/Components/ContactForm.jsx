"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import ContactFormImage from "../assets/contactform.png";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y5n1hxv",
        "template_o06w979",
        form.current,
        "jQ9yDHO6HpmCCmSlx"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="drop-shadow-[0_5px_20px_rgba(0,0,0,0.25)] rounded-xl">
      <div className="lg:w-full md:w-1/2 bg-white flex flex-col md:flex-row md:ml-auto w-full md:mt-0 rounded-lg">
        <div className="w-full md:w-7/12 h-full rounded-lg">
          <Image src={ContactFormImage} className="w-full h-full" />
        </div>
        <div className="lg:w-5/12 bg-white flex flex-col justify-center md:ml-auto w-full rounded-lg py-8 md:py-0  px-10">
          <h2 className="text-darkBlue text-4xl mb-1 font-medium title-font quicksand">
            Contact Form
          </h2>
          <p className="leading-relaxed mt-2 mb-5 text-gray-600 quicksand">
            Let's get in touch or get your appointment.
          </p>
          <form ref={form} onSubmit={sendEmail}>
            <div className="relative mb-4">
              <label
                htmlFor="name"
                className="leading-7 text-sm text-darkBlue quicksand"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                className="w-full bg-white rounded-lg border border-paleBlue focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-darkBlue py-1 px-3 leading-8 transition-colors duration-200 ease-in-out h-12"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-darkBlue quicksand"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                className="w-full bg-white rounded-lg border border-paleBlue focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-darkBlue py-1 px-3 leading-8 transition-colors duration-200 ease-in-out h-12"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-darkBlue quicksand"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded-lg border border-paleBlue  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                defaultValue={""}
              />
            </div>
            <button
              type="submit"
              className="text-white bg-darkBlue w-full border-0 py-3 px-6 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg quicksand"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
