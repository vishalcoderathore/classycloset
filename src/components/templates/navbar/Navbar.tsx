import { Link, Outlet } from 'react-router-dom';
import ImageButton from '../../base/image-button/ImageButton';
import CCLogo from '../../../assets/logo.png';
import './Navbar.styles.scss';

const Navbar = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div className="logo">
            <ImageButton src={CCLogo} alt="App Logo" />
          </div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
