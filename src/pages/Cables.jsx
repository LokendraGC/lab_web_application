import React from 'react'
import coaxail from '../assets/images/cables/coaxial.jpg'
import connectors from '../assets/images/cables/connectors.jpg'
import ff_jumper from '../assets/images/cables/f_f_jumper.jpg'
import fiber from '../assets/images/cables/fiber.jpg'
import mf_jumper from '../assets/images/cables/m_f_jumper.jpg'
import mm_jumper from '../assets/images/cables/m_m_jumper.png'
import wires from '../assets/images/cables/wires.jpg'
import Categories from '../components/Categories'





const Cables = () => {

    // const cables = [
    //     {
    //         id:1,
    //         src:coaxail,
    //         title:'Coaxial Cable',
    //         qty: 'Quantity:3'
    //     },
    //     {
    //         id:2,
    //         src:connectors,
    //         title:'Connectors',
    //         qty: 'Quantity:'
    //     },
    //     {
    //         id:3,
    //         src:ff_jumper,
    //         title:'F-F Jumper',
    //         qty: 'Quantity:'
    //     },
    //     {
    //         id:4,
    //         src:fiber,
    //         title:'Fiber Cable',
    //         qty: 'Quantity:'
    //     },
    //     {
    //         id:5,
    //         src:mf_jumper,
    //         title:'M-F Jumper',
    //         qty: 'Quantity:'
    //     },
    //     {
    //         id:6,
    //         src:mm_jumper,
    //         title:'M-M Jumper',
    //         qty: 'Quantity:'
    //     },
    //     {
    //         id:7,
    //         src:wires,
    //         title:'Wires',
    //         qty: 'Quantity:'
    //     },
    // ]
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
            Cables
          </p>
        </div>
        <div
          className="w-full grid grid-cols-2 sm:grid-cols-3 
              gap-8 text-center py-8 px-8 sm:px-0 "
        >
          {cables.map(({ id, src, title, qty }) => (
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

export default Cables
