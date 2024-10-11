import React from 'react'
import AnimatedSection from './animated-section'



interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
    return (
      <div>
        <div className="inline-block rounded-lg bg-blue-600 p-3 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <h1 className="text-xl font-semibold text-gray-700 dark:text-white">{question}</h1>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">{answer}</p>
        </div>
      </div>
    );
  };

  
  const Faqs = () => {
    const faqData = [
      { question: "What can I expect at my first consultation?", answer: "Lorem ipsum dolor sit amet consectetur..." },
      { question: "What are your opening hours?", answer: "Lorem ipsum dolor sit amet consectetur..." },
      { question: "Do I need a referral?", answer: "Lorem ipsum dolor sit amet consectetur..." },
      { question: "Is the cost of the appointment covered by private health insurance?", answer: "Lorem ipsum dolor sit amet consectetur..." },
      { question: "What is your cancellation policy?", answer: "Lorem ipsum dolor sit amet consectetur..." },
      { question: "What are the parking and public transport options?", answer: "Lorem ipsum dolor sit amet consectetur..." }
    ];
  
    return (
      <AnimatedSection>
        <div className="container mx-auto px-6 py-28">
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Frequently asked questions.</h1>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mt-16 xl:grid-cols-3">
            {faqData.map((faq, index) => (
              <FaqItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </AnimatedSection>
    );
  };
  
export default Faqs;