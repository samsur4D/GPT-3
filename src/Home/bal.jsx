import React from 'react';

const bal = () => {
    return (
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
    );
};

export default bal;