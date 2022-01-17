import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const { subLinksArr, coordinatesValue, btnValue } = useGlobalContext();

  const [links, setLinks] = useState([]);
  const submenuRef = useRef();

  console.log(submenuRef)
  useEffect(() => {
    if (btnValue !== '') {
      let { links } = subLinksArr.find((item) => item.page === btnValue)

      setLinks(links);
    }
  }, [btnValue, subLinksArr])

  useEffect(() => {
    const {left, top} = coordinatesValue;

    submenuRef.current.style.left = `${left + 80}px`
    submenuRef.current.style.top = `${top + 46}px`

  }, [coordinatesValue])

  return (
    <aside className='submenu' ref={submenuRef}>
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
