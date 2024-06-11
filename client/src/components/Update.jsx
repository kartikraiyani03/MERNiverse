import React from 'react'
import '../index.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const Update = () => {
  let [ name, setName ] = useState('')
  let [ email, setEmail] = useState('')
  let [ age, setAge ] = useState('')
  let {id} = useParams()
  let nav = useNavigate()

    useEffect(() =>
    {
      axios.get("http://localhost:3000/getUser/"+id)
      .then(users => 
      {
          console.log(users)
          setName(users.data.name)
          setEmail(users.data.email)
          setAge(users.data.age)
      })
      .catch(e => console.log(e))
    },[])
  
    let handleSubmit = (e) =>
    {
          e.preventDefault()
          axios.put("http://localhost:3000/update/"+id,{name,email,age})
          .then(res =>
          {  
            console.log(res.data)
            nav('/')
          })
          .catch(err => console.log('Error:', err.response ? err.response.data : err.message))
    }

  return (
    <div>
       <div className="w-full">
                <form  action="" onSubmit={handleSubmit} className='p-5 mx-auto w-4/12 mt-[100px] gap-5 shadow-xl rounded-2xl pt-2 flex flex-col justify-evenly border'>
                    <h1 className='mx-auto text-4xl my-2 text-greenLight font-bold'>Update Detail</h1>

                    <input type="text" placeholder='Name' name='name' onChange={(e) => setName(e.target.value)} value={name} className='mx-auto border-gray-200 bg-gray-200 p-3 text-black text-md w-full h-[50px] rounded-2xl hover:border-greenLight border-2 hover:bg-gray-100' />

                    <input type="email" placeholder='Email' name='email' onChange={(e) => setEmail(e.target.value)} value={email} className='mx-auto border-gray-200 bg-gray-200 p-3 text-black text-md w-full h-[50px] rounded-2xl hover:border-greenLight border-2 hover:bg-gray-100' />

                    <input type="number" placeholder='Age' value={age} name='age' onChange={(e) => setAge(e.target.value)} className='mx-auto border-gray-200 bg-gray-200 text-black p-3 text-md w-full h-[50px] rounded-2xl hover:border-greenLight border-2 hover:bg-gray-100' />

                    <button type='submit' className='w-full h-[50px] mx-auto border-greenLight bg-greenLight text-lg  text-white rounded-2xl
                    hover:text-greenLight hover:border-greenLight border-2 hover:bg-white hover:shadow-2xl hover:shadow-greenLight'>Update</button>

                    <Link to="/"><button className='w-full h-[50px] mx-auto hover:border-greenLight hover:bg-greenLight text-lg  hover:text-white rounded-2xl
                    text-greenLight border-greenLight border-2 bg-white hover:shadow-2xl hover:shadow-greenLight'>Back</button></Link>  
                </form>
            </div>
    </div>
  )
}

export default Update

