import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const { currentPage: { page, links }, coordinatesValue, isSubmenuOpen } = useGlobalContext();

  const [columns, setColumns] = useState('');
  const submenuRef = useRef();

  useEffect(() => {
    setColumns('col-2')
    const { roundedLeft, top } = coordinatesValue;
    submenuRef.current.style.left = `${roundedLeft + 80}px`;
    submenuRef.current.style.top = `${top + 46}px`;
    if (links.length === 3) {
      setColumns('col-3')
    }
    if (links.length > 3) {
      setColumns('col-4')
    }
  }, [coordinatesValue, links])

  return (
    <aside
      className={isSubmenuOpen ? 'submenu show' : 'submenu'}
      ref={submenuRef}
    >
      <section>
        <h4>{page}</h4>
        <div className={`submenu-center ${columns}`}>
          {links.map(({ label, icon, url }, id) => {
            return (
              <a key={`id${id}`} href={url}>
                {icon}
                {label}
              </a>
            )
          })}
        </div>
      </section>
    </aside>
  )
}

export default Submenu
