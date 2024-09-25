import React from "react";

const Venue = () => {
  return (
    <div
      id="page5"
      className="w-full flex justify-center items-center h-screen"
    >
      <div className="md:w-[70%] m-3">
        <h1 className="text-4xl w-full mb-12">Venue</h1>
        <div className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1087.1118851564481!2d76.97857658187175!3d8.470231553187036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05baee56e6b99b%3A0x4ce024c88eb0ddcb!2sSree%20Chitra%20Thirunal%20College%20of%20Engineering%2C%20Thiruvananthapuram!5e0!3m2!1sen!2sin!4v1711636446051!5m2!1sen!2sin"
            width="600"
            height="450"
            // Source Stackoverflow
            style={{ border: 0, filter: "invert(90%)" }}
            // allowfullscreen={false}
            loading="lazy"
            className="w-full rounded-md mb-5"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>

          <p className="py-2">
            <strong>📌</strong>    Sree Chitra Thirunal College of
            Engineering, Thiruvananthapuram
          </p>

          <p className="py-2">
            <strong>📧</strong> mailtoieeesctsb@gmail.com
          </p>

          <p className="py-2">
            <strong>📞</strong>
            <a href="tel:+918075496634"> Nandagopan G : +91 7306702435</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Venue;
