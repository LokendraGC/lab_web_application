import React from 'react'
import './style.css'
import logo from "../assets/images/text_logo_thumb.png";
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram } from 'react-icons/bs';

const About = () => {
  return (
    <>
      <div className="text-white text-md about flex flex-col items-center space-y-10 justify-center md:pt-16 max-sm:pt-36 max-sm:p-0 ">
        <div>
          <p>Lokendra G C </p>
          <p>Frontend Development</p>
          <p>gclokendra10@gmail.com</p>
        </div>
        <div className="max-sm:pl-14 md:pl-14">
          <p>Raman Pokhrel </p>
          <p>Backend Development</p>
          <p>fantasticramanpok.rp@gmail.com</p>
        </div>
        <div className="">
          <p>Ritik krishna Shrestha</p>
          <p>Integration part</p>
          <p>shrestharitik@gmail.com </p>
        </div>
        <div className="text-white pt-16 p-12">
          SEIS is Sagarmatha Electronics and Information Engineering students
          Society.At SEIS, we strive to create an engaging and inclusive
          environment that promotes collaboration, knowledge sharing, and
          personal development.Our society aims to bring together students who
          share a passion for this dynamic discipline, providing them with
          opportunities for growth, learning, and networking.
        </div>
      </div>
      <div className="flex justify-center pl-6 max-sm:pl-0">
        <Link to="/" className="">
          <img src={logo} className="h-16 w-60 " alt="" />
        </Link>
        <div className="flex pt-3 space-x-8 max-sm:pr-5">
          <a
            href="https://www.facebook.com/seis.sec"
            target="_blank"
            class="facebook-link"
          >
            <BsFacebook className="fill-blue-500 h-10 w-10" />
          </a>
          <a
            href="https://www.instagram.com/seis.sec"
            target="_blank"
            class="instagram-link"
          >
            <BsInstagram className="fill-pink-600 h-10 w-10" />
          </a>
        </div>
      </div>
    </>
  );
}

export default About