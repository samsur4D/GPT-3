import React from "react";

const Gptblog = () => {
  return (
    <div className="mx-auto gptblog bg-fixed">
      <div className="bg-black opacity-70 px-96 max-w-full py-60">
        <h1 className="text-7xl font-bold text-one ">
          Thinking Of Using GPT 3? Here Is Crash Course
        </h1>
        <p className="text-white text-3xl mt-5 mb-5">
          Generative Pre-trained Transformer 3 aka GPT3 is the latest state of
          the art NLP model offered by OpenAI. In this article, you will learn
          how to make the most of the model and Implement it in your product or
          personal project.
        </p>
        <p className="text-5xl  text-white mb-5 font-bold">
          What makes me a credible source?
        </p>
        <ol className="text-white">
          <li>Machine learning practitioner for over 5 years.</li>
          <li>Have been using GPT 3 for over 1.5 years.</li>
          <li>
            Consulted 4 startups to integrate GPT 3 in their product and
            personally used it in a lot of internal tools.
          </li>
          <li>Trained a similar model(GPT NeoX) from scratch</li>
        </ol>
        <p>
          This is going to be a long article . If you are here there is a good
          chance you might already know a few things that are mentioned in this
          article. There is a button to Jump to a particular section at the
          right bottom feel free to use it. Nonetheless, I am sure you will
          learn something that you didn’t know before.
        </p>

        <h1 className="text-white text-3xl  font-bold underline">
          So Let's Start{" "}
        </h1>
      </div>
    </div>
  );
};

export default Gptblog;
