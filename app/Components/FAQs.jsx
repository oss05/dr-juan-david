"use client";
import { useState } from "react";

const FAQs = () => {
  const [faqs, setFaqs] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
  });

  const handleFaqs = (faq) => {
    setFaqs({
      [faq]: !faqs[faq],
    });
  };

  const plusIcon = (
    <svg
      className="flex-shrink-0 w-8 h-8 text-beige"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20 12H4"
      />
    </svg>
  );

  const lessIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0 w-8 h-8 text-beige"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4v16m8-8H4"
      />
    </svg>
  );

  return (
    <section className="">
      <div className="container py-10 mx-auto">
        <hr className="my-6 border-gray-200 dark:border-gray-700" />
        <div>
          <div>
            <button
              className="flex items-center justify-between w-full focus:outline-none px-4"
              onClick={() => handleFaqs("first")}
            >
              <h2 className="md:mx-4 text-4xl font-bold text-beige text-left">
                Session fees
              </h2>
              {faqs.first ? plusIcon : lessIcon}
            </button>
            {faqs.first && (
              <div className="flex mt-8 md:mx-10">
                <p className="max-w-3xl px-4 text-beige text-2xl font-bold">
                  Out-of-Pocket individual sessions are $ 150 per session.
                </p>
              </div>
            )}
          </div>
          <hr className="my-8 border-gray-200 dark:border-gray-700" />
          <div>
            <button
              className="flex items-center justify-between w-full focus:outline-none px-4"
              onClick={() => handleFaqs("second")}
            >
              <h2 className="md:mx-4 text-4xl font-bold text-beige text-left">
                Insurance
              </h2>
              {faqs.second ? plusIcon : lessIcon}
            </button>
            {faqs.second && (
              <div className="flex mt-8 md:mx-10">
                <p className="max-w-3xl px-4 text-beige text-2xl font-bold">
                  I work with Horizon Blue Cross and Blue Shield, Cigna, Oscar,
                  HealthUnited Healthcare, Oxford, Aetna, Optum, Headway, and
                  Alma.
                </p>
              </div>
            )}
          </div>
          <hr className="my-8 border-gray-200 dark:border-gray-700" />
          <div>
            <button
              className="flex items-center justify-between w-full focus:outline-none px-4"
              onClick={() => handleFaqs("third")}
            >
              <h2 className="md:mx-4 text-4xl font-bold text-beige text-left">
                Sliding scale
              </h2>
              {faqs.third ? plusIcon : lessIcon}
            </button>
            {faqs.third && (
              <div className="flex mt-8 md:mx-10">
                <p className="max-w-3xl px-4 text-beige text-2xl font-bold">
                  In rare cases reduced fee sessions are offered.
                  <br /> They are income-based with extremely limited spaces.
                  <br /> Income and budgetary documentation are required to
                  qualify. <br />
                  <br /> *All sliding scale spaces are currently filled.
                </p>
              </div>
            )}
          </div>
          <hr className="my-8 border-gray-200 dark:border-gray-700" />
          <div>
            <button
              className="flex items-center justify-between w-full focus:outline-none px-4"
              onClick={() => handleFaqs("fourth")}
            >
              <h2 className="md:mx-4 text-4xl font-bold text-beige text-left">
                Cancelation fees
              </h2>
              {faqs.fourth ? plusIcon : lessIcon}
            </button>
            {faqs.fourth && (
              <div className="flex mt-8 md:mx-10">
                <p className="max-w-3xl px-4 text-beige text-2xl font-bold">
                  Cancelations without 48 hours' notice (via time-stamped email)
                  will be charged the cancelation fee which is the full price of
                  the session.
                </p>
              </div>
            )}
          </div>
          <hr className="my-8 border-gray-200 dark:border-gray-700" />
        </div>
      </div>
    </section>
  );
};

export default FAQs;
