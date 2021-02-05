import { useMemo } from "react";
import CardUserFlow from "../components/CardUserflow";
import iconCastle from "../assets/icons/svg/castle.svg";
import iconSpeaker from "../assets/icons/svg/speeker.svg";
import cls from "classnames";
import elipse from "../assets/icons/svg/elipse.svg";
import pin from "../assets/icons/svg/pin.svg";
import phone from "../assets/icons/svg/phone.svg";
import notebook from "../assets/icons/svg/notebook.svg";
import envelope from "../assets/icons/svg/envelope.svg";
import n from "../assets/icons/svg/n.svg";

function SideCardDisplay() {
  const userDetails = useMemo(() => [
    {
      item: "0801 234 5678",
      icon: phone,
    },
    {
      item: "asbfefr@gmail.com",
      icon: envelope,
    },
    {
      item: "Mojidi, Lagos",
      icon: pin,
    },
    {
      item: "2 Journal entries",
      icon: notebook,
    },
    {
      item: "24 fingerprints enrolled",
      icon: n,
    },
  ], []);
  return (
    <div className="side-card-group">
      <CardUserFlow headIcon={iconCastle} headText="Division Summary">
        <ul className="user-info">
          {userDetails.map((d) => (
            <li key={d.item} className="listitem flex-item">
              <img src={d.icon} alt={d.icon} />
              <a
                href="//#endregion"
                className={cls({
                  activelist: d.item === "2 Journal entries",
                })}
              >
                {d.item}
              </a>
            </li>
          ))}
        </ul>
      </CardUserFlow>
      <CardUserFlow headIcon={iconSpeaker} headText="Module History">
        <div id="timeline-content">
          <ul className="timeline">
            <li className="event">
              <h3>Searched “Journal Entries” on Division module</h3>
              <p>
                22:10 15/09/2020
                <span>
                  <img src={elipse} alt="elipse" />
                </span>
                Web
              </p>
            </li>
            <li className="event">
              <h3>Searched “Fingerprint record” on Division module</h3>
              <p>
                22:10 15/09/2020
                <span>
                  <img src={elipse} alt="elipse" />
                </span>
                Web
              </p>
            </li>
            <li className="event">
              <h3>Searched “Journal Entries” on Division module</h3>
              <p>
                22:10 15/09/2020
                <span>
                  <img src={elipse} alt="elipse" />
                </span>
                Web
              </p>
            </li>
          </ul>
        </div>
      </CardUserFlow>
    </div>
  );
}

export default SideCardDisplay
