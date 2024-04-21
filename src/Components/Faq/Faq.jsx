import React from 'react'
import DefaultAccordion from '../AccordionArea/Accordion'
import { MdKeyboardArrowRight } from "react-icons/md";
import './style.css'
import { NavLink } from 'react-router-dom';

const Faq = () => {
  return (
    <div>
      <div className='faq-image-wrapper flex items-center justify-center flex-col'>
        <img src="https://kofe.al/assets/images/bg/bg-image-10.jpg" alt="" />
        <div className="faq-content flex items-center justify-center flex-col gap-5">
          <div className="title text-center heading text-5xl font-bold">Sual-Cavab</div>
          <ul className='flex items-center text-sm'>
            <li>
              <NavLink to="/home">
                Əsas
              </NavLink>
            </li>
            <li>
              <MdKeyboardArrowRight />
            </li>
            <li style={{color:"#6b7385"}}> Sual-Cavab</li>
          </ul>
        </div>
      </div>
      <div className="article-content flex items-center justify-center">
        <DefaultAccordion />
      </div>
    </div>
  )
}

export default Faq