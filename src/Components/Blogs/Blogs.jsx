import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBlogs } from '../../Slice/BlogsSlice'
import { FaRegEye } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { CiFilter } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import { LuMoveRight } from "react-icons/lu";
import './style.css'
import { NavLink } from 'react-router-dom';

const Blogs = () => {
  let dispatch = useDispatch()
  let blogs = useSelector(state => state.blogs.items)
  useEffect(() => {
    dispatch(fetchBlogs())
  }, [dispatch])
  const blog1 = blogs.filter(item => item.blog === 1)
  const blog2 = blogs.filter(item => item.blog === 2)
  const blog0 = blogs.filter(item => item.blog === 0)

  return (
    <div className="blogs section-gap">
      <div className='container-x bg-slate-50 py-12'>
        <div id='blogs-main' className="flex gap-8" style={{ alignItems: 'stretch' }}>
          {blog1.map((item, index) => (
            <NavLink to={`/blogs/${item.id}`} key={index}>
              <div className='blog flex-1' key={index}>
                <div className="rounded-md">
                  <img src={item.image} alt="" style={{ objectFit: 'cover', width: '100%', maxHeight: '330px' }} />
                </div>
                <div className="blog-card-body bg-white flex flex-col gap-4 p-10">
                  <p className="font-bold text-3xl heading">{item.title}</p>
                  <p className='flex items-center gap-1 heading pb-8'>
                    Daha çox
                    <LuMoveRight />
                  </p>
                </div>
              </div>
            </NavLink>
          ))}
          <div className="flex-1 flex flex-col justify-between">
            {blog2.map((item, index) => (
              <NavLink to={`/blogs/${item.id}`} key={index}>
                <div className="blog flex flex-col" style={{ "maxHeight": "33%" }}>
                  <div className='blog2-item flex' key={index}>
                    <div className="rounded-md flex-1" >
                      <img src={item.image} alt="" style={{ "maxHeight": "150px", "objectFit": "cover" }} />
                    </div>
                    <div className="blog-card-body flex-1 bg-white flex flex-col gap-4 py-4 px-3">
                      <p className="font-bold text-xl heading">{item.title}</p>
                      <p className='flex items-center gap-1 heading pb-8'>
                        Daha çox
                        <LuMoveRight />
                      </p>
                    </div>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>


        <div className="grid grid-cols-2 my-10 items-center">
          <div className="flex flex-col gap-4">
            <h1 className='heading text-3xl font-semibold'>🚀 Bloq yazıları</h1>
            <p className='text-lg' style={{ width: "80%" }}>İstənilən mövzuda yazıçıların hekayələrini, düşüncələrini və təcrübələrini kəşf edin.</p>
          </div>
          <div className='flex gap-2 justify-end'>
            <div className="search-input relative flex">
              <input className='blog-input' placeholder='Axtarış...' type="text" />
              <div className='search flex items-center heading text-lg justify-center'>
                <IoSearch />
              </div>
            </div>
            <div className="blog-btn flex gap-1 items-center">
              Filtr
              <CiFilter />
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 '>
          {blog0 && blog0.map((item, index) => (
            <NavLink to={`/blogs/${item.id}`} key={index}>
              <div className='blog flex flex-col bg-white rounded-md' key={index}>
                <div className="blog-image rounded-md">
                  <img src={item.image} alt="" />
                </div>
                <div className="card-body flex flex-col gap-3 px-6 py-7">
                  <h1 className='heading font-bold text-xl'>{item.title}</h1>
                  <p className='font-lg'>{item.description}</p>
                  <div className='flex gap-2 items-center'>
                    <img className='creatorimg' src={item.creatorimg} alt="" />
                    <span className='text-sm font-semibold heading'> {item.creator}</span>
                    <div className="time flex items-center gap-1">
                      <FaRegEye />
                      {item.review}
                      <IoTimeOutline />
                      {item.time}
                    </div>
                  </div>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blogs