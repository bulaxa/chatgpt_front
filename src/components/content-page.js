import React from "react";

export function Top() {
  return (
    <div className="container mx-auto flex justify-center pt-6">
      <div className="text-center pb-1">
        <h1
          className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
          data-aos="zoom-y-out"
        >
          ChatGpt em texto e áudio
        </h1>
        <div className="max-w-3xl mx-auto">
          <p
            className="text-xl text-gray-600 mb-8"
            data-aos="zoom-y-out"
            data-aos-delay="150"
          >
            Faça sua pergunta para o ChatGpt e receba a resposta em texto e
            áudio
          </p>
        </div>
      </div>
    </div>
  );
}

ResultText.propTypes = {
  setMessage: "",
};

export function ResultText({ setMessage }) {
  if (!setMessage) {
    return null;
  }
  return (
    <div className="container mx-auto flex justify-center pt-6">
      <div className="max-w-sm rounded overflow-hidden shadow-md bg-slate-50">
        <div className="p-6">
          <p className="text-gray-500 font-medium text-base">{setMessage}</p>
        </div>
      </div>
    </div>
  );
}
