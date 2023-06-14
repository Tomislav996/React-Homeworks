
import React from 'react'

const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
        <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
            {/* Left Side */}
            <img className=' row-span-3 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <img className=' row-span-2 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <img className=' row-span-2 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <img className='row-span-3 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/3265460/pexels-photo-3265460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <img className=' row-span-2 object-cover w-full h-full p-2'src="https://images.pexels.com/photos/4394104/pexels-photo-4394104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        {/* Right Side */}
        <div className='flex flex-col h-full  justify-center'>
             <h3 className='text-5xl md:text-6xl font-bold'>Plan Your Next Trip</h3>
             <p className='text-2xl py-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, facilis.</p>
             <p className='pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quae deserunt unde? Voluptatibus, doloribus nihil consectetur optio quibusdam modi quod. Tempore nostrum, temporibus culpa harum quidem dolores corrupti unde in!</p>
        <div>
            <button className='border-black mr-4 hover:shadow-xl'>Learn More</button>
            <button className='bg-black text-white  border-black hover:shadow-xl'>Book Your Trip</button>
        </div>
        </div>
    </div>
  )
}

export default Plan