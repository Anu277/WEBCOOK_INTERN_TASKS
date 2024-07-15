import React, { useEffect, useState } from 'react';
import Input from './Input';


const App=()=>{
  return(
    <div className='m-auto w-96 my-10'>
      <h1 className='text-4xl font-semibold my-10'>Todo list</h1>
      <Input/>
    </div>
  )
  
}
export default App;