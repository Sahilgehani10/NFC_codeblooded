import React from 'react'
import CardTemplate from './CardTemplate';

const Cards = () => {
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
    <div className=' flex max-md:flex-col max-md:justify-center w-[full] mt-[10rem]  align-center justify-around  bg-[#0d1117] text-white' >
        {
          data.map((i)=>(
            <CardTemplate img={i.img} name={i.name} message={i.description} />
          ))
        }
    </div>
  )
}

export default Cards