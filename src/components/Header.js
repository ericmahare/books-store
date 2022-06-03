import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='navbar'>
      <ul className='nav-list'>
        <li className='heading nav-link'>
          <Link to="/">Bookstore CMS</Link>
        </li>
        <li className='nav-link'>
          <Link to="/">Books</Link>
        </li>
        <li className='nav-link'>
          <Link to="/categories">Categories</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header