import React from 'react'
import './AddGameFrame.css'

const AddGameFrame = ({name, setName, description, setDescription, error, onButtonClick}) => {
  return (
    <div className="addGame">
      <label className='error'>{error}</label>
      <input className='inputText' value={name} placeholder='Enter the caption of your game' onChange={(event) => setName(event.target.value)} />
      <textarea className='inputText textArea' value={description} placeholder='Enter description of your game' onChange={(event) => setDescription(event.target.value)} />
      <input className='button' type="button" value='Send game data' onClick={onButtonClick}/>
    </div>
   
  )
}

export default AddGameFrame