import React, { useEffect } from 'react'
import { useState } from 'react'
import '../index.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Users = () => {

  let [users,setUsers] = useState([])

  useEffect(() =>
  {
    axios.get("http://localhost:3000")
    .then(users => setUsers(users.data))
    .catch(e => console.log(e))
  },[])

    let handleDelete = (id) =>
    {
        axios.delete('http://localhost:3000/delete/'+id)
        .then(users =>{ 
          console.log(users)
          window.location.reload()
        })
        .catch(e => console.log(e))
    }

  return (
    <div className='mx-auto'>

      <table className='w-6/12 mx-auto rounded-2xl shadow-xl text-center mt-20'>
        <thead className='font-bold rounded-2xl'>
        <tr className='bg-gray-100 text-gray-600 uppercase text-md leading-normal'>
          <th className='py-3 px-6 text-center'>Name</th>
          <th className='py-3 px-6 text-center'>Email</th>
          <th className='py-3 px-6 text-center'>Age</th>
          <th className='py-3 px-6 text-center flex justify-evenly items-center'>Action</th>
        </tr>
        </thead>
        <tbody className='text-gray-600 text-sm font-bold'>
        {
            users.map(user => 
            {
              return <tr className=''>
                 <td className='p-4'>{user.name}</td>
                 <td>{user.email}</td>
                 <td>{user.age}</td>
                 <td className='flex flex-row justify-evenly items-center'>

                  <Link to={`/update/${user._id}`}><button className='bg-greenLight text-white px-3 py-2 mt-2 rounded-xl hover:bg-darkGreenLight'>Update</button></Link>                 
                  <button onClick={(e) => handleDelete(user._id)} className='bg-red-400 hover:bg-red-600 text-white px-3 py-2 mt-2 rounded-xl'>Delete</button>   
                </td>
              </tr>
            })
            }
        </tbody>
      </table>
      <div className="mx-auto w-full flex justify-center mt-5">
          <Link className='mx-auto' to="/create"><button className='bg-lightBlue hover:bg-lightBlue500 text-white px-4 py-2 rounded-xl mx-auto'>Add +</button></Link>
      </div>

    </div>

  )
}

export default Users