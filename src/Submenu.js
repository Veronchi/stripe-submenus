import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const{subLinksArr} = useGlobalContext();

  return (
    <aside className='submenu'>
       <section>
         <h4>1</h4>
         <div className='submenu-center'></div>
       </section>
    </aside>
  )
}

export default Submenu
