import { useEffect, useState } from 'react'


import React from 'react'



const About = () => {

   const [message, setMessage] = useState("");

   useEffect(() => {
    console.log("FIRST RENDER USE EFFECT")
   }, []);


   useEffect(() => {
    console.log("I will execute ...");
    console.log(message)
  }, [message]);

  const handleMessage =(value) => {
    setMessage(value)
  }


  return (
    <div>
      <h1>About Page</h1>
      <h4>{message}</h4>
      <input type="text" 
      value={message} 
      onChange={(event) => handleMessage(event.target.value)}/>
    </div>
  )
}

export default About