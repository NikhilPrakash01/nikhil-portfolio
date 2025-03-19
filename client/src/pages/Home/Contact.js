import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function Contact() {
  const { portfolioData } = useSelector((state) => state.root);
  const { contact } = portfolioData;

  return (
    <div>
      <SectionTitle title="Say Hello" />

      <div className="flex sm:flex-col items-center justify-between">
        <div className="flex flex-col">
          <p className="text-tertiary">{"{"}</p>
          {Object.keys(contact).map(
            (key) =>
              key !== "_id" && (
                <p className="ml-5">
                  <span className="text-tertiary">{key} : </span>{" "}
                  <span className="text-tertiary">{contact[key]}</span>
                </p>
              )
          )}
          <p className="text-tertiary">{"}"}</p>
        </div>

        <div className="h-[400px]">
          <DotLottieReact
      src="https://lottie.host/8391a1ba-7f5d-4f5c-9309-6cad3aa73367/2q83kjf1Jx.lottie"
      loop
      autoplay
    />
        </div>
      </div>
    </div>
  );
}

export default Contact;
