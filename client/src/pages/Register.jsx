import {Link} from 'react-router-dom'

const Register = () => {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Signup</h1>
      <form className='flex flex-col gap-4'>
        <input type="text" placeholder='UserName' id='username' className='bg-slate-100 p-3 rounded-lg '/>
        <input type="email" placeholder='Email' id='email' className='bg-slate-100 p-3 rounded-lg '/>
        <input type="password" placeholder='Password' id='password' className='bg-slate-100 p-3 rounded-lg '/>
      
      <button className='bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 p-3 disabled:opacity-80'>SignUp</button>
      
      </form>

      <div className='flex gap-2 mt-5'>
        <p>have an account</p>
        <Link to="/signin">
        <span className='text-blue-500'>Sign In</span>
        </Link>
       
      </div>
    </div>
  )
}

export default Register