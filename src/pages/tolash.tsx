import { useState } from 'react'
import ToggleMenu from './menu/toggleMenu'
import Menu from './menu/menuToggle'


const Tolash = () => {
  
  const [showToogleMenu, setShowToogleMenu] = useState(false)

  return(
    <>
    <button onClick={()=>setShowToogleMenu(!showToogleMenu)}></button>
    { showToogleMenu &&  <ToggleMenu/>}
    { showToogleMenu &&  <Menu/>}
    </>
  )
}

export default Tolash