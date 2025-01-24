// "use client";
// import React, { useRef } from "react";
// import emailjs from "emailjs-com";

// const ContactForm = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//        "service_mt3b6ct", // Replace with your EmailJS Service ID
//         "template_1dmtjr8", // Replace with your EmailJS Template ID
//         form.current,
//         "YDb-LOcyTHU9ECwxJ" // Replace with your EmailJS Public Key
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );

//     e.target.reset();
//   };

//   return (
//     <div className="max-w-[632px] mx-auto p-4">
//       <h2 className=" text-[30px] font-saira font-medium mb-2">
//         Fill the form below
//       </h2>
//       <p className="text-[18px] text-gray-600 font-manrope  mb-4">
//         Reach out to us for inquiries, support, or feedback. We're here to help.
//       </p>
//       <form ref={form} onSubmit={sendEmail} className="space-y-4">
//         <div className="">
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             required
//             className="w-full max-w-[632px]  p-2 border outline-primary border-gray-300 "
//           />
//         </div>
//         <div>
//           <input
//             type="tel"
//             name="mobile"
//             placeholder="Mobile Number"
//             required
//             className="w-full max-w-[632px]  p-2 border  outline-primary border-gray-300"
//           />
//         </div>
//         <div>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             required
//             className="w-full max-w-[632px]  p-2 border  outline-primary border-gray-300"
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             name="address"
//             placeholder="Address"
//             required
//             className="w-full max-w-[632px]  p-2 border  outline-primary border-gray-300"
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             name="profession"
//             placeholder="Work / Profession"
//             required
//             className="w-full max-w-[632px]  p-2 border  outline-primary border-gray-300"
//           />
//         </div>
//         <div>
//           <textarea
//             name="message"
//             placeholder="Enter your requirements here"
//             required
//             className="w-full max-w-[632px] h-[190px]  outline-primary  p-2 border border-gray-300"
//           ></textarea>
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-primary  outline-primary text-white py-2 rounded hover:bg-yellow-600"
//         >
//           SEND MESSAGE
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;




// "use client";
// import React, { useRef } from "react";
// import emailjs from "emailjs-com";

// const ContactForm = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_mt3b6ct", // Replace with your EmailJS Service ID
//         "template_1dmtjr8", // Replace with your EmailJS Template ID
//         form.current,
//         "YDb-LOcyTHU9ECwxJ" // Replace with your EmailJS Public Key



//         // "service_ttnlzou", // Replace with your EmailJS Service ID
//         // "template_aav588u", // Replace with your EmailJS Template ID
//         // form.current,
//         // "JfIqhIVzDzBfqJi-r" // Replace with your EmailJS Public Key

//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );

//     e.target.reset();
//   };

//   const validatePhoneNumber = (e) => {
//     const value = e.target.value;
//     const regex = /^[0-9]{0,10}$/; // Allows only numbers and limits to 10 digits
//     if (!regex.test(value)) {
//       e.target.setCustomValidity("Please enter a valid 10-digit phone number.");
//     } else {
//       e.target.setCustomValidity(""); // Clears the error
//     }
//   };

//   const validateName = (e) => {
//     const value = e.target.value;
//     if (value.length < 2) {
//       e.target.setCustomValidity("Name must be at least 2 characters long.");
//     } else {
//       e.target.setCustomValidity(""); // Clears the error
//     }
//   };

//   return (
//     <div className="max-w-[632px] mx-auto p-4">
//       <h2 className=" text-[30px] font-saira font-medium mb-2">
//         Fill the form below
//       </h2>
//       <p className="text-[18px] text-gray-600 font-manrope mb-4">
//         Reach out to us for inquiries, support, or feedback. We're here to help.
//       </p>
//       <form ref={form} onSubmit={sendEmail} className="space-y-4">
//         <div className="">
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             required
//             minLength="2"
//             onInput={validateName}
//             className="w-full max-w-[632px] p-2 border outline-primary border-gray-300"
//           />
//         </div>
//         <div>
//           <input
//             type="tel"
//             name="mobile"
//             placeholder="Mobile Number"
//             required
//             maxLength="10"
//             onInput={validatePhoneNumber}
//             className="w-full max-w-[632px] p-2 border outline-primary border-gray-300"
//           />
//         </div>
//         <div>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             required
//             className="w-full max-w-[632px] p-2 border outline-primary border-gray-300"
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             name="address"
//             placeholder="Address"
//             required
//             className="w-full max-w-[632px] p-2 border outline-primary border-gray-300"
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             name="profession"
//             placeholder="Work / Profession"
//             required
//             className="w-full max-w-[632px] p-2 border outline-primary border-gray-300"
//           />
//         </div>
//         <div>
//           <textarea
//             name="message"
//             placeholder="Enter your requirements here"
//             required
//             className="w-full max-w-[632px] h-[190px] outline-primary p-2 border border-gray-300"
//           ></textarea>
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-primary outline-primary text-white py-2 rounded hover:bg-yellow-600"
//         >
//           SEND MESSAGE
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;






"use client";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mt3b6ct", // Replace with your EmailJS Service ID
        "template_1dmtjr8", // Replace with your EmailJS Template ID
        form.current,
        "YDb-LOcyTHU9ECwxJ" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!");
        },
        (error) => {
          console.error(error.text);
          toast.error("Failed to send message. Please try again.");
        }
      );

    e.target.reset();
  };

  const validatePhoneNumber = (e) => {
    const value = e.target.value;
    const regex = /^[0-9]{0,10}$/; // Allows only numbers and limits to 10 digits
    if (!regex.test(value)) {
      e.target.setCustomValidity("Please enter a valid 10-digit phone number.");
    } else if (value.length < 10) {
      e.target.setCustomValidity("Phone number must be exactly 10 digits long.");
    } else {
      e.target.setCustomValidity(""); // Clears the error
    }
  };

  const validateName = (e) => {
    const value = e.target.value;
    if (value.length < 2) {
      e.target.setCustomValidity("Name must be at least 2 characters long.");
    } else {
      e.target.setCustomValidity(""); // Clears the error
    }
  };

  return (
    <div className="max-w-[632px] mx-auto p-4">
      <h2 className=" text-[30px] font-saira font-medium mb-2">
        Fill the form below
      </h2>
      <p className="text-[18px] text-gray-600 font-manrope mb-4">
        Reach out to us for inquiries, support, or feedback. We're here to help.
      </p>
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <div className="">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            minLength="2"
            onInput={validateName}
            className="w-full max-w-[632px] p-2 border outline-primary border-gray-300"
          />
        </div>
        <div>
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            required
            maxLength="10"
            onInput={validatePhoneNumber}
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

export default ContactForm;
