import { treatmentFaqs } from "@/content/site";
import { Reveal } from "@/components/reveal";

export function Faqs() {
  return (
    <section
      id="faqs"
      className="faq-editorial-section section-pad"
      aria-labelledby="faqs-heading"
    >
      <div className="container-site">
        <Reveal className="section-head faq-editorial-head">
          <p className="eyebrow">Patient FAQs</p>
          <h2 id="faqs-heading" className="heading-display heading-xl max-w-3xl">
            Simple answers to common surgical terms
          </h2>
          <p className="lede">
            These answers explain what the terms mean. A consultation is needed for advice
            about an individual condition.
          </p>
        </Reveal>

        <div className="section-content faq-editorial-list">
          {treatmentFaqs.map((item) => (
            <Reveal key={item.question}>
              <details className="faq-item">
                <summary className="faq-item__summary">
                  <span>{item.question}</span>
                  <span className="faq-item__mark" aria-hidden>
                    +
                  </span>
                </summary>
                <p className="faq-item__answer">{item.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
