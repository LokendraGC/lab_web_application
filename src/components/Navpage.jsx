import React from "react";
import { Route, Routes } from "react-router-dom";
import Cables from "../pages/Cables";
import Motors from "../pages/Motors";
import Sensors from "../pages/Sensors";
import Basic_elc_cmp from "../pages/Basic_elc_cmp";
import Categories from "./Categories";
import CardWrapper from "./CardWrapper";

// Basic Electronics ko data
import arduino from "../assets/images/basic_elc_cmp/Arduino2.jpg";
import resistor from "../assets/images/basic_elc_cmp/Resistors_Array.jpg";
import capacitor from "../assets/images/basic_elc_cmp/capacitor.jpg";
import diode from "../assets/images/basic_elc_cmp/diod.jpg";
import ic from "../assets/images/basic_elc_cmp/ICs.jpg";
import battery from "../assets/images/basic_elc_cmp/lipo_battery.jpg";
import respbery from "../assets/images/basic_elc_cmp/raspberry_pi.jpg";
import led from "../assets/images/basic_elc_cmp/leds.jpg";
import inductor from "../assets/images/basic_elc_cmp/inductor.jpg";
import motor from "../assets/images/basic_elc_cmp/motor.jpg";
import multimeter from "../assets/images/basic_elc_cmp/multimeter.jpg";
import relay from "../assets/images/basic_elc_cmp/relay.jpg";

// cables ko data
import coaxail from "../assets/images/cables/coaxial.jpg";
import connectors from "../assets/images/cables/connectors.jpg";
import ff_jumper from "../assets/images/cables/f_f_jumper.jpg";
import fiber from "../assets/images/cables/fiber.jpg";
import mf_jumper from "../assets/images/cables/m_f_jumper.jpg";
import mm_jumper from "../assets/images/cables/m_m_jumper.png";
import wires from "../assets/images/cables/wires.jpg";

// Motors ko data
import brushdc from "../assets/images/Motors/brush_dc.jpg";
import brushless from "../assets/images/Motors/brush_less.jpg";
import dcmotors from "../assets/images/Motors/dc_motors.jpg";
import servo from "../assets/images/Motors/servo_motor.jpg";
import wheels from "../assets/images/Motors/wheels.jpg";

// Sensors ko data
import alcohol from "../assets/images/Sensors/alcohol_sensors.jpg";
import bluetooth from "../assets/images/Sensors/bluetooth_module.jpg";
import halleffect from "../assets/images/Sensors/hall_effect.jpg";
import ir from "../assets/images/Sensors/IR.jpg";
import light from "../assets/images/Sensors/light_sensor.jpg";
import temperature from "../assets/images/Sensors/temp_sensor.jpg";
import ultrasonic from "../assets/images/Sensors/ultrasonic.jpg";
import SingleComponent from "./SingleComponent";

