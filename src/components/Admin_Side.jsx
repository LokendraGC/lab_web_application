import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const Admin_Side = () => {

      const navigate = useNavigate();

      Out = ()=>{
        localStorage.removeItem('token');
        navigate('/');
      }

    useEffect(()=>{
        if(!localStorage.getItem('token'))
        navigate('/signin');
    },[])
  return (
    <div>
      <h3>Admin Side</h3>
            <div className= "  bg-dpink hover:cursor-pointer w-28 h-10 hover:bg-grlink ml-96 rounded-lg flex items-center justify-center mt-16">
        <button  
        onClick={Out}
        className="text-white font-semibold">
          Logout
        </button>
      </div>
    </div>
  )
}

export default Admin_Side
