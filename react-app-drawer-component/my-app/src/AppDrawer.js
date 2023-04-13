import './AppDrawer.css';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

export default function AppDrawer () {
  const menuOptions = ['About', 'Get Started', 'Sign In']
  const [open, setOpen] = useState(false);

  function handleClick () {
    setOpen(!open);
  }

  const modal = open ? 'Modal open-modal' : 'Modal';
  const appDrawer = open ? 'Appdrawer' : 'Appdrawer drawerclosed'

  return (
    <div>
      <span>
        <FaBars onClick={handleClick} className='iconmargin' size={30} />
      </span>
      <div onClick={handleClick} className={modal}>
        <div onClick={(event) => event.stopPropagation()} className={appDrawer}>
          <h4>Menu</h4>
          {menuOptions.map((option) => <h5 onClick={handleClick}key={option}>{option}</h5>)}
        </div>
      </div>
    </div>
  )
}
