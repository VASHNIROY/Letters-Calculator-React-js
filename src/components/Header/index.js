import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-main-container">
    <nav className="nav-main-container">
      <ul className="nav-ul-container">
        <li>Post Product</li>
        <Link to="/orders" className="link-class">
          <li>Orders</li>
        </Link>
      </ul>
    </nav>
  </div>
)

export default Header
