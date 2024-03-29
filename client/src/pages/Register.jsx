import { useState } from 'react'
import {Link, json} from 'react-router-dom'

const Register = () => {

  const [formData, setformdata] = useState({})
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const handleChange = (e) =>{

   setformdata({...formData, [e.target.id]: e.target.value})
  }

  const handleSubmit = async(e) =>{
    e.preventDefault()

    try {

      setLoading(true)
      setError(true)
      const res = await fetch( `/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(formData)
      })
      const data = await res.json()
      console.log(data)
      if(data.success === false){
        setError(true)
        return
      }

      setLoading(false)

    } catch (error) {
      setLoading(false)
      setError(true)
    }
    
   



  }


  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Signup</h1>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <input type="text" placeholder='UserName' id='username' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange}/>
        <input type="email" placeholder='Email' id='email' className='bg-slate-100 p-3 rounded-lg ' onChange={handleChange}/>
        <input type="password" placeholder='Password' id='password' className='bg-slate-100 p-3 rounded-lg ' onChange={handleChange}/>
      
      <button className='bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 p-3 disabled:opacity-80'>
        {
          loading? 'Loading...': 'signup'
        }
      </button>
      
      </form>

      <div className='flex gap-2 mt-5'>
        <p>have an account</p>
        <Link to="/signin">
        <span className='text-blue-500'>Sign In</span>
        </Link>
      </div>

      <p className='text-red-700 my-5'>{error && 'Something went Wrong'}</p>
    </div>
  )
}

export default Register