const Navpage = ({ getAllData }) => {
  // const basic_electrical = [
  //   {
  //     id: 1,
  //     src: arduino,
  //     title: "Arduino",
  //     qty: "Quantity:",
  //   },
  //   {
  //     id: 2,
  //     src: resistor,
  //     title: "Resistor",
  //     qty: "Quantity:",
  //   },
  //   {
  //     id: 3,
  //     src: capacitor,
  //     title: "Capacitor",
  //     qty: "Quantity:",
  //   },
  //   {
  //     id: 4,
  //     src: diode,
  //     title: "Diodes",
  //     qty: "Quantity:",
  //   },
  //   {
  //     id: 5,
  //     src: ic,
  //     title: "ICs",
  //     qty: "Quantity:",
  //   },
  //   {
  //     id: 6,
  //     src: battery,
  //     title: "Battery",
  //     qty: "Quantity:",
  //   },
  //   {
  //     id: 7,
  //     src: respbery,
  //     title: "Respberry-Pi",
  //     qty: "Quantity:",
  //   },
  //   {
  //     id: 8,
  //     src: led,
  //     title: "LEDs",
  //     qty: "Quantity:",
  //   },
  //   {
  //     id: 9,
  //     src: inductor,
  //     title: "Indcutor",
  //     qty: "Quantity:",
  //   },
  //   {
  //     id: 10,
  //     src: motor,
  //     title: "Motor",
  //     qty: "Quantity:",
  //   },
  //   {
  //     id: 9,
  //     src: multimeter,
  //     title: "Multimeter",
  //     qty: "Quantity:",
  //   },
  //   {
  //     id: 9,
  //     src: relay,
  //     title: "Relay",
  //     qty: "Quantity:",
  //   },
  // ];

  // const cables = [
  //   {
  //     id: 1,
  //     src: coaxail,
  //     title: "Coaxial Cable",
  //     qty: "Quantity:3",
  //   },
  //   {
  //     id: 2,
  //     src: connectors,
  //     title: "Connectors",
  //     qty: "Quantity:",
  //   },
  //   {
  //     id: 3,
  //     src: ff_jumper,
  //     title: "F-F Jumper",
  //     qty: "Quantity:",
  //   },
  //   {
  //     id: 4,
  //     src: fiber,
  //     title: "Fiber Cable",
  //     qty: "Quantity:",
  //   },
  //   {
  //     id: 5,
  //     src: mf_jumper,
  //     title: "M-F Jumper",
  //     qty: "Quantity:",
  //   },
  //   {
  //     id: 6,
  //     src: mm_jumper,
  //     title: "M-M Jumper",
  //     qty: "Quantity:",
  //   },
  //   {
  //     id: 7,
  //     src: wires,
  //     title: "Wires",
  //     qty: "Quantity:",
  //   },
  // ];

  // const motors = [
  //   {
  //     id: 1,
  //     src: brushdc,
  //     title: "Brsuh DC",
  //     qty: "Quantity:",
  //   },
  //   {
  //     id: 2,
  //     src: brushless,
  //     title: "Brsuhless DC",
  //     qty: "Quantity:",
  //   },
  //   {
  //     id: 3,
  //     src: dcmotors,
  //     title: "DC Motor",
  //     qty: "Quantity:",
  //   },
  //   {
  //     id: 4,
  //     src: servo,
  //     title: "Servo Motor",
  //     qty: "Quantity:",
  //   },
  //   {
  //     id: 5,
  //     src: wheels,
  //     title: "Wheels",
  //     qty: "Quantity:",
  //   },
  // ];

  // const sensors = [
  //   {
  //     id: 1,
  //     src: alcohol,
  //     title: "Alcohol Sensor",
  //     qty: "Quantity:",
  //   },
  //   {
  //     id: 2,
  //     src: bluetooth,
  //     title: "Bluetooth Sensor",
  //     qty: "Quantity:",
  //   },
  //   {
  //     id: 3,
  //     src: halleffect,
  //     title: "HallEffect Sensor",
  //     qty: "Quantity:",
  //   },
  //   {
  //     id: 4,
  //     src: ir,
  //     title: "IR Sensor",
  //     qty: "Quantity:",
  //   },
  //   {
  //     id: 5,
  //     src: light,
  //     title: "Light Sensor",
  //     qty: "Quantity:",
  //   },
  //   {
  //     id: 6,
  //     src: temperature,
  //     title: "Temperature Sensor",
  //     qty: "Quantity:",
  //   },
  //   {
  //     id: 7,
  //     src: ultrasonic,
  //     title: "Ultrasonic Sensor",
  //     qty: "Quantity:",
  //   },
  // ];
  const uniqueCategories = [
    ...new Set(getAllData.map((item) => item.category)),
  ];
  const uniqueTitle = [...new Set(getAllData.map((item) => item.name))];
  return (
    <React.Fragment>
      <section>
        <Routes>
          {/* <Route path="/admin" element={<CardWrapper 
          list={basic_electrical}
          
          />} /> */}
          {uniqueCategories.map((item, index) => (
            <Route
              key={index}
              path={`/${item}`}
              element={
                <CardWrapper
                  list={getAllData.filter((i) => i.category === item)}
                  base_title={item}
                />
              }
            />
          ))}
          {uniqueTitle.map((item, index) => (
            <Route
              key={index}
              path={`/${item}/:id`}
              element={
                <SingleComponent
                  list={getAllData.filter((i) => i.name === item)[0]}
                  base_title={item}
                />
              }
            />
          ))}

          <Route
            path="/"
            element={
              <CardWrapper
                list={getAllData.filter(
                  (i) => i.category === uniqueCategories[0]
                )}
                base_title={uniqueCategories[0]}
              />
            }
          />

          {/* <Route
            path="/cables"
            element={<CardWrapper list={cables} base_title={"Cables"} />}
          />
          <Route
            path="/motors"
            element={<CardWrapper list={motors} base_title={"Motors"} />}
          />

          <Route
            path="/sensors"
            element={<CardWrapper list={sensors} base_title={"Sensors"} />}
          />  */}
        </Routes>
      </section>
    </React.Fragment>
  );
};

export default Navpage;
