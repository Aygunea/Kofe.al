import React, { useEffect } from 'react'
import Users from './Users'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../Slice/UsersSlice';

const UsersArea = () => {
    const dispatch = useDispatch();

    const filteredUsers = useSelector(state => state.users.items);
    console.log(filteredUsers);
    useEffect(() => {
        dispatch(fetchUsers());
      }, [dispatch]);
    return (
        <div>
            <div id='section-title' className="text-center py-8">
                <div className="section-btn">ÜZVLƏRİMİZ</div>
                <h2>Top bəxşiş toplayanlar</h2>
                <p className="description">Siz də öz yaradıcılıq fəaliyyətinizdən qazanan şəxslərdən olun.</p>
            </div>
            <Users filteredUsers={filteredUsers} />
        </div>
    )
}

export default UsersArea