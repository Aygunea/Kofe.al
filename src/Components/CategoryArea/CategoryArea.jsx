import React from 'react'
import './categoryarea.css'
import { NavLink } from 'react-router-dom';

const CategoryArea = () => {
    let thumbnail = [
        { id: 1, image: 'https://kofe.al/storage/images/categories/web-design.jpg', title: "Veb dizayn", yaradici: "132" },
        { id: 2, image: 'https://kofe.al/storage/images/categories/graphic-design.jpg', title: "Qrafik dizayn", yaradici: "132" },
        { id: 3, image: 'https://kofe.al/storage/images/categories/personal-development.jpg', title: "Şəxsi inkişaf", yaradici: "132" },
        { id: 4, image: 'https://kofe.al/storage/images/categories/author.png', title: "Yazıçılıq", yaradici: "132" },
        { id: 5, image: 'https://kofe.al/storage/images/categories/artist.png', title: "İncəsənət", yaradici: "132" },
        { id: 6, image: 'https://kofe.al/storage/images/categories/arts.jpg', title: "Blog", yaradici: "132" },
        { id: 7, image: 'https://kofe.al/storage/images/categories/Sport.png', title: "İdman", yaradici: "132" },
        { id: 8, image: 'https://kofe.al/storage/images/categories/musician.png', title: "Musiqi", yaradici: "132" },
    ]
    return (
        <div className='container-x'>
            <div className="categoryarea grid gap-x-8 gap-y-8 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {thumbnail.map((item, index) => (
                    <NavLink to="/creators" key={index}>
                        <div className='inner rounded-lg'>
                            <div className="thumbnail">
                                <img className="rounded-lg" src={item.image} alt="" />
                            </div>
                            <div className="content flex flex-col justify-center items-center text-white font-bold">
                                <div>{item.title}</div>
                                <div className='read-more-btn flex justify-center items-center'>
                                    {/* {item.yaradici}
                                    <span>Yaradıcı</span>
                                    <IoMdArrowRoundForward /> */}
                                </div>
                            </div>
                        </div>
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default CategoryArea