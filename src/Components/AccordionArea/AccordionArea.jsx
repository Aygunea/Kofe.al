import React from 'react'
import DefaultAccordion from './Accordion'
import './style.css'

const AccordionArea = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center gap-5">
                <div className="bg-pink-btn rounded-2xl">FAQ</div>
                <h2 className='heading text-5xl font-bold'>Sizi Maraqlandıran Suallara Cavablar</h2>
            </div>
            <DefaultAccordion />
        </div>
    )
}

export default AccordionArea