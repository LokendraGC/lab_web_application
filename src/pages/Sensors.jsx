import React from 'react'
// import alcohol from '../assets/images/Sensors/alcohol_sensors.jpg'
// import bluetooth from '../assets/images/Sensors/bluetooth_module.jpg'
// import halleffect from '../assets/images/Sensors/hall_effect.jpg'
// import ir from '../assets/images/Sensors/IR.jpg'
// import light from '../assets/images/Sensors/light_sensor.jpg'
// import temperature from '../assets/images/Sensors/temp_sensor.jpg'
// import ultrasonic from '../assets/images/Sensors/ultrasonic.jpg'
// import Categories from '../components/Categories'


const Sensors = () => {

    // const sensors = [
    //     {
    //         id:1,
    //         src:alcohol,
    //         title:'Alcohol Sensor',
    //         qty:'Quantity:'
    //     },
    //     {
    //         id:2,
    //         src:bluetooth,
    //         title:'Bluetooth Sensor',
    //         qty:'Quantity:'
    //     },
    //     {
    //         id:3,
    //         src:halleffect,
    //         title:'HallEffect Sensor',
    //         qty:'Quantity:'
    //     },
    //     {
    //         id:4,
    //         src:ir,
    //         title:'IR Sensor',
    //         qty:'Quantity:'
    //     },
    //     {
    //         id:5,
    //         src:light,
    //         title:'Light Sensor',
    //         qty:'Quantity:'
    //     },
    //     {
    //         id:6,
    //         src:temperature,
    //         title:'Temperature Sensor',
    //         qty:'Quantity:'
    //     },
    //     {
    //         id:7,
    //         src:ultrasonic,
    //         title:'Ultrasonic Sensor',
    //         qty:'Quantity:'
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
            Sensors
          </p>
        </div>
        <div
          className="w-full grid grid-cols-2 sm:grid-cols-3 
              gap-8 text-center py-8 px-8 sm:px-0 "
        >
          {sensors.map(({ id, src, title, qty }) => (
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

export default Sensors