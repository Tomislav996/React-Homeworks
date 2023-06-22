
import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {
      year: 2020,
      title: "Content Creator",
      duration: "3 years",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      year: 2017,
      title: "Google",
      duration: "3 years",
      details: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
    },
    {
      year: 2015,
      title: "Amazon",
      duration: "2 years",
      details: "Nullam ullamcorper nisl vel lorem dapibus, eu semper metus interdum."
    },
    {
      year: 2012,
      title: "Facebook",
      duration: "3 years",
      details: "Maecenas sed justo sed mauris blandit condimentum eget nec est."
    }
  ];
  

const Work = () => {
  return (
    <div id="work" className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'></h1>
        {data.map((item, index)=> (
            <WorkItem 
            key={index} 
            year={item.year} 
            title={item.title} 
            duration={item.duration} 
            details={item.details}/>
        ))}
    </div>
  )
}

export default Work