import DashboardBody from "../components/DashboardBody";
import TopNavBar from "../components/TopNavBar";
import {CardDisplay} from '../Layout/CardDisplay';
import SideCardDisplay from '../Layout/SideCardDisplay';
import TableDisplay from "../Layout/Table";

function App() {
  return (
    <div>
      <TopNavBar />
      <DashboardBody>
        <CardDisplay />
        <div className="description-body flex-item">
          <SideCardDisplay />
          <TableDisplay />
        </div>
      </DashboardBody>
    </div>
  );
}

export default App;
