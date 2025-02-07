import React, { useEffect, useState } from 'react';
import Users from '../Users/Users';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../Slice/UsersSlice';
import { setSearchText, setCategory, filterItems } from '../../Slice/FilterSlice';
import { AiOutlineCaretDown } from "react-icons/ai";
import './style.css'
import { Link } from 'react-router-dom';
const Creators = () => {
  const dispatch = useDispatch();
  const { searchText, category, filteredItems } = useSelector(state => state.filter);
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

  useEffect(() => {
    dispatch(fetchUsers()).then((action) => {
      dispatch(filterItems({ searchText, category, items: action.payload }));
    });
  }, [dispatch, searchText, category]);

  const handleSearchChange = (e) => {
    dispatch(setSearchText(e.target.value));
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    dispatch(setCategory(option.value));
    setIsOpen(false);
  };

  const getUserCountByCategory = (category) => {
    if (category === 'hamısı') {
      return filteredItems.length;
    } else {
      return filteredItems.filter(user => user.category === category).length;
    }
  };

  return (
    <div>
      <div className='creators-image-wrapper section-gap relative'>
        <div className="container-x gap-4 flex justify-center flex-col">
          <div className='flex gap-3 items-center mt-4'>
            <h1 className='text-black font-bold text-5xl'>Üzvlərimiz</h1>
            <Link to="/" className="badge heading text-[10px] md:text-base">
              <div className="image">🎉</div>
              {filteredItems.length} Yaradıcı
            </Link>
          </div>
          <p className='heading'>Siz də öz yaradıcılıq fəaliyyətinizdən qazanan şəxslərdən olun.</p>
          <div className="creators-content absolute bg-white flex items-center justify-center">
            <div className="creators-btn relative inline-block text-left">
              <button
                onClick={toggleDropdown}
                type="button"
                style={{"borderRight":"1px solid #eaeaea"}}
                className="inline-flex justify-between items-center pr-5 w-full text-sm focus:outline-none"
                aria-expanded={isOpen}
                aria-haspopup="true"
              >
                {category === 'hamısı' ? 'Hamısı' : options.find(opt => opt.value === category)?.label}
                <AiOutlineCaretDown />
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
              <input type="search" className='creators-input' placeholder='Axtar...' value={searchText} onChange={handleSearchChange} />
              <span className='absolute right-5 top-3'>
              </span>
            </div>
          </div>

        </div>
      </div>
      <Users filteredUsers={filteredItems} />
    </div>
  );
};

export default Creators;
