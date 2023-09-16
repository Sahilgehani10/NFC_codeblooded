import React from "react";
import CardTemplate from "./CardTemplate";
import { easeIn, motion } from "framer-motion";
import { slideIn, staggerContainer } from "./motion/motion";

const Cars = () => {
  const data1 = [
    {
      name: "Hatchback",
      img: "/hatchback.png",
      description: "Wagonr/Tata Indica/Swift",
    },

    {
      name: "Sedan",
      img: "/sedan.png",
      description: "Etios/Ciaz",
    },

    {
      name: "SUV",
      img: "/suv.png",
      description: "Ertiga/Innova",
    },
  ];

  return (
    <motion.div
      variants={staggerContainer}
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className=" flex max-md:flex-col max-md:justify-center w-[full] mt-[10rem]  align-center justify-around  bg-[#0d1117] text-white">
        <motion.div
          variants={slideIn("up", easeIn, 0.25, 0.25)}
          initial={"hidden"}
          whileInView={"show"}
        >
          <CardTemplate img={i.img} name={i.name} message={i.description} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Cars;
