import Logo from '../assets/icons/svg/logo.svg';
import DoorBell from '../assets/icons/svg/icon-doorbell.svg';
import UserIcon from '../assets/icons/svg/usericon.svg';
import ArrowDown from '../assets/icons/svg/arrow-down.svg';
import SearchIcon from '../assets/icons/svg/search.svg';
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
        <div className="custom-nav-actions flex-item">
          <input type="text" className="search" />
          <div className="bell">
            <img src={DoorBell} alt="Bell-icon" />
          </div>
          <div className="avatar">
            <img src={UserIcon} alt="user-icon"/>
          </div>
          <div className="direction">
            <img src={ArrowDown} alt="arrow down"/>
          </div>
        </div>
      </nav>
    </div>
  );
};
