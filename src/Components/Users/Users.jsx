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
            <div className='user flex flex-col justify-center items-center py-12 px-3 bg-white' key={index}>
              <div className="image">
                <img src={item.image} alt="" />
              </div>
              <div>{item.title}</div>
              <p className='subtitle text-center font-medium'>{item.subtitle}</p>
              <div className='flex gap-2 items-center'>
                <FiUser />
                {item.supporter}
                <span>Dəstəkçi</span>
              </div>
              <div className="flex gap-4 pt-5">
                <p>{item.facebook && (<SlSocialFacebook />)}</p>
                <p>{item.instagram && (<SlSocialInstagram />)}</p>
                <p>{item.tiktok && (<RiTiktokLine />)}</p>
                <p>{item.telegram && (<RiTelegramLine />)}</p>
                <p>{item.youtube && (<SlSocialYoutube />)}</p>
                <p>{item.globe && (<FaGlobe />)}</p>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Users;
