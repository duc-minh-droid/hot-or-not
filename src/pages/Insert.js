import React, { useState } from 'react'
import addData from '../firebase/addData'
import UseGetCount from '../firebase/UseGetCount'
import { useNavigate } from 'react-router-dom'

function Insert() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const count = UseGetCount()

  const resetForm = () => {
    setName('')
    setImageUrl('')
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      name, imageUrl,
      point: 0,
      index: count + 1
    }
    addData(data)
    resetForm()
    navigate('/insert')
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>Name of the whore</p>
      <input value={name} type='text' required placeholder='Insert a name'
      onChange={(e)=>setName(e.target.value)}/>
      <p>Whore's image url</p>
      <input value={imageUrl} type='url' placeholder="https://example.com" pattern="https://.*" required
      onChange={(e)=>setImageUrl(e.target.value)}/>
      <br />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Insert