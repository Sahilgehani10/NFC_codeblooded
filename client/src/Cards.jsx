import React from "react";
import CardTemplate from "./CardTemplate";
import { easeIn, motion } from "framer-motion";
import { slideIn, staggerContainer } from "./motion/motion";



const Cards = () => {
  const data = [
    {
      name: 1,
      img: null,
      description:
      "Guaranteed AC rides"
        ,
    },

    {
      name: 2,
      img:null
    ,
      description:
        "Helps save the environment in the wake of global warming and also helps save petrol cost",
    },

    {
      name: 3,
      img: null,
      description:
      "Helps save your time by reducing traffic on roads leading for a better daily schedule",
    },
  ];
  return (
    <motion.div
      variants={staggerContainer}
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className=" flex max-md:flex-col max-md:justify-center w-[full] pt-[10rem]  align-center justify-around  bg-[#0d1117] text-white">
        {data.map((i) => (
          <motion.div
            variants={slideIn("up", easeIn, 0.25, 0.25)}
            initial={"hidden"}
            whileInView={"show"}
          >
            <CardTemplate img={i.img} name={i.name} message={i.description} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Cards;
