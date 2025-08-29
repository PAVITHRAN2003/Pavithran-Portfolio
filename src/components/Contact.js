import React from "react";

function Contact() {
  return (
    <section 
      id="contact" 
      className="min-h-screen flex flex-col justify-center items-center bg-pink-50 py-20 px-6"
    >
      <div className="max-w-4xl w-full bg-pink-200 bg-opacity-90 rounded-3xl shadow-lg p-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-black">
          Contact
        </h2>
        <p className="mb-6 text-black text-lg md:text-xl text-center">
          You can reach me at:
        </p>
        <p className="mb-2 text-black text-lg md:text-xl text-center">
          Email: <a href="mailto:pavithrangnanasekaran@gmail.com" className="text-blue-600">pavithrangnanasekaran@gmail.com</a>
        </p>
        <p className="mb-2 text-black text-lg md:text-xl text-center">
          Phone: (716)-948-6114
        </p>
        <p className="mb-2 text-black text-lg md:text-xl text-center">
          LinkedIn: <a href="https://www.linkedin.com/in/pavithran-gnanasekaran-6a84622a2/" className="text-blue-600">Pavithran Gnanasekaran</a>
        </p>
        <p className="text-black text-lg md:text-xl text-center">
          GitHub: <a href="https://github.com/PAVITHRAN2003" className="text-blue-600">PAVITHRAN2003</a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
