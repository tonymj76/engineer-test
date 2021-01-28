import { useMemo, useState } from "react";
import Logo from '../assets/icons/svg/logo.svg';
import DoorBell from '../assets/icons/svg/icon-doorbell.svg';
import UserIcon from '../assets/icons/svg/usericon.svg';
import ArrowDown from '../assets/icons/svg/arrow-down.svg';
import SearchIcon from '../assets/icons/svg/search.svg';
import Divide from '../assets/icons/svg/divisions.svg';
import Home from '../assets/icons/svg/home.svg';
import Enteries from '../assets/icons/svg/emtries.svg';
import Bread from "../assets/icons/svg/bread.svg";
import cls from 'classnames';
export default function TopNavBar() {
  const [activebutton, setactiveButton] = useState("Divisons");
  const navBarDetails = useMemo(
    () => [
      {
        icon: Home,
        text: "Home",
      },
      {
        icon: Enteries,
        text: "Entries",
      },
      {
        icon: Divide,
        text: "Divisons",
      },
    ],
    []
  );
  return (
    <div>
      <nav className="custom-nav">
        <div className="custom-nav-logo flex-item">
          <img src={Logo} alt="FE logo" />
          <p className="logo-text">FE Engieer Test 1</p>
          <ul className="custom-nav-list flex-item">
            {navBarDetails.map((detail) => (
              <li
                className={cls("flex-item", {
                  action: activebutton === detail.text,
                })}
                key={detail.icon}
                onClick={() => setactiveButton(detail.text)}
              >
                <img src={detail.icon} alt={detail.text + " icon"} />
                <p className="nav-text">{detail.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="custom-nav-actions flex-item">
          <div className="input-field">
            <img src={SearchIcon} alt="search icon" />
            <input type="text" className="search" />
          </div>
          <div className="bell">
            <img src={DoorBell} alt="Bell-icon" />
          </div>
          <div className="avatar">
            <img src={UserIcon} alt="user-icon" />
          </div>
          <div className="direction">
            <img src={ArrowDown} alt="arrow down" />
          </div>
        </div>
      </nav>
      <ul className="breadcrumb">
        <li>{activebutton}</li>
        <li>
          <img src={Bread} alt="" />
        </li>
        <li>Module</li>
      </ul>
    </div>
  );
};
