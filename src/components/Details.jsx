import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import arduino from '../assets/images/basic_elc_cmp/Arduino2.jpg'
import connectors from '../assets/images/cables/connectors.jpg'
import servo from '../assets/images/Motors/servo_motor.jpg'
import ir from '../assets/images/Sensors/IR.jpg'


const Details = () => {
  
       const navigate = useNavigate()

                       const Out = ()=> {
                         localStorage.removeItem("token");
                         navigate('/')
                       }
          useEffect(()=>{
            if(!localStorage.getItem('token')){
              navigate('/signin')
            }
          },[])



         const compo_details = [
           {
             id: 1,
             src: arduino,
             title: "Arduino",
             issued_date: "Issued Date: 2023-3-2",
             stat: 'Status:Not returned',
             qty: 'Quantity:1'
           },
           {
             id: 2,
             src: connectors,
             title: "Connectors",
             issued_date: "Issued Date: 2023-3-2",
             stat: 'Status:Dekai xaina',
             qty: 'Quantity:1'
           },
           {
             id: 3,
             src: servo,
             title: "Servo",
             issued_date: "Issued Date: 2023-3-2",
             stat: 'Status: Returned',
             qty: 'Quantity:1'
           },
           {
             id: 4,
             src: ir,
             title: "IR",
             issued_date: "Issued Date: 2023-3-2",
             stat: 'Status:Not returned',
             qty: 'Quantity:1'
           },
         ];    


  return (
    <div className="details">
      <div
        className="max-w-screen-lg mx-auto pr-8 flex flex-col 
               justify-center w-full h-full text-white"
      >
        <div>
          <p className="text-4xl font-bold inline border-gray-500">
            Your Components
          </p>
        </div>
        <div
          className="w-full grid grid-cols-2 sm:grid-cols-3 
              gap-8 text-center py-8 px-8 sm:px-0 "
        >
          {compo_details.map(({ id, src, title, issued_date, stat, qty }) => (
            <div
              key={id}
              className="shadow-md  shadow-gray-500 hover:scale-110 duration-500 rounded-lg
                py-2 "
            >
              <img src={src} alt="" className="w-42 h-32 mx-auto" />
              <p className="title text-lg font-semibold  mt-3">{title}</p>
              <p className="text-lg font-semibold text-white mt-3">
                {issued_date}
              </p>
              <p className="text-lg font-semibold text-white mt-3">{stat}</p>
              <p className="text-lg font-semibold text-white mt-3">{qty}</p>
            </div>
          ))}
        </div>
      </div>

      <div className= "  bg-dpink hover:cursor-pointer w-28 h-10 hover:bg-grlink ml-96 rounded-lg flex items-center justify-center mt-16">
        <button  
        onClick={Out}
        className="text-white font-semibold">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Details