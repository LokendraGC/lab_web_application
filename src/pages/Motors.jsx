import React from 'react'
// import brushdc from '../assets/images/Motors/brush_dc.jpg'
// import brushless from '../assets/images/Motors/brush_less.jpg'
// import dcmotors from '../assets/images/Motors/dc_motors.jpg'
// import servo from '../assets/images/Motors/servo_motor.jpg'
// import wheels from '../assets/images/Motors/wheels.jpg'
import Categories from '../components/Categories'



const Motors = () => {
  
//           const motors = [
//             {
//               id:1,
//               src:brushdc,
//               title:'Brsuh DC',
//               qty: 'Quantity:'
//             },
//             {
//               id:2,
//               src:brushless,
//               title:'Brsuhless DC',
//               qty: 'Quantity:'
//             },
//             {
//               id:3,
//               src:dcmotors,
//               title:'DC Motor',
//               qty: 'Quantity:'
//             },
//             {
//               id:4,
//               src:servo,
//               title:'Servo Motor',
//               qty: 'Quantity:'
//             },
//             {
//               id:5,
//               src:wheels,
//               title:'Wheels',
//               qty: 'Quantity:'
//             },

//           ]
           
  return (
    <div className="">
      <div
        className="max-w-screen-lg mx-auto pr-8 flex flex-col 
               justify-center w-full h-full text-white"
      >
        <div>
          <p
            className="text-4xl font-bold inline border-gray-500
                 "
          >
            Motors
          </p>
        </div>
        <div
          className="w-full grid grid-cols-2 sm:grid-cols-3 
              gap-8 text-center py-8 px-8 sm:px-0 "
        >
          {motors.map(({ id, src, title, qty }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-500 hover:scale-110 duration-500 rounded-lg
                py-2 "
            >
              <img src={src} alt="" className="w-42 h-32 mx-auto" />
              <p className="title text-lg font-semibold  mt-3">{title}</p>
              <p className="text-lg font-semibold text-white mt-3">{qty}</p>
            </div>
          ))}
        </div>
      </div>
      {/* <Categories/> */}
    </div>
  );
}

export default Motors