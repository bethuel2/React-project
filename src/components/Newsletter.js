import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white'>
        <div className=' max-w-[1240px] max-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 '> 
                <h1 className='md:text-1xl sm:text-2xl text-1xl font-bold py-1'> Want tips & tricks to optimize your flow?</h1>
                <p> Sign up to our newsletter and stay up to date</p>
            </div>
            <div className=' flex flex-col my-4 justify-center'> 
            <input className='w-64 h-9 p-3 flex rounded-md text-black' type='email' placeholder='Enter Email'/>
            <button className="bg-[#00df9a] w-[200px] rounded-full font-medium ml-4 my-3 py-1 px-1 text-black ">Notify me </button>
            <p> We care about the protection of your data.Read our <span className='text-[#00df9a]'>privacy policy</span></p>
            </div>  
        </div>


    </div>
  )
}

export default Newsletter