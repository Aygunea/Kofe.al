import React from 'react'
import { FaCheck } from "react-icons/fa6";

import './style.css'
const OnlineShop = () => {
    return (
        <div className='onlineshop flex justify-center items-center section-gap'>
            <div class="top-circle-shape"></div>
            <div className="grid grid-cols-2">
                <div className="col-span-1">
                    <div className="split-inner flex flex-col justify-center gap-4">
                        <div className="section-btn">ONLAYN MAĞAZA</div>
                        <h4 className='text-4xl heading font-bold'>Məhsul və Xidmətlərinizi satın</h4>
                        <p className='text-xl font-normal'>Kofe.al Mağazanızı açaraq, dərhal rəqəmsal və ya fiziki əşyalar əlavə edin. Heç bir abunə və ya aktivləşdirmə haqqı yoxdur. Sadəcə məhsul və ya xidmətlərinizi yerləşdirərək, dərhal satışa başlayın!</p>
                        <h5 className='heading font-semibold text-xl'>Nə satmaq olar?:</h5>
                        <div className="plan-offer-list-wrapper flex gap-12">
                            <ul className="plan-offer-list">
                                <li className='flex gap-3 items-center'>
                                    <span className='flex justify-center items-center'>  <FaCheck /></span>
                                    Fiziki məhsul
                                </li>
                                <li className='flex gap-3 items-center'>
                                    <span className='flex justify-center items-center'>  <FaCheck /></span>
                                    Digital məhsul
                                </li>
                                <li className='flex gap-3 items-center'>
                                    <span className='flex justify-center items-center'>  <FaCheck /></span>
                                    Affiliate məhsul
                                </li>
                            </ul>
                            <ul className="plan-offer-list">
                                <li className='flex gap-3 items-center'>
                                    <span className='flex justify-center items-center'>  <FaCheck /></span>
                                    Fiziki məhsul
                                </li>
                                <li className='flex gap-3 items-center'>
                                    <span className='flex justify-center items-center'>  <FaCheck /></span>
                                    Digital məhsul
                                </li>
                                <li className='flex gap-3 items-center'>
                                    <span className='flex justify-center items-center'>  <FaCheck /></span>
                                    Affiliate məhsul
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 pl-12">
                    <img src="https://kofe.al/assets/images/splash/layout/az/2-shop.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default OnlineShop