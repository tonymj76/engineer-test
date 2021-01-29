
import Notification from "../assets/icons/svg/notification.svg";

export default function Cards({num, item}) {
  return (
    <div className="card flex-item">
      <div className="card-info">
        <p className="card-number">{num}</p>
        <p className="card-text">{item}</p>
      </div>

      <div className="card-icon">
        <img src={Notification} alt="Notification" />
      </div>
    </div>
  );
}
