import React from "react";
import bannerpic from "../assets/Header Illustration.png";
import people from "../assets/Group 81.png";

const Banner = () => {
  return (
    <>
      <section className="banner py-10">
        <nav className="container mx-auto flex justify-between ">
          <div className="flex gap-32 items-center">
            <div>
              <h1 className="text-4xl font-bold text-white">GPT-3</h1>
            </div>
            <div className="flex">
              <ul className="flex gap-10 text-white text-xl">
                <li>Home</li>
                <li>what is GPT?</li>
                <li>Open A!</li>
                <li>Case Studies</li>
                <li>Library</li>
              </ul>
            </div>
          </div>

          <div className="flex items-center  gap-15">
            <button className="text-white font-semibold px-6 py-2 rounded-md">
              Sign In
            </button>
            <button className="bg-orange-700 text-white font-semibold px-6 py-2 rounded-md">
              Sign Up
            </button>
          </div>
        </nav>
        {/* ____________________________ */}
        <div className="container mx-auto flex items-center">
          <div>
            <h1 className="text-one text-7xl text-white font-bold mb-12">
              Let’s Build Something amazing with GPT-3 OpenAI
            </h1>
            <p className="text-white text-x mb-8">
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything joy
              alteration boisterous the attachment. Party we years to order
              allow asked of.
            </p>
            <div className="mb-5 h-12 flex">
              {/* <textare* className="w-96 bg-white opacity-20 " placeholder="Your Email Address" name="" id=""></textare*/}
               <input className="bg-white opacity-25 w-96 px-10 rounded-l-md" placeholder="Your Email Address"  type="email"></input>
              <button className="bg-orange-700 text-white font-semibold px-6 rounded-r-md ">
                Get started
              </button>
            </div>

            <div className="flex items-center text-white gap-8">
              <img src={people} alt="" />
              <p>1,600 people requested access a visit in last 24 hours</p>
            </div>
          </div>
          <div>
            <img
              className="mx-32 w-[1500px] h-[720px]"
              src={bannerpic}
              alt=""
            />
            <p></p>
          </div>
        </div>
        {/* ____________________________ */}
      </section>
    </>
  );
};

export default Banner;
