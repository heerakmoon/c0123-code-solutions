import './AppDrawer.css';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

export default function AppDrawer () {
  const menuOptions = ['About', 'Get Started', 'Sign In']
  const [open, setOpen] = useState(false);

  function handleClick () {
    setOpen(!open);
  }

  const modal = open ? 'Modal' : 'Modal drawerclosed';

  return (
    <div>
      <FaBars onClick={handleClick} className='iconmargin' size={30} />
      <div className={modal}>
        <div className='Appdrawer'>
          <h4>Menu</h4>
          {menuOptions.map((option) => <h5 key={option}>{option}</h5>)}
        </div>
      </div>
    </div>
  )
}
