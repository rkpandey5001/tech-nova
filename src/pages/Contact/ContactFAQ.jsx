import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "How long does it take to develop a website?",
    answer:
      "Most business websites take between 2–6 weeks depending on the project scope.",
  },
  {
    question: "Do you provide mobile app development?",
    answer:
      "Yes. We build Android, iOS and cross-platform Flutter applications.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes, we offer maintenance, updates and technical support after deployment.",
  },
  {
    question: "Can you develop custom ERP software?",
    answer:
      "Yes. We build Hospital ERP, School ERP, HRMS, Inventory and other custom business software.",
  },
];

export default function ContactFAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-24">

      <div className="container mx-auto max-w-4xl px-5">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-blue-700 font-semibold">
            FAQ
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Frequently Asked Questions
          </h2>

        </div>

        <div className="mt-16 space-y-5">

          {faqs.map((item, index) => (

            <div
              key={index}
              className="rounded-2xl border border-slate-200"
            >

              <button
                onClick={() => setActive(active === index ? -1 : index)}
                className="flex w-full items-center justify-between p-6 text-left"
              >

                <h3 className="text-lg font-semibold">
                  {item.question}
                </h3>

                {active === index ? <FaMinus /> : <FaPlus />}

              </button>

              {active === index && (

                <div className="px-6 pb-6 text-slate-600 leading-7">

                  {item.answer}

                </div>

              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}