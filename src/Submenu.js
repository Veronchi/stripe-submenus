import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const { currentPage: {page, links}, coordinatesValue, isSubmenuOpen } = useGlobalContext();

  const submenuRef = useRef();

  useEffect(() => {
    const {roundedLeft, top} = coordinatesValue;

    submenuRef.current.style.left = `${roundedLeft + 80}px`
    submenuRef.current.style.top = `${top + 46}px`

  }, [coordinatesValue])

  return (
    <aside className={isSubmenuOpen ? 'submenu show' : 'submenu'} ref={submenuRef}>
      <section>
        <h4>{page}</h4>
        <div className={isSubmenuOpen ? `submenu-center col-${links.length}` : 'submenu-center'}>
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
