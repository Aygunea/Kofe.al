import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiUser } from "react-icons/fi";
import { SlSocialInstagram, SlSocialYoutube } from "react-icons/sl";
import { FaGlobe } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { RiTiktokLine, RiTelegramLine } from "react-icons/ri";
import './users.css';

const Users = ({ filteredUsers }) => {
  return (
    <div className='container-x bg-slate-50 py-12'>
      <div className='users grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 '>
        {filteredUsers && filteredUsers.map((item, index) => (
          <NavLink to={`/user/${item.id}`} key={index}>
            <div className='user relative rounded-lg shadow-sm flex flex-col justify-center gap-4 items-center py-12 px-3 bg-white' key={index}>
              <div className="image absolute">
                <img src={item.image} alt="" />
              </div>
              <div className='heading text-lg font-semibold'>{item.title}</div>
              <p className='subtitle text-center font-medium'>{item.subtitle}</p>
              <div className='flex gap-2 items-center'>
                <FiUser />
                {item.supporter}
                <span>Dəstəkçi</span>
              </div>
              <div className="flex justify-center items-center gap-4 pt-5">
                {item.facebook && <SlSocialFacebook />}
                {item.instagram && <SlSocialInstagram />}
                {item.tiktok && <RiTiktokLine />}
                {item.telegram && <RiTelegramLine />}
                {item.youtube && <SlSocialYoutube />}
                {item.globe && <FaGlobe />}
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Users;
