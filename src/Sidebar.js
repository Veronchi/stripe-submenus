import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context'
import sublinks from './data'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <div className={isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'}>
      <aside className='sidebar'>
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className='sidebar-links'>
          {sublinks.map(({ page, links }, id) => {
            return (
              <article key={`item${id}`}>
                <h4>{page}</h4>
                <div className='sidebar-sublinks'>
                  {links.map(({ url, label, icon }, id) => {
                    return (
                      <a href={url} key={`link${id}`}>
                        {icon}
                        {label}
                      </a>
                    )
                  })}
                </div>
              </article>
            )
          })}
        </div>
      </aside>
    </div>
  )
}

export default Sidebar
