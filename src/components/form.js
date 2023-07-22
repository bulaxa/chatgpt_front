/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from "react";

Form.propTypes = {
  resultData: "",
};

export function Form({ resultData }) {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <form className="w-full ">
      <div className="flex flex-wrap justify-center pb-6">
        <textarea
          id="message"
          rows="4"
          className="block p-2.5 w-3/4 md:w-2/4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Escreva o texto aqui..."
          onChange={handleChange}
          defaultValue={message}
        ></textarea>
      </div>

      <div className="flex justify-center mb-6">
        <button
          onClick={() => resultData(message)}
          className="shadow 
      bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="button"
        >
          Transformar
        </button>
      </div>
    </form>
  );
}
