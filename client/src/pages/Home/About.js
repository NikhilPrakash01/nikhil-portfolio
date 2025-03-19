import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function About() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { about } = portfolioData;
  const { skills, imageURL, description1, description2 } = about;
  return (
    <div>
      <SectionTitle title="About" />

      <div className="flex w-full items-center justify-center px-10 py-10 sm:flex-col sm:px-6 sm:py-6 gap-4">
        <div className="flex justify-center items-center w-1/2 sm:w-full">
          <img
            src={imageURL || "/images/np.jpg"}
            alt="img"
            className="w-[300px] h-[300px]"
          />
        </div>

        {/* Right Side - About Text */}
        <div className="flex flex-col gap-5 w-1/2 sm:w-full text-white">
          <p>{description1 || ""}</p>
          <p>{description2 || ""}</p>
        </div>
      </div>

      <div className="py-5">
        <h1 className="text-tertiary text-xl">
          I've recently been working with a variety of technologies, including:
        </h1>
        <div className="flex flex-wrap gap-10 mt-5">
          {skills.map((skill, index) => (
            <div className="border border-tertiary py-3 px-10">
              <h1 className="text-tertiary">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
