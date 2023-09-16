<<<<<<< HEAD
import React from "react";
import CardTemplate from "./CardTemplate";
import { easeIn, motion } from "framer-motion";
import { slideIn, staggerContainer } from "./motion/motion";
=======
import React from 'react'
import CardTemplate from './CardTemplate';
import { motion} from 'framer-motion'
import { slideIn, staggerContainer } from "./motion/motion"
>>>>>>> 48ad6b6a06822ac85b596863a48cb05a340019f8



const Cards = () => {
<<<<<<< HEAD
  const data = [
    {
      name: 1,
      img: null,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    },
=======
    const data = [
        {
          name: 1,
          img: null,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        },
      
        {
          name: 2,
          img: null,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        },
      
        {
          name: 3,
          img: null,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        },
      ];
  return (
   <motion.div variants={staggerContainer} viewport={{once:true,amount:0.25}} >
       <div className=' flex max-md:flex-col max-md:justify-center w-[full] pt-[10rem]  align-center justify-around  bg-[#0d1117] text-white' >
        {
          data.map((i)=>(
            <motion.div variants={slideIn("up", "easeIn",0.25,0.25)} initial={"hidden"} whileInView={'show'} >
              <CardTemplate  img={i.img} name={i.name} message={i.description} />
            </motion.div>
          ))
        }
    </div>
   </motion.div>
  )
}
>>>>>>> 48ad6b6a06822ac85b596863a48cb05a340019f8

    {
      name: 2,
      img: null,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    },

    {
      name: 3,
      img: null,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    },
  ];
  return (
    <motion.div
      variants={staggerContainer}
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className=" flex max-md:flex-col max-md:justify-center w-[full] mt-[10rem]  align-center justify-around  bg-[#0d1117] text-white">
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
