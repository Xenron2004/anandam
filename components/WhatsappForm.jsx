"use client";
import React, { useRef } from "react";

const WhatsappForm = () => {
  const form = useRef();

  const sendMessage = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const name = formData.get("name");
    const mobile = formData.get("mobile");
    const email = formData.get("email");
    const address = formData.get("address");
    const profession = formData.get("profession");
    const message = formData.get("message");

    const whatsappMessage = `
      Name: ${name}
      Mobile: ${mobile}
      Email: ${email}
      Address: ${address}
      Profession: ${profession}
      Message: ${message}
    `;

    const whatsappNumber = "7870754611"; // Replace with your WhatsApp number
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank");

    e.target.reset();
  };

  return (
    <div className="max-w-[632px] mx-auto p-4">
      <h2 className="text-[30px] font-saira font-medium mb-2">
        Fill the form below
      </h2>
      <p className="text-[18px] text-gray-600 font-manrope mb-4">
        Reach out to us for inquiries, support, or feedback. We're here to help.
      </p>
      <form ref={form} onSubmit={sendMessage} className="space-y-4">
        <div className="">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full max-w-[632px] p-2 border outline-primary border-gray-300"
          />
        </div>
        <div>
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            required
            className="w-full max-w-[632px] p-2 border outline-primary border-gray-300"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full max-w-[632px] p-2 border outline-primary border-gray-300"
          />
        </div>
        <div>
          <input
            type="text"
            name="address"
            placeholder="Address"
            required
            className="w-full max-w-[632px] p-2 border outline-primary border-gray-300"
          />
        </div>
        <div>
          <input
            type="text"
            name="profession"
            placeholder="Work / Profession"
            required
            className="w-full max-w-[632px] p-2 border outline-primary border-gray-300"
          />
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Enter your requirements here"
            required
            className="w-full max-w-[632px] h-[190px] outline-primary p-2 border border-gray-300"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-primary outline-primary text-white py-2 rounded hover:bg-yellow-600"
        >
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
};

export default WhatsappForm;
