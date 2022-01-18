import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = () => {
  const { addCoordinates, deleteBtnValue } = useGlobalContext();

  return (
    <nav className='nav'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img className='nav-logo' src={logo} alt='nav-logo' />
          <button className='btn toggle-btn'>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <button className='link-btn'
              onMouseEnter={(event) => addCoordinates(event)}
              onMouseLeave={(e) => deleteBtnValue(e)}
            >
              products
            </button>
          </li>
          <li>
            <button className='link-btn'
              onMouseEnter={(event) => addCoordinates(event)}
              onMouseLeave={(e) => deleteBtnValue(e)}
            >
              developers
            </button>
          </li>
          <li>
            <button className='link-btn'
              onMouseEnter={(event) => addCoordinates(event)}
              onMouseLeave={() => deleteBtnValue()}
            >
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
