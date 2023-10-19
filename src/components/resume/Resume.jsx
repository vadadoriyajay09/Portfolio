import React from "react";

const Resume = () => {
  return (
    <div id="resume" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Resume
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-700 font-medium w-[100%]">
          Here are my experiences and qualifications.
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Experience
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Frontend Developer
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Globalia Soft LLP
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  June 2020 - July 2021
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  During my one-year experience as a web designer at Globalia
                  Soft LLP, I gained valuable insights into the dynamic world of
                  web development. I honed my skills in creating visually
                  appealing and user-friendly websites, collaborated with
                  cross-functional teams to deliver projects, and learned to
                  adapt to evolving design trends and client requirements. This
                  experience deepened my understanding of the importance of
                  responsive design, usability, and effective communication in
                  delivering high-quality web solutions that meet both user
                  needs and business goals.
                </p>
              </div>
            </div>
             <div className=" relative mt-7">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Frontend Developer
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  codeline infotech
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  June 2021 - July 2022
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  During my one-year experience as a Frontend Developer at Codeline Infotech, I gained valuable insights into the dynamic world of web development. I honed my skills in crafting engaging and intuitive user interfaces, worked closely with cross-functional teams to implement web projects, and adapted to evolving design trends and client requirements. This experience deepened my understanding of the significance of responsive web design, user experience, and effective collaboration in delivering high-quality web solutions that align with both user needs and business objectives.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="right flex-1 flex items-start justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Education
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  B.Tech, Computer Science
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Gujarat University
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Year 2019 - Year 2023
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                  A Bachelor of Technology (B.Tech) in Computer Science graduate with a strong foundation in computer programming, algorithms, and software development. Proficient in a variety of programming languages and tools, with a passion for solving complex problems and creating innovative solutions. Adept at collaborating in interdisciplinary teams and adapting to emerging technologies, with a commitment to lifelong learning and professional growth.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;
