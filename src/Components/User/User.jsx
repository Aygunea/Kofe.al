import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../../Slice/UsersSlice'
import { FiUser } from "react-icons/fi";
import './style.css'
import { useParams } from 'react-router-dom'

const User = () => {
    let { id } = useParams();
    let dispatch = useDispatch()
    let users = useSelector(state => state.users.items)
    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])
    let user = users.find(user => user.id === id);
    if (!user) {
        return <div>User not found!</div>; 
    }
    return (
        <div>
            <div className="container-x">
                <div className="user-head flex gap-3 items-end pl-12 pb-12" style={{ "backgroundImage": "url('https://kofe.al/defaults/user-cover.jpg')" }}>
                    <img src={user.image} alt="" />
                    <div className="user-info flex flex-col justify-center gap-2">
                        <h1 className='text-3xl text-white font-bold'>{user.title}</h1>
                        <p className='text-lg text-white font-semibold'>{user.subtitle}</p>
                        <div className='flex gap-2 items-center text-white text-sm'>
                            <FiUser />
                            {user.supporter}
                            <span>Dəstəkçi</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 
export default User