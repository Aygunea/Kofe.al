import React, { useEffect, useState } from 'react';
import { FaArrowRight } from "react-icons/fa6";
import './banner.css';

const Banner = () => {
    const [texts, setTexts] = useState([
        "Video çək",
        "Kitab yaz",
        "İdman et",
        "Öyrədərək",
        "Danışaraq",
        "Rəsm çək"
    ]);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [texts]);

    return (
        <div className='banner flex justify-center items-center'>
            <div className="container-x flex items-center justify-center flex-col text-center gap-6">
                <div className="text-above-slider flex">
                    Backed by
                    <img className='px-1' src="https://kofe.al/assets/images/logo/500.svg" alt="" />
                    Global
                </div>
                <h1 className="title">
                    <span className='theme-gradient text-slide-up'>{texts[currentTextIndex]}</span>
                    <span className='heading'> , sevdiyin işlə məşğul ol,  izləyicilərindən dəstək qazan! </span>
                </h1>
                <form action="#">
                    <input type="text" placeholder='username' />
                    <span>kofe.al/</span>
                    <button className='btn-gradient flex items-center gap-2'>
                        Yarat
                        <FaArrowRight />
                    </button>
                </form>
                <h5 className='heading font-semibold text-xl'>Yarat 🎉 Paylaş 🚀 Qazan ☕</h5>
            </div>
        </div>
    );
}

export default Banner;
