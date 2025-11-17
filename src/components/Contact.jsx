import React, { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleWhatsApp = () => {
    setLoading(true);

    // Your WhatsApp number in international format (without +)
    const phoneNumber = "+8801621961907"; // replace with your number
    const message = encodeURIComponent("Hello Mahfuz, I got your contact from your portfolio. I would like to get in touch with you!");
    
    // Open WhatsApp link
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
    
    setLoading(false);
  };

  return (
    <div className='xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn("down", "tween", 0.2, 2)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className='mt-12 flex flex-col gap-8'>
          <p className='text-white'>
            Click the button below to contact me directly via WhatsApp:
          </p>

          <button
            onClick={handleWhatsApp}
            className='bg-green-600 hover:bg-green-700 py-3 px-8 rounded-xl w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Opening..." : "Contact via WhatsApp"}
          </button>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
