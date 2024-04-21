import React, { useState, useEffect } from 'react';
import Users from '../Users/Users';
import { CgSearch } from "react-icons/cg";
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../Slice/UsersSlice';
import { AiOutlineCaretDown } from "react-icons/ai";

const Creators = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');
  const users = useSelector(state => state.users.items);
  const [isOpen, setIsOpen] = useState(false);
  const options = [
    { value: 'hamısı', label: 'Hamısı' },
    { value: 'idman', label: 'İdman' },
    { value: 'streaming', label: 'Streaming' },
    { value: 'sosialmedia', label: 'Sosial Media' },
    { value: 'blog', label: 'Blog' },
    { value: 'incesenet', label: 'İncəsənət' },
    { value: 'video-yaradiciliq', label: 'Video-yaradıcılıq' }
  ];
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedOption, setSelectedOption] = useState(options[0]);


  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    setFilteredUsers(users); // Kullanıcılar alındığında filteredUsers'ı güncelle
  }, [users]);

  const handleSearch = (event) => {
    setSearchText(event.target.value);
    setFilteredUsers(filterUsers(event.target.value, selectedOption ? selectedOption.value : null));
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    setFilteredUsers(filterUsers(searchText, option.value));
  };

  const filterUsers = (searchText, category) => {
    let filtered = users;
    if (searchText) {
      filtered = filtered.filter(user =>
        user.title.toLowerCase().includes(searchText.toLowerCase())
      );
    }
    if (category && category !== 'hamısı') {
      filtered = filtered.filter(user => user.category === category);
    }
    return filtered;
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const getUserCountByCategory = (category) => {
    if (category === 'hamısı') {
      return users.length;
    } else {
      return users.filter(user => user.category === category).length;
    }
  };
  return (
    <div>
      <div className='creators-image-wrapper section-gap relative'>
        <div className="container-x gap-4 flex justify-center flex-col">
          <div className='flex gap-3 items-center mt-4'>
            <h1 className='text-black font-bold text-5xl'>Üzvlərimiz</h1>
            <a href='#' className="badge heading">
              <div className="image">🎉</div>
              {filteredUsers.length} Yaradıcı
            </a>
          </div>
          <p className='heading'>Siz də öz yaradıcılıq fəaliyyətinizdən qazanan şəxslərdən olun.</p>
          <div className="creators-content absolute bg-white flex items-center justify-center">
            <div className="creators-btn relative inline-block text-left">
              <button
                onClick={toggleDropdown}
                type="button"
                className="inline-flex w-full gap-x-1.5 rounded-md text-sm focus:outline-none"
                aria-expanded={isOpen}
                aria-haspopup="true"
              >
                {selectedOption && (
                  <div className='flex items-center justify-between gap-1 pr-6' style={{ "width": "100%",borderRight:"1px solid #eaeaea" }}>
                    {selectedOption.label}
                    <AiOutlineCaretDown />
                  </div>
                )}

              </button>
              {isOpen && (
                <div
                  className="absolute right-0 z-10 mt-4 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  tabIndex="-1"
                >
                  {options.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleOptionClick(option)}
                      type="button"
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      {option.label}
                      ({getUserCountByCategory(option.value)})
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="flex relative" style={{ "width": "90%" }}>
              <input type="search" placeholder='Axtar...' value={searchText} onChange={handleSearch} />
              <span className='absolute right-5 top-3'>
                {/* <CgSearch /> */}
              </span>
            </div>
          </div>
        </div>
      </div>
      <Users filteredUsers={filteredUsers} />
    </div>
  );
};

export default Creators;
