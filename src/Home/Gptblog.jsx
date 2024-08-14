import React from "react";

const Gptblog = () => {
  return (
    <div className="mx-auto gptblog bg-fixed">
  <div className="bg-black opacity-70 h-screen w-screen px-6 md:px-16 lg:px-24 xl:px-48 py-20 md:py-40 lg:py-60">
    <div className="container mx-auto">
      <h1 className="text-2xl md:text-5xl lg:text-4xl xl:text-7xl font-bold text-one text-animation">
        Thinking Of Using GPT-3? Here Is a Crash Course
      </h1>
      <p className="text-white text-sm md:text-2xl lg:text-3xl mt-5 mb-5">
        Generative Pre-trained Transformer 3, aka GPT-3, is the latest state-of-the-art NLP model offered by OpenAI. In this article, you will learn how to make the most of the model and implement it in your product or personal project.
      </p>
      <p data-text="What makes me a credible source?" className="think text-xl md:text-3xl lg:text-4xl xl:text-5xl text-white mb-5 font-bold">
        What makes me a credible source?
      </p>
      <ol className="text-white text-sm md:text-lg lg:text-xl">
        <li>Machine learning practitioner for over 5 years.</li>
        <li>Have been using GPT-3 for over 1.5 years.</li>
        <li>Consulted 4 startups to integrate GPT-3 in their product and personally used it in many internal tools.</li>
        <li>Trained a similar model (GPT NeoX) from scratch.</li>
      </ol>
      <p className="text-white text-base md:text-lg lg:text-xl mt-4 mb-3">
        This is going to be a long article. If you're here, there's a good chance you might already know a few things that are mentioned in this article. There is a button to jump to a particular section at the bottom right. Feel free to use it. Nonetheless, I am sure you will learn something that you didn’t know before.
      </p>
      <h1 className="text-white text-xl md:text-3xl font-bold underline">
        So Let's Start
      </h1>
    </div>
  </div>
</div>

  );
};

export default Gptblog;
