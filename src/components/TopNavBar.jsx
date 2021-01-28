import Logo from '../assets/icons/svg/logo.svg';
export default function TopNavBar() {
  return (
    <div>
      <nav className="custom-nav">
        <div className="custom-nav-logo flex-item">
          <img src={Logo} alt="FE logo" />
          <p>FE Engieer Test 1</p>
          <ul className="custom-nav-list flex-item">
            <li>some</li>
            <li>you</li>
            <li>now</li>
          </ul>
        </div>
        <div className="custom-nav-actions">
          <div className="search">
            search
          </div>
          <div className="bell"></div>
          <div className="avatar"></div>
        </div>
      </nav>
    </div>
  );
};
