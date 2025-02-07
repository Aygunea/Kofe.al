import React from 'react';
import logo from '../../assets/images/logo.webp'
import { FaInstagram } from "react-icons/fa";
import { TbBrandFacebook } from "react-icons/tb";
import './footer.css'
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className='container-x'>
    <div className="footer-head py-6">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className='info-footer-end flex flex-col gap-6 sm:col-span-1 md:col-span-1 lg:col-span-2'>
          <img className='logo' src={logo} alt="" />
          <p>Biz hər zaman istedadlı və yaradıcı insanların axtarışındayıq. Özünüzü tanıtmaqdan çəkinməyin!</p>
          <div className="social-icons">
            <Link to="/"><TbBrandFacebook /></Link>  
            <Link to="/"> <FaInstagram /></Link>
          </div>
        </div>
        <div className='sm:col-span-1'>
          <ul>
            <li>
              <h5 className='footer-title font-semibold heading'>Xüsusiyyətlər</h5>
            </li>
            <li><Link to="/">Destek</Link></li>
            <li><Link to="/">Abunəlik</Link></li>
            <li><Link to="/">Mağaza</Link></li>
            <li><Link to="/">QR kodlar</Link></li>
            <li><Link to="/">Patreon Alternativi</Link></li>
          </ul>
        </div>
        <div className='sm:col-span-1'>
          <ul>
            <li>
              <h5 className='footer-title font-semibold heading'>İnteqrasiyalar</h5>
            </li>
            <li><Link to="/">Facebook</Link></li>
            <li><Link to="/">Instagram</Link></li>
            <li><Link to="/">TikTok</Link></li>
            <li><Link to="/">Telegram</Link></li>
            <li><Link to="/">Wordpress</Link></li>
          </ul>
        </div>
        <div className='sm:col-span-1'>
          <ul>
            <li>
              <h5 className='footer-title font-semibold heading'>Kofeal</h5>
            </li>
            <li><Link to="/">Haqqımızda</Link></li>
            <li><Link to="/">Qaydalar</Link></li>
            <li><Link to="/">Məxfilik</Link></li>
          </ul>
        </div>
      </div>
    </div>
    <div className='copyright'>
      <p>Copyright © 2024 <Link to="https://bon.az/tr">BONPARA</Link> layihəsi. Bütün hüquqlar qorunur.</p>
    </div>
  </footer>
);

export default Footer;
