import React from 'react';
import logo from '../../assets/images/logo.webp'
import { FaInstagram } from "react-icons/fa";
import { TbBrandFacebook } from "react-icons/tb";
import './footer.css'

const Footer = () => (
  <footer className='container-x'>
    <div className="footer-head py-6">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className='info-footer-end flex flex-col gap-6 sm:col-span-1 md:col-span-1 lg:col-span-2'>
          <img className='logo' src={logo} alt="" />
          <p>Biz hər zaman istedadlı və yaradıcı insanların axtarışındayıq. Özünüzü tanıtmaqdan çəkinməyin!</p>
          <div className="social-icons">
            <a href="#"><TbBrandFacebook /></a>  
            <a href="#"> <FaInstagram /></a>
          </div>
        </div>
        <div className='sm:col-span-1'>
          <ul>
            <li>
              <h5 className='footer-title font-semibold heading'>Xüsusiyyətlər</h5>
            </li>
            <li><a href="#">Destek</a></li>
            <li><a href="#">Abunəlik</a></li>
            <li><a href="#">Mağaza</a></li>
            <li><a href="#">QR kodlar</a></li>
            <li><a href="#">Patreon Alternativi</a></li>
          </ul>
        </div>
        <div className='sm:col-span-1'>
          <ul>
            <li>
              <h5 className='footer-title font-semibold heading'>İnteqrasiyalar</h5>
            </li>
            <li><a href="">Facebook</a></li>
            <li><a href="">Instagram</a></li>
            <li><a href="">TikTok</a></li>
            <li><a href="">Telegram</a></li>
            <li><a href="">Wordpress</a></li>
          </ul>
        </div>
        <div className='sm:col-span-1'>
          <ul>
            <li>
              <h5 className='footer-title font-semibold heading'>Kofeal</h5>
            </li>
            <li><a href="">Haqqımızda</a></li>
            <li><a href="">Qaydalar</a></li>
            <li><a href="">Məxfilik</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className='copyright'>
      <p>Copyright © 2024 <a href="https://bon.az/tr">BONPARA</a> layihəsi. Bütün hüquqlar qorunur.</p>
    </div>
  </footer>
);

export default Footer;
