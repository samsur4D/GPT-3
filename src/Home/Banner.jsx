import React, { useState } from "react";
import bannerpic from "../assets/Header Illustration.png";
import people from "../assets/Group 81.png";
import google from "../assets/google.png";
import slack from "../assets/slack.png";
import atlas from "../assets/atlassian.png";
import dropbox from "../assets/dropbox.png";
import shop from "../assets/shopify.png";
import rectangle from "../assets/Rectangle 17.png";

const Banner = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section className="banner py-10">
      {/* <nav className="container mx-auto flex justify-between ">
          <div className="flex gap-32 items-center">
            <div>
              <h1 className="text-2xl lg:text-4xl font-bold text-white">GPT-3</h1>
            </div>
            <div className="flex ">
              <ul className="flex gap-10 text-white text-xl">
                <li>Home</li>
                <li>what is GPT?</li>
                <li>Open A!</li>
                <li>Case Studies</li>
                <li>Library</li>
              </ul>
            </div>
          </div>

          <div className="flex  lg:block items-center gap-15">
            <button className="text-white font-semibold px-6 py-2 rounded-md">
              Sign In
            </button>
            <button className="bg-orange-700 text-white font-semibold px-6 py-2 rounded-md">
              Sign Up
            </button>
          </div>
        </nav> */}
        {/* ____________________________ */}
        {/* PC Banner and tablet banner */}
        <div className="container mx-auto flex flex-col  md:flex-row  lg:flex-row items-center px-4 md:px-0 lg:px-0 py-8 md:py-0 lg:py-0">
          <div className="">
            <h1 className="text-one text-4xl md:text-5xl lg:text-7xl text-white font-bold mb-12">
              Let’s Build Something amazing with GPT-3 OpenAI
            </h1>
            <p className="text-white text-sm md:text-xl lg:text-xl mb-8">
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything joy
              alteration boisterous the attachment. Party we years to order
              allow asked of.
            </p>
            <div className="mb-5 h-12 flex">
              <input
                className="bg-white opacity-25 w-96 px-10 rounded-l-md"
                placeholder="Your Email Address"
                type="email"
              ></input>
              <button className="bg-orange-700 text-white font-semibold px-6 rounded-r-md ">
                Get started
              </button>
            </div>

            <div className="flex-1 items-center text-white gap-8">
              <img src={people} alt="" />
              <p>1,600 people requested access a visit in last 24 hours</p>
            </div>
          </div>
          <div>
            <img
              className="md:mx-10 lg:mx-32 md:w-[1090px] lg:w-[1500px] md:h-[500px] lg:h-[720px]"
              src={bannerpic}
              alt=""
            />
            <p></p>
          </div>
        </div>


        {/* ____________________________ */}
        <div className=" flex lg:flex-row items-center container mx-auto justify-center gap-28 py-20">
          <img src={google} alt="" />
          <img src={slack} alt="" />
          <img src={atlas} alt="" />
          <img src={dropbox} alt="" />
          <img src={shop} alt="" />
        </div>
        {/* ____________________________ */}
        <div className="what-is-gtp  px-32 pt-20 container mx-auto">
          <img className="w-16 mb-3" src={rectangle} alt="" />
          <div className="flex justify-between gap-96 mb-24 ">
            <h1 className="w-[700px] text-3xl font-bold text-white">
              What is GPT-3
            </h1>
            <p className="text-[#A681DD]">
              We so opinion friends me message as delight. Whole front do of
              plate heard oh ought. His defective nor convinced residence own.
              Connection has put impossible own apartments boisterous. At
              jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by.
            </p>
          </div>
          <div className="flex justify-between gap-96 mb-24">
            <h1 className="possibilities text-5xl font-bold">
              The possibilities are beyond your imagination
            </h1>
            <h5 className="w-[200px] text-orange-600">Explore The Library</h5>
          </div>
          <div className="flex justify-center gap-16 pb-24">
            <div>
              <img className="w-16 mb-3" src={rectangle} alt="" />
              <div>
                <h2 className="text-3xl font-bold text-white mb-10">
                  Chatbots
                </h2>
                <p className="text-[#A681DD]">
                  We so opinion friends me message as delight. Whole front do of
                  plate heard oh ought.{" "}
                </p>
              </div>
            </div>
           <div>
           <img className="w-16 mb-3" src={rectangle} alt="" />
           <div>
              <h2 className="text-3xl font-bold text-white mb-10">
                Knowledgebase
              </h2>
              <p className="text-[#A681DD]">
                At jointure ladyship an insisted so humanity he. Friendly
                bachelor entrance to on by. As put impossible own apartments b
              </p>
            </div>
           </div>
          <div>
          <img className="w-16 mb-3" src={rectangle} alt="" />
          <div>
              <h2 className="text-3xl font-bold text-white mb-10">Education</h2>
              <p className="text-[#A681DD]">
                At jointure ladyship an insisted so humanity he. Friendly
                bachelor entrance to on by. As put impossible own apartments b
              </p>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
