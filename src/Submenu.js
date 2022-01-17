import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const { subLinksArr, coordinatesValue, btnValue } = useGlobalContext();

  const [links, setLinks] = useState([]);

  useEffect(() => {
    if (btnValue !== '') {
      let { links } = subLinksArr.find((item) => item.page === btnValue)

      setLinks(links);
    }

  }, [btnValue, subLinksArr])

  return (
    <aside className='submenu'>
      <section>
        <h4>{btnValue}</h4>
        <div className='submenu-center'>
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
