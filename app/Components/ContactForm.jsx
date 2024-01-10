"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import ContactFormImage from "../assets/contactform.jpg";

const ContactForm = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
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
          setSuccessMessage("Message sent successfully.");
          setFormData({
            user_name: "",
            user_email: "",
            message: "",
          });
          setTimeout(() => {
            setSuccessMessage("");
          }, 5000);
          console.log(result.text);
        },
        (error) => {
          setErrorMessage("An error occurred, try again.");
          console.log(error.text);
        }
      );
  };

  const handleData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="drop-shadow-[0_5px_20px_rgba(0,0,0,0.25)] rounded-xl">
      <div className="lg:w-full  bg-white flex flex-col md:flex-row md:ml-auto w-full md:mt-0 rounded-lg">
        <div className="w-full md:w-7/12 h-full rounded-lg">
          <Image
            src={ContactFormImage}
            className="w-full h-full rounded-t-lg md:rounded-tr-none md:rounded-s-lg"
            alt="contact image"
          />
        </div>
        <div className="lg:w-5/12 bg-white flex flex-col justify-center md:ml-auto w-full rounded-lg py-8  px-10">
          <h2 className="text-darkBlue text-4xl mb-1 font-medium title-font quicksand">
            Contact Form
          </h2>
          <p className="leading-relaxed mt-2 mb-5 text-gray-600 quicksand">
            Let's get in touch.
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
                value={formData.user_name}
                onChange={handleData}
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
                value={formData.user_email}
                onChange={handleData}
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
                value={formData.message}
                onChange={handleData}
                className="w-full bg-white rounded-lg border border-paleBlue  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              />
            </div>{" "}
            {successMessage && (
              <p className="mb-5 text-center text-success">{successMessage}</p>
            )}
            {errorMessage && (
              <p className="mb-5 text-center text-error">{errorMessage}</p>
            )}
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
