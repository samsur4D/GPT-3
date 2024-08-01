import React from "react";
import rectangle from "../assets/Rectangle 17.png";
import feauters from "../assets/Feature Image.png";
import one from "../assets/Rectangle 22.png";
import two from "../assets/Rectangle 22 (1).png";
import three from "../assets/Rectangle 22 (2).png";
import four from "../assets/Rectangle 22 (3).png";
import five from "../assets/Rectangle 22 (4).png";

const Future = () => {
  return (
    <div className="future pt-12 pb-16  ">
      <div className=" flex flex-row justify-between container mx-auto gap-60">
        <div>
          <h1 className="text-4xl h-[200px] font-bold text-one">
            The Future is Now and <br /> You Just Need To Realize <br /> It.
            Step into Future Today & Make it Happen.
          </h1>
          <h3 className="text-orange-700">
            Request Early Access to Get Started
          </h3>
        </div>

        <div className="flex-col gap-20">
          <div>
            <img className="w-16 mb-3" src={rectangle} alt="" />
            <div className="flex gap-12 mb-12 items-center justify-between">
              <h2 className="text-xl font-semibold text-white">
                Improving end distrusts instantly{" "}
              </h2>
              <p className="text-lg text-gray-400">
                From they fine john he give of rich he. They age and draw mrs
                like. Improving end distrusts may instantly was household
                applauded.
              </p>
            </div>
          </div>
          {/* ----- */}
          <div>
            <div>
              <img className="w-16 mb-3" src={rectangle} alt="" />
              <div className="flex gap-20 mb-12 items-center justify-between">
                <h2 className="text-xl font-semibold text-white">
                  Become the tended active{" "}
                </h2>
                <p className="text-lg text-gray-400">
                  Considered sympathize ten uncommonly occasional assistance
                  sufficient not. Letter of on become he tended active enable
                  to.
                </p>
              </div>
            </div>
          </div>
          {/* ----- */}
          <div>
            <div>
              <img className="w-16 mb-3" src={rectangle} alt="" />
              <div className="flex gap-20 mb-12 items-center justify-between">
                <h2 className="text-xl font-semibold text-white">
                  Message or am nothing{" "}
                </h2>
                <p className="text-lg text-gray-400">
                  Led ask possible mistress relation elegance eat likewise
                  debating. By message or am nothing amongst chiefly address.
                </p>
              </div>
            </div>
          </div>
          {/* ----- */}
          <div>
            <div>
              <img className="w-16 mb-3" src={rectangle} alt="" />
              <div className="flex gap-28 mb-12 items-center justify-between">
                <h2 className="text-xl font-semibold text-white">
                  Really boy law county{" "}
                </h2>
                <p className="text-lg text-gray-400">
                  Really boy law county she unable her sister. Feet you off its
                  like like six. Among sex are leave law built now. In built
                  table in an rapid blush.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feauters  */}
      <div className="flex  items-center justify-between container mx-auto">
        <div data-aos="fade-right" className="basis-1/2">
          <img className="w-[45rem]" src={feauters} alt="" />
        </div>
        <div data-aos="fade-left" className="basis-1/2 flex justify-end">
           <div className="max-w-[600px]">
           <h3 className="text-[#71E5FF]">
            Request Early Access to Get Started
          </h3>
          <h1 className="text-5xl font-bold text-one my-5">
            The possibilities are beyond your imagination
          </h1>
          <p className="text-lg text-gray-300 mb-5">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <h3 className="text-[#71E5FF]">
            Request Early Access to Get Started
          </h3>
           </div>
        </div>
      </div>

      {/*  Register card */}

      <div className="register-card mt-32 rounded-lg container mx-auto px-60 py-10 flex items-center justify-between ">
        <div>
          <h3>Request Early Access to Get Started</h3>
          <h2 className="text-2xl font-bold">
            Register today & start exploring the endless possiblities.
          </h2>
        </div>
        <div>
          <button className="bg-black px-4 py-2 text-white font-semibold rounded-3xl">
            Get Started
          </button>
        </div>
      </div>

      {/* HAppen */}

      <div className="container mx-auto mt-60">
        <div className="text-animation">
          {" "}
          <h1 className="text-one text-6xl pb-3 font-bold mb-16">
            A lot is happening, <br />
            We are blogging about it.
          </h1>
        </div>

        <div className="flex gap-32">
          {/* card 1 */}
          <div className="w-[600px] h-[1000px]">
            <img className="w-[600px] h-[410px]" src={one} alt="" />
            <div className="bg-[#042C54] py-5 pb-5 px-5">
              <p className="text-white ">Sep 27 ,2022</p>
              <p className="text-white text-3xl font-bold mt-3">
                GPT-3 and Open AI is the future. Let us exlore how it is?
              </p>
              <p className="text-white mt-60 ">Read Full Article</p>
            </div>
          </div>
           {/* card 2, 3 */}
           <div className="">
           <div className="w-[400px] h-[330px] mb-32">
            <img className="w-[400px]" src={two} alt="" />
            <div className="bg-[#042C54] py-5 pb-5 px-5">
              <p className="text-white ">Sep 27 ,2022</p>
              <p className="text-white text-3xl font-bold mt-3">
                GPT-3 and Open AI is the future. Let us exlore how it is?
              </p>
              <p className="text-white  ">Read Full Article</p>
            </div>
           </div>
           <div className="w-[400px] h-[330px]">
            <img className="w-[400px]" src={three} alt="" />
            <div className="bg-[#042C54] py-5 pb-5 px-5">
              <p className="text-white ">Sep 27 ,2022</p>
              <p className="text-white text-3xl font-bold mt-3">
                GPT-3 and Open AI is the future. Let us exlore how it is?
              </p>
              <p className="text-white  ">Read Full Article</p>
            </div>
           </div>

           {/* card 4 , 5 */}
          
                 
           </div>
           <div className="">
           <div className="w-[400px] h-[330px] mb-32">
            <img className="w-[400px]" src={four} alt="" />
            <div className="bg-[#042C54] py-5 pb-5 px-5">
              <p className="text-white ">Sep 27 ,2022</p>
              <p className="text-white text-3xl font-bold mt-3">
                GPT-3 and Open AI is the future. Let us exlore how it is?
              </p>
              <p className="text-white  ">Read Full Article</p>
            </div>
           </div>
           <div className="w-[400px] h-[330px]">
            <img className="w-[400px]" src={five} alt="" />
            <div className="bg-[#042C54] py-5 pb-5 px-5">
              <p className="text-white ">Sep 27 ,2022</p>
              <p className="text-white text-3xl font-bold mt-3">
                GPT-3 and Open AI is the future. Let us exlore how it is?
              </p>
              <p className="text-white  ">Read Full Article</p>
            </div>
           </div>

           {/* card 4 , 5 */}
          
                 
           </div>

          {/* ------------------- */}
        </div>
      </div>
    </div>
  );
};

export default Future;
