import { useState } from "react";

const FAQ = ({ faqItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div onClick={()=>setIsOpen(!isOpen)} className="faq-container border-b-2 border-white border-solid pb-6 cursor-pointer ">
      <div className="question-container flex gap-x-6 justify-between">
        <div className="question font-bold">{faqItem.question}</div>
        <div className="expand">+</div>
      </div>
      {isOpen && <div className="answer">{faqItem.answer}</div>}
    </div>
  );
};

export default FAQ;
