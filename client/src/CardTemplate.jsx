import React from 'react'

const CardTemplate = ({img,name,message}) => {
  return (
    <div className='w-[280px] text-center font-bold max-sm:w-[full] bg-[#2f81f7] py-[4rem] px-[2rem]'>
        <img src={img}/>
        <h1>{name}</h1>
        <p>{message}</p>
    </div>
  )
}

export default CardTemplate