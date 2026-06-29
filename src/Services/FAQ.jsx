import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import faqData from "../data/faqData";

export default function FAQ() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <span className="inline-block rounded-full bg-blue-100 px-5 py-2 text-blue-600 font-semibold">
            FAQ
          </span>

          <h2 className="mt-5 text-5xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-500">
            Find answers to the most common questions about our software
            development services.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          {faqData.map((item) => (
            <Accordion
              key={item.id}
              sx={{
                mb: 2,
                borderRadius: "18px",
                overflow: "hidden",
                boxShadow: "0 8px 25px rgba(0,0,0,.08)",
                "&:before": {
                  display: "none",
                },
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon color="primary" />}>
                <h3 className="text-lg font-semibold text-slate-800">
                  {item.question}
                </h3>
              </AccordionSummary>

              <AccordionDetails>
                <p className="leading-8 text-slate-600">{item.answer}</p>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}
