import DashboardBody from "../components/DashboardBody";
import TopNavBar from "../components/TopNavBar";
import Card from "../components/Cards";
import CardUserFlow from "../components/CardUserflow";
import iconCastle from "../assets/icons/svg/castle.svg";
import iconSpeaker from "../assets/icons/svg/speeker.svg";
import pin from "../assets/icons/svg/pin.svg";
import phone from "../assets/icons/svg/phone.svg";
import notebook from "../assets/icons/svg/notebook.svg";
import envelope from "../assets/icons/svg/envelope.svg";
import elipse from "../assets/icons/svg/elipse.svg";
import n from "../assets/icons/svg/n.svg";
import cls from "classnames";
import Table from "../components/Table/table.component";
import { TableContainer } from "../components/Table/table.style";
import ActionIcon from '../assets/icons/svg/actionicon.svg';
import highrisk from '../assets/icons/svg/highrisk-arrow.svg';
import midrisk from '../assets/icons/svg/midrisk-arrow.svg';
import lowrisk from '../assets/icons/svg/lowrisk-arrow.svg';
import { useMemo } from "react";

const cardDetails = () => [
    {
      num: 31454,
      item: "Ongoing metric",
    },
    {
      num: 2344,
      item: "Past metric",
    },
    {
      num: 14224,
      item: "Missed metric",
    },
    {
      num: 635,
      item: "Failed metric",
    },
    {
      num: 11334,
      item: "Pending metric",
    },
  ]
const userDetails =
  () => [
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
  ]

function App() {
  const columns = useMemo(
    () => [
      {
        Header: "NAME",
        accessor: "name",
      },
      {
        Header: "LOCATION",
        accessor: "location",
        Cell: ({ cell: { value } }) => (
          <div className="location">
            <h3>{value.state}</h3>
            <p>{value.addr}</p>
          </div>
        ),
      },
      {
        Header: "STATUS",
        accessor: "status",
        Cell: ({ cell: { value } }) => (
          <div className={value === "No Issues" ? "noStatus" : "status"}>
            {value}
          </div>
        ),
      },
      {
        Header: "ENTRIES",
        accessor: "entries",
        Cell: ({ cell: { value } }) => (
          <div className="entries">
            <h3>{value.name}</h3>
            <p>{value.type}</p>
          </div>
        ),
      },
      {
        Header: "RISK PROFILE",
        accessor: "riskprofile",
        Cell: ({ cell: { value } }) => (
          <div
            className={
              value === "Mid Risk"
                ? "mid-risk"
                : value === "Low Risk"
                ? "low-risk"
                : "high-risk"
            }
          >
            <div className="risk flex-item">
              <img
                src={
                  value === "Mid Risk"
                    ? midrisk
                    : value === "Low Risk"
                    ? lowrisk
                    : highrisk
                }
                alt="status risk"
                className="img-risk"
              />
              <p className="risk-text">{value}</p>

            </div>
          </div>
        ),
      },
      {
        Header: "",
        accessor: "action",
        Cell: ({ cell: { value } }) => (
          <div className="actionbutton">
            <img src={value} alt="value" />
          </div>
        ),
      },
    ],
    []
  );
  const data = useMemo(
    () => [
      {
        name: "Courtney Henry",
        location: { state: "Lagos state", addr: "775 Rolling Green Rd." },
        status: "No Issues",
        entries: { name: "19 Unique Entries", type: "Homogenous" },
        riskprofile: "Low Risk",
        action: ActionIcon,
      },
      {
        name: "Darrell Steward",
        location: { state: "Lagos state", addr: "7529 E. Pecan St." },
        status: "2 Issues found",
        entries: { name: "10 Unique Entries", type: "Heterogenous" },
        riskprofile: "Mid Risk",
        action: ActionIcon,
      },
      {
        name: "Cody Fisher",
        location: { state: "Lagos state", addr: "3605 Parker Rd." },
        status: "No Issues",
        entries: {
          name: "8 Unique Entries8",
          type: "Homogenous",
        },
        riskprofile: "Mid Risk",
        action: ActionIcon,
      },
      {
        name: "Bessie Cooper",
        location: { state: "Lagos state", addr: "775 Rolling Green Rd." },
        status: "1 Issue found",
        entries: { name: "12 Unique Entries", type: "Heterogenous" },
        riskprofile: "High Risk",
        action: ActionIcon,
      },
      {
        name: "Annette Black",
        location: { state: "Lagos state", addr: "8080 Railroad St." },
        status: "No Issues",
        entries: { name: "13 Unique Entries", type: "Heterogenous" },
        riskprofile: "Low Risk",
        action: ActionIcon,
      },
      {
        name: "Jenny Wilson",
        location: { state: "Lagos state", addr: "8080 Railroad St." },
        status: "5 Issue found",
        entries: { name: "12 Unique Entries", type: "Homogenous" },
        riskprofile: "High Risk",
        action: ActionIcon,
      },
      {
        name: "Darlene Robertson",
        location: { state: "Lagos state", addr: "3890 Poplar Dr." },
        status: "2 Issue found",
        entries: {
          name: "6 Unique Entries8",
          type: "Homogenous",
        },
        riskprofile: "Mid Risk",
        action: ActionIcon,
      },
      {
        name: "Ralph Edwards",
        location: { state: "Lagos state", addr: "8558 Green Rd." },
        status: "No Issues",
        entries: { name: "14 Unique Entries", type: "Homogenous" },
        riskprofile: "Low Risk",
        action: ActionIcon,
      },
    ],
    []
  );
  return (
    <div>
      <TopNavBar />
      <DashboardBody>
        <div className="card-container flex-item">
          {cardDetails().map((detail) => (
            <Card {...detail} key={detail.num} />
          ))}
        </div>

        <div className="description-body flex-item">
          <div>
            <CardUserFlow headIcon={iconCastle} headText="Division Summary">
              <ul className="user-info">
                {userDetails().map((d) => (
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

          <TableContainer>
            <Table columns={columns} data={data} rowNumber={20} check></Table>
          </TableContainer>
        </div>
      </DashboardBody>
    </div>
  );
}

export default App;
