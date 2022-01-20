import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = () => {
  const { closeSubmenu, openSubmenu, openSidebar } = useGlobalContext();
  const calcBtnValues = (e) => {
    const text = e.target.textContent
    const { left, top } = e.target.getBoundingClientRect();
    const roundedLeft = parseFloat(left.toFixed(3));
    const coordinates = {roundedLeft , top};
    openSubmenu(text, coordinates);
  }

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu();
    }
  };

  return (
    <nav className='nav' onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img className='nav-logo' src={logo} alt='nav-logo' />
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <button className='link-btn' onMouseOver={calcBtnValues}>
              products
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={calcBtnValues}>
              developers
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={calcBtnValues}>
              company
            </button>
          </li>
        </ul>
        <button className='btn signin-btn'>Sign in</button>
      </div>
    </nav>
  )
}

export default Navbar
