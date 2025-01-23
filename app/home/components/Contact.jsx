import React from 'react'
import ContactForm from './ContactForm'
import ContactCard from "./ContactCard";
import { MdCall, MdEmail, MdMessage, MdWhatsapp } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";


const contactCardData = [
  {
    icon: <MdCall size={20} color="#E3AF45" />, // Example icon
    heading: "Contact Us",
    bodyText:
      "Give us a call to explore the possibilities and start a meaningful partnership.",
    links: [
      { text: "Call: +91 7762975577", url: "tel:+91 7762975577" },
      
    ],
    iconBgColor: "",
  },
  {
    icon: <MdEmail size={20} color="#E3AF45" />, // Example icon
    heading: "Email Us",
    bodyText: "Connect with us easily through email communication",
    links: [{ text: "anandamconstruction12@gmail.com", url: "team@nxtzengroup.com" }],
    iconBgColor: "",
  },
  {
    icon: <FaBuilding size={20} color="#E3AF45" />, // Example icon
    heading: "Visit Us",
    bodyText: "Visit our location for an up-close look at our offerings.",
    links: [
      {
        text: "Anandam Construction",
        url: "https://g.co/kgs/QinoJ7M",
      },
     
    ],
    iconBgColor: "",
  },

];

const Contact = () => {
  return (
   <section id='contact'>
      <div className='flex w-full items-start justify-start h-auto flex-col'>
      
      <div className="flex flex-col md:flex-row max-w-[1280px] gap-y-[56px] w-11/12 px-4 items-start justify-start gap-x-[94px] h-auto">
        {/* left section */}
        <div className="max-w-[550px]  h-auto">
          <div className="flex flex-col gap-[30px] items-start justify-start">
            <div className="flex flex-col gap-3 items-start justify-start">
              <div className="flex text-[16px] text-primary tracking-[2%] font-medium flex-col text gap-4 items-start justify-start">
               CONTACT US
              </div>
              <div className="max-w-[530px] font-saira text-HeadingText w-full text-[40px] font-semibold">
              Get in Touch with Us for Real Estate Excellence and Innovation.
              </div>
            </div>
            <div className="h-2 w-[138px] bg-primary"></div>
          </div>
          <div className='flex flex-col gap-4 mt-11 items-start justify-start'>
          {contactCardData.map((card, index) => (
        <ContactCard
          key={index}
          icon={card.icon}
          heading={card.heading}
          bodyText={card.bodyText}
          links={card.links}
          iconBgColor={card.iconBgColor}
        />
      ))}
      </div>
        </div>
        <ContactForm/>

        </div>
      </div>
    
   </section>
  )
}

export default Contact
