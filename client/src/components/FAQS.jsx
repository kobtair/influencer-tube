import FAQ from "./FAQ";

const FAQS = () => {
  const faqs = [
    {
      question: "How do I hire an influencer?",
      answer:
        "To hire an influencer, simply browse through our list of available influencers and select the one that best fits your campaign needs. You can then contact them directly through their profile page to discuss further details and arrangements.",
    },
    {
      question: "What types of influencers do you have?",
      answer:
        "We have a diverse range of influencers across various categories including fashion, beauty, fitness, travel, food, and more. You can explore our influencer directory to find the perfect match for your brand.",
    },
    {
      question: "Can I request a specific type of content from an influencer?",
      answer:
        "Yes, you can discuss your specific content requirements with the influencer you wish to hire. Whether it's a sponsored post, product review, story takeover, or any other form of collaboration, our influencers are flexible to accommodate your needs.",
    },
    {
      question: "How much does it cost to hire an influencer?",
      answer:
        "Influencer fees vary depending on factors such as their reach, engagement rate, and the scope of the collaboration. You can negotiate pricing directly with the influencer or refer to their profile for estimated rates.",
    },
    {
      question: "Do you offer influencer marketing strategy consultation?",
      answer:
        "Yes, we offer consultation services to help you strategize and plan your influencer marketing campaigns effectively. Our team can provide guidance on identifying the right influencers, setting campaign objectives, and maximizing ROI.",
    },
    {
      question: "How can I reach out to customer support?",
      answer:
        "If you have any questions or need assistance, our customer support team is here to help. You can contact us via email at support@example.com or by filling out the contact form on our website.",
    },
  ];

  return (
    <div className="faqs-container flex flex-col gap-y-8 items-center mt-20">
      <h2 className="text-5xl font-bold">FAQs</h2>
      <div className="faqs-wrap grid grid-cols-2 gap-x-20 gap-y-5">
        {
            faqs.map((faqItem, i)=>(
                <FAQ faqItem={faqItem} key={i} />
            ))
        }
      </div>

    </div>
  );
};

export default FAQS;
