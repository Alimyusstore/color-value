import React, { useState } from 'react'
import Box from './pages/Box'
import Input from './pages/Input'
import Button from './pages/Button';

const App = () => {
  const [colorValue, setColorValue] = useState("");
  const [hexValue, setHexValue] = useState('#000')
  const [textChange, setTextChange] = useState(true)
  return (
    <div className='h-screen flex flex-col justify-center items-center gap-10 text-center text-[1.2rem]'>
      <Box colorValue={colorValue} hexValue={hexValue} textChange={textChange}/>
      <Input  colorValue={colorValue} setColorValue={setColorValue} hexValue={hexValue} setHexValue={setHexValue}/>
      <Button textChange={textChange} setTextChange={setTextChange}/>
    </div>
  )
}

export default App
