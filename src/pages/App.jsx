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


import { useMemo } from "react";


function App() {
  const cardDetails = useMemo(
    () => [
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
    ],
    []
  );
  const userDetails = useMemo(
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
    ],
    []
  );
  const columns = useMemo(
    () => [
      {
        Header: "NAME",
        accessor: "name",
      },
      {
        Header: "LOCATION",
        accessor: "location",
      },
      {
        Header: "STATUS",
        accessor: "status",
      },
      {
        Header: "ENTRIES",
        accessor: "entries",
      },
      {
        Header: "RISK PROFILE",
        accessor: "riskprofile",
      },{
        Header: "",
        accessor: "action",
      },
    ],
    []
  );
  const data = useMemo(
    () => [
      {
        name: "Beneficiaries",
        location: "Date",
        status: "12,342,000",
        target: "15,123,8344",
        entries: "dd",
        riskprofile: "rr",
        action: "dd",
      },
      {
        name: "Employment after N-Power",
        location: "Date",
        status: "12,342,000",
        target: "15,123,8344",
        entries: "dd",
        riskprofile: "rr",
        action: "dd",
      },
      {
        name: "People with Disability",
        location: "Date",
        status: "12,342,000",
        target: "15,123,8344",
        entries: "dd",
        riskprofile: "rr",
        action: "dd",
      },
      {
        name: "People with Disability",
        location: "Date",
        status: "12,342,000",
        target: "15,123,8344",
        entries: "dd",
        riskprofile: "rr",
        action: "dd",
      },
    ],
    []
  );
  return (
    <div>
      <TopNavBar />
      <DashboardBody>
        <div className="card-container flex-item">
          {cardDetails.map((detail) => (
            <Card {...detail} key={detail.num} />
          ))}
        </div>

        <div className="flex-item">
          <div>
            <CardUserFlow headIcon={iconCastle} headText="Division Summary">
              <ul className="user-info">
                {userDetails.map((d) => (
                  <li key={d.item} className="listitem flex-item">
                    <img src={d.icon} alt={d.icon} />
                    <a
                      href="#"
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
                      22:10 15/09/2020{" "}
                      <span>
                        <img src={elipse} alt="elipse" />
                      </span>{" "}
                      Web
                    </p>
                  </li>
                  <li className="event">
                    <h3>Searched “Fingerprint record” on Division module</h3>
                    <p>
                      22:10 15/09/2020{" "}
                      <span>
                        <img src={elipse} alt="elipse" />
                      </span>{" "}
                      Web
                    </p>
                  </li>
                  <li className="event">
                    <h3>Searched “Journal Entries” on Division module</h3>
                    <p>
                      22:10 15/09/2020{" "}
                      <span>
                        <img src={elipse} alt="elipse" />
                      </span>{" "}
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